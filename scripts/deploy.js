const { ethers } = require('hardhat');
const OnchainID = require('@onchain-id/solidity');

async function deployIdentityProxy(implementationAuthority, managementKey, signer) {
  const IdentityProxyFactory = await ethers.getContractFactory(
    OnchainID.contracts.IdentityProxy.abi,
    OnchainID.contracts.IdentityProxy.bytecode,
    signer,
  );
  const identity = await IdentityProxyFactory.deploy(implementationAuthority, managementKey);
  await identity.deployed();
  return ethers.getContractAt('Identity', identity.address, signer);
}

async function deployFullSuite() {
  const [deployer] = await ethers.getSigners();
  const claimIssuerSigningKey = ethers.Wallet.createRandom();
  const aliceActionKey = ethers.Wallet.createRandom();
  const tokenIssuer = deployer;
  const tokenAgent = deployer;
  const tokenAdmin = deployer;
  const claimIssuer = deployer;
  const aliceWallet = deployer;

  console.log('Fetching1...............');

  // Deploy implementations
  const claimTopicsRegistryImplementation = await ethers.deployContract('ClaimTopicsRegistry', deployer);
  console.log('ClaimTopicsRegistry: ', claimTopicsRegistryImplementation.address);
  const trustedIssuersRegistryImplementation = await ethers.deployContract('TrustedIssuersRegistry', deployer);
  console.log('TrustedIssuerRegistry: ', trustedIssuersRegistryImplementation.address);
  const identityRegistryStorageImplementation = await ethers.deployContract('IdentityRegistryStorage', deployer);
  console.log('identityRegistryStorage: ', identityRegistryStorageImplementation.address);
  const identityRegistryImplementation = await ethers.deployContract('IdentityRegistry', deployer);
  console.log('IdentityRegistrry: ', identityRegistryImplementation.address);
  const modularComplianceImplementation = await ethers.deployContract('ModularCompliance', deployer);
  console.log('modularCompliance: ', modularComplianceImplementation.address);
  const tokenImplementation = await ethers.deployContract('Token', deployer);
  console.log('Token: ', tokenImplementation.address);
  const IdentityFactory = await ethers.getContractFactory(OnchainID.contracts.Identity.abi, OnchainID.contracts.Identity.bytecode, deployer);

  const identityImplementation = await IdentityFactory.deploy(deployer.address, true);
  await identityImplementation.deployed();
  console.log('IdentityFactory: ', identityImplementation.address);
  const ImplementationAuthorityFactory = await ethers.getContractFactory(
    OnchainID.contracts.ImplementationAuthority.abi,
    OnchainID.contracts.ImplementationAuthority.bytecode,
    deployer,
  );
  const identityImplementationAuthority = await ImplementationAuthorityFactory.deploy(identityImplementation.address);
  await identityImplementationAuthority.deployed();
  console.log('Implemetation Authority: ', identityImplementationAuthority.address);
  const FactoryFactory = await ethers.getContractFactory(OnchainID.contracts.Factory.abi, OnchainID.contracts.Factory.bytecode, deployer);
  const identityFactory = await FactoryFactory.deploy(identityImplementationAuthority.address);
  await identityFactory.deployed();
  console.log('Identity Factory: ', identityFactory.address);
  const trexImplementationAuthority = await ethers.deployContract(
    'TREXImplementationAuthority',
    [true, ethers.constants.AddressZero, ethers.constants.AddressZero],
    deployer,
  );
  await trexImplementationAuthority.deployed();
  console.log('TREXImplemetation Autohrity: ', trexImplementationAuthority.address);
  const versionStruct = {
    major: 4,
    minor: 0,
    patch: 0,
  };
  const contractsStruct = {
    tokenImplementation: tokenImplementation.address,
    ctrImplementation: claimTopicsRegistryImplementation.address,
    irImplementation: identityRegistryImplementation.address,
    irsImplementation: identityRegistryStorageImplementation.address,
    tirImplementation: trustedIssuersRegistryImplementation.address,
    mcImplementation: modularComplianceImplementation.address,
  };
  await trexImplementationAuthority.connect(deployer).addAndUseTREXVersion(versionStruct, contractsStruct);

  const trexFactory = await ethers.deployContract('TREXFactory', [trexImplementationAuthority.address, identityFactory.address], deployer);
  await trexFactory.deployed();
  console.log('TREXFactory: ', trexFactory.address);
  await identityFactory.connect(deployer).addTokenFactory(trexFactory.address);

  const claimTopicsRegistryProxy = await ethers.deployContract('ClaimTopicsRegistryProxy', [trexImplementationAuthority.address], deployer);
  console.log('ClaimsTopicsRegistryProxy: ', claimTopicsRegistryProxy.address);
  const claimTopicsRegistry = await ethers.getContractAt('ClaimTopicsRegistry', claimTopicsRegistryProxy.address);

  const trustedIssuersRegistryProxy = await ethers.deployContract('TrustedIssuersRegistryProxy', [trexImplementationAuthority.address], deployer);
  console.log('trustedIssuersRegistryProxy: ', trustedIssuersRegistryProxy.address);
  const trustedIssuersRegistry = await ethers.getContractAt('TrustedIssuersRegistry', trustedIssuersRegistryProxy.address);

  const identityRegistryStorageProxy = await ethers.deployContract('IdentityRegistryStorageProxy', [trexImplementationAuthority.address], deployer);
  console.log('IdentityRegistryStorageProxy: ', identityRegistryStorageProxy.address);
  const identityRegistryStorage = await ethers.getContractAt('IdentityRegistryStorage', identityRegistryStorageProxy.address);

  const defaultCompliance = await ethers.deployContract('DefaultCompliance', deployer);
  await defaultCompliance.deployed();
  console.log('DefaultCompliance: ', defaultCompliance.address);
  const identityRegistryProxy = await ethers.deployContract(
    'IdentityRegistryProxy',
    [trexImplementationAuthority.address, trustedIssuersRegistry.address, claimTopicsRegistry.address, identityRegistryStorage.address],
    deployer,
  );
  console.log('IdentityRegistryProxy: ', identityRegistryProxy.address);
  const identityRegistry = await ethers.getContractAt('IdentityRegistry', identityRegistryProxy.address);

  const tokenOID = await deployIdentityProxy(identityImplementationAuthority.address, tokenIssuer.address, deployer);
  console.log('Token0ID:', tokenOID.address);
  const tokenName = 'TREXDINO';
  const tokenSymbol = 'TREX';
  const tokenDecimals = ethers.BigNumber.from('0');
  const tokenProxy = await ethers.deployContract(
    'TokenProxy',
    [
      trexImplementationAuthority.address,
      identityRegistry.address,
      defaultCompliance.address,
      tokenName,
      tokenSymbol,
      tokenDecimals,
      tokenOID.address,
    ],
    deployer,
  );
  console.log('TokenProxy: ', tokenProxy.address);
  const token = await ethers.getContractAt('Token', tokenProxy.address);

  const agentManager = await ethers.deployContract('AgentManager', [token.address], tokenAgent);
  await agentManager.deployed();
  console.log('AgentManager: ', agentManager.address);
  await identityRegistryStorage.connect(deployer).bindIdentityRegistry(identityRegistry.address);
  await token.connect(deployer).addAgent(tokenAgent.address);

  const claimTopics = [ethers.utils.id('CLAIM_TOPIC')];
  await claimTopicsRegistry.connect(deployer).addClaimTopic(claimTopics[0]);

  const claimIssuerContract = await ethers.deployContract('ClaimIssuer', [claimIssuer.address], claimIssuer);
  await claimIssuerContract.deployed();
  console.log('ClaimIssuerContract: ', claimIssuerContract.address);
  await claimIssuerContract
    .connect(claimIssuer)
    .addKey(ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(['address'], [claimIssuerSigningKey.address])), 3, 1);

  await trustedIssuersRegistry.connect(deployer).addTrustedIssuer(claimIssuerContract.address, claimTopics);

  const aliceIdentity = await deployIdentityProxy(identityImplementationAuthority.address, aliceWallet.address, deployer);
  console.log('AliceIdentity: ', aliceIdentity.address);
  await aliceIdentity
    .connect(aliceWallet)
    .addKey(ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(['address'], [aliceActionKey.address])), 2, 1);

  await identityRegistry.connect(deployer).addAgent(tokenAgent.address);
  await identityRegistry.connect(deployer).addAgent(token.address);

  await identityRegistry.connect(tokenAgent).batchRegisterIdentity([aliceWallet.address], [aliceIdentity.address], [42]);

  const claimForAlice = {
    data: ethers.utils.hexlify(ethers.utils.toUtf8Bytes('Some claim public data.')),
    issuer: claimIssuerContract.address,
    topic: claimTopics[0],
    scheme: 1,
    identity: aliceIdentity.address,
    signature: '',
  };
  claimForAlice.signature = await claimIssuerSigningKey.signMessage(
    ethers.utils.arrayify(
      ethers.utils.keccak256(
        ethers.utils.defaultAbiCoder.encode(['address', 'uint256', 'bytes'], [claimForAlice.identity, claimForAlice.topic, claimForAlice.data]),
      ),
    ),
  );
  await aliceIdentity
    .connect(aliceWallet)
    .addClaim(claimForAlice.topic, claimForAlice.scheme, claimForAlice.issuer, claimForAlice.signature, claimForAlice.data, '');

  await token.connect(tokenAgent).mint(aliceWallet.address, 1000);
  console.log('Balance of alice: ', await token.balanceOf(aliceWallet.address));

  await agentManager.connect(tokenAgent).addAgentAdmin(tokenAdmin.address);
  await token.connect(deployer).addAgent(agentManager.address);
  await identityRegistry.connect(deployer).addAgent(agentManager.address);

  await token.connect(tokenAgent).unpause();

  return {
    accounts: {
      deployer,
      tokenIssuer,
      tokenAgent,
      tokenAdmin,
      claimIssuer,
      claimIssuerSigningKey,
      aliceActionKey,
      aliceWallet,
    },
    identities: {
      aliceIdentity,
    },
    suite: {
      claimIssuerContract,
      claimTopicsRegistry,
      trustedIssuersRegistry,
      identityRegistryStorage,
      defaultCompliance,
      identityRegistry,
      tokenOID,
      token,
      agentManager,
    },
    authorities: {
      trexImplementationAuthority,
      identityImplementationAuthority,
    },
    factories: {
      trexFactory,
      identityFactory,
    },
    implementations: {
      identityImplementation,
      claimTopicsRegistryImplementation,
      trustedIssuersRegistryImplementation,
      identityRegistryStorageImplementation,
      identityRegistryImplementation,
      modularComplianceImplementation,
      tokenImplementation,
    },
  };
}

async function main() {
  const fullSuite = await deployFullSuite();
  console.log('Deployment successful', fullSuite);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
