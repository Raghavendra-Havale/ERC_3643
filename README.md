# T-REX Clone

## Overview

The T-REX (Token for Regulated EXchanges) protocol is a comprehensive suite of Solidity smart contracts,
implementing the [ERC-3643 standard](https://eips.ethereum.org/EIPS/eip-3643) and designed to enable the issuance, management, and transfer of security
tokens in
compliance with regulations. It ensures secure and compliant transactions for all parties involved in the token exchange.

## Key Components

The T-REX protocol consists of several key components:

- **[ONCHAINID](https://github.com/onchain-id/solidity)**: A smart contract deployed by a user to interact with the security token or any other application
  where an on-chain identity may be relevant. It stores keys and claims related to a specific identity.

- **Trusted Issuers Registry**: This contract houses the addresses of all trusted claim issuers associated with a specific token.

- **Claim Topics Registry**: This contract maintains a list of all trusted claim topics related to the security token.

- **Identity Registry**: This contract holds the identity contract addresses of all eligible users authorized to hold the token. It is responsible for claim verification.

- **Compliance Smart Contract**: This contract independently operates to check whether a transfer is in compliance with the established rules for the token.

- **Security Token Contract**: This contract interacts with the Identity Registry to check the eligibility status of investors, enabling token holding and transactions.

## Getting Started

1. Clone the repository: `git clone https://github.com/Pratima-M1/T-REX-Clone.git`
2. Install dependencies: `npm ci`
3. Compile the contracts: `npx hardhat compile`
4. Run tests: `npx hardhat test`

## Deployment

1. Replace .env.example with .env and replace

   - RPC_URL=
   - PRIVATE_KEY=
   - BASESCAN_API=

2. To deply and mint security token run

```sh
npx hardhat run scripts/deploy.js --netowrk NETWORK
```

Replace NETWORK valide network of your choice (ex: sepolia or base-sepolia)

## Deployed Contract Addresses on base-sepolia

- **ClaimTopicsRegistry**: [0x0e2Cb626cC56e9EDEA5C56Cb359379750bf68479](https://sepolia.basescan.org/address/0x0e2Cb626cC56e9EDEA5C56Cb359379750bf68479)
- **TrustedIssuersRegistry**: [0x27700bE46c1d96Bd6dc0839e2d915DBC2Ef1A9FF](https://sepolia.basescan.org/address/0x27700bE46c1d96Bd6dc0839e2d915DBC2Ef1A9FF)
- **IdentityRegistryStorage**: [0x792676D3e5CCE2a5A56bc2c4630EeA1491Bfb51F](https://sepolia.basescan.org/address/0x792676D3e5CCE2a5A56bc2c4630EeA1491Bfb51F)
- **IdentityRegistry**: [0x15F957942D9Db273E2FA31B312513A45d67F7f45](https://sepolia.basescan.org/address/0x15F957942D9Db273E2FA31B312513A45d67F7f45)
- **ModularCompliance**: [0xdD897602Bf07f296F2A8Cf0d321C69Ef56f16D80](https://sepolia.basescan.org/address/0xdD897602Bf07f296F2A8Cf0d321C69Ef56f16D80)
- **Token**: [0xE21454EC98365091809f72BcD7078982277F8345](https://sepolia.basescan.org/address/0xE21454EC98365091809f72BcD7078982277F8345)
- **Identity**: [0xe81358DC5979447E888531C9c091AE1540798506](https://sepolia.basescan.org/address/0xe81358DC5979447E888531C9c091AE1540798506)
- **ImplementationAuthority**: [0xc397449A26203a01bDc43D6DC1CA15cD03C3e694](https://sepolia.basescan.org/address/0xc397449A26203a01bDc43D6DC1CA15cD03C3e694)
- **IdFactory**: [0xbe3f6a02933796235c8E8Bbe6C9b5f6C2529200D](https://sepolia.basescan.org/address/0xbe3f6a02933796235c8E8Bbe6C9b5f6C2529200D)
- **TREXImplementationAuthority**: [0x832B9a80c20ceB6AcCDDE2D57D70f3F12Ef47c32](https://sepolia.basescan.org/address/0x832B9a80c20ceB6AcCDDE2D57D70f3F12Ef47c32)
- **TREXFactory**: [0x0b5B3d9809db8E2fe7a6CeCD8bBF7f26df95c85a](https://sepolia.basescan.org/address/0x0b5B3d9809db8E2fe7a6CeCD8bBF7f26df95c85a)
- **ClaimsTopicsRegistryProxy**: [0x327b5c4c98B7D45e58b7d08b4b1936Bfd762f644](https://sepolia.basescan.org/address/0x327b5c4c98B7D45e58b7d08b4b1936Bfd762f644)
- **TrustedIssuersRegistryProxy**: [0x7B948b13aaA350afacA1f0f8C0cC9E0aA55e6Cf8](https://sepolia.basescan.org/address/0x7B948b13aaA350afacA1f0f8C0cC9E0aA55e6Cf8)
- **IdentityRegistryStorageProxy**: [0xa282B2D64BA96DF78Dfc3D0943Eb4c9F2d05f51B](https://sepolia.basescan.org/address/0xa282B2D64BA96DF78Dfc3D0943Eb4c9F2d05f51B)
- **DefaultCompliance**: [0xBdCaea1C2f86fF6C6D7E0E42b92C7C71D2c29e29](https://sepolia.basescan.org/address/0xBdCaea1C2f86fF6C6D7E0E42b92C7C71D2c29e29)
- **IdentityRegistryProxy**: [0xe0e6DCAB5b11566d84D3875C5584b4E2A12f89C8](https://sepolia.basescan.org/address/0xe0e6DCAB5b11566d84D3875C5584b4E2A12f89C8)
- **IdentityProxy-Token0ID**: [0x1db0b8cb664067859E4Dd094DE8d5C6f145c4434](https://sepolia.basescan.org/address/0x1db0b8cb664067859E4Dd094DE8d5C6f145c4434)
- **Token Proxy**: [0xC7f72bc072Ac877c8033db5F0c5cE345d5aF19E5](https://sepolia.basescan.org/address/0xC7f72bc072Ac877c8033db5F0c5cE345d5aF19E5)
- **AgentManager**: [0x86cdbf56b5DC0cb56ddF0d9d5DEd2b3AD6De947B](https://sepolia.basescan.org/address/0x86cdbf56b5DC0cb56ddF0d9d5DEd2b3AD6De947B)
- **ClaimIssuer**: [0x86DE8a5c564656f20b32789200c8Ca56c83ea8A9](https://sepolia.basescan.org/address/0x86DE8a5c564656f20b32789200c8Ca56c83ea8A9)
- **IdentityProxy-Alice Identity**: [0x9813B3fFA712048441d1BF57F2761328651A2cE7](https://sepolia.basescan.org/address/0x9813B3fFA712048441d1BF57F2761328651A2cE7)

- **Mint Security Token**: [mint security token](https://sepolia.basescan.org/tx/0xac0b3dce95808067176d8a0ea47935a672f6f69e80f2c6fd5e1c5b221090a4d9)
