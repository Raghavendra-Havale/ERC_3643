# IIdFactory









## Methods

### addTokenFactory

```solidity
function addTokenFactory(address _factory) external nonpayable
```



*function used to register an address as a token factory*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _factory | address | the address of the token factory  can be called only by Owner  _factory cannot be registered yet  once the factory has been registered it can deploy token identities |

### createIdentity

```solidity
function createIdentity(address _wallet, string _salt) external nonpayable returns (address)
```



*function used to create a new Identity proxy from the factory*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _wallet | address | the wallet address of the primary owner of this ONCHAINID contract |
| _salt | string | the salt used by create2 to issue the contract  requires a new salt for each deployment  _wallet cannot be linked to another ONCHAINID  only Owner can call =&gt; Owner is supposed to be a smart contract, managing the accessibility  of the function, including calls to oracles for multichain  deployment security (avoid identity theft), defining payment requirements, etc. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### createIdentityWithManagementKeys

```solidity
function createIdentityWithManagementKeys(address _wallet, string _salt, bytes32[] _managementKeys) external nonpayable returns (address)
```



*function used to create a new Identity proxy from the factory, setting the wallet and listed keys as MANAGEMENT keys.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _wallet | address | the wallet address of the primary owner of this ONCHAINID contract |
| _salt | string | the salt used by create2 to issue the contract |
| _managementKeys | bytes32[] | A list of keys hash (keccak256(abiEncoded())) to add as MANAGEMENT keys.  requires a new salt for each deployment  _wallet cannot be linked to another ONCHAINID  only Owner can call =&gt; Owner is supposed to be a smart contract, managing the accessibility  of the function, including calls to oracles for multichain  deployment security (avoid identity theft), defining payment requirements, etc. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### createTokenIdentity

```solidity
function createTokenIdentity(address _token, address _tokenOwner, string _salt) external nonpayable returns (address)
```



*function used to create a new Token Identity proxy from the factory*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | the address of the token contract |
| _tokenOwner | address | the owner address of the token |
| _salt | string | the salt used by create2 to issue the contract  requires a new salt for each deployment  _token cannot be linked to another ONCHAINID  only Token factory or owner can call (owner should only use its privilege  for tokens not issued by a Token factory onchain |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getIdentity

```solidity
function getIdentity(address _wallet) external view returns (address)
```



*getter for OID contract corresponding to a wallet/token*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _wallet | address | the wallet/token address |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getToken

```solidity
function getToken(address _identity) external view returns (address)
```



*getter to fetch the token address linked to an OID contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _identity | address | the address of the OID contract  returns the address linked to the OID |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getWallets

```solidity
function getWallets(address _identity) external view returns (address[])
```



*getter to fetch the array of wallets linked to an OID contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _identity | address | the address of the OID contract  returns an array of addresses linked to the OID |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | undefined |

### implementationAuthority

```solidity
function implementationAuthority() external view returns (address)
```



*getter for the implementation authority used by this factory.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### isSaltTaken

```solidity
function isSaltTaken(string _salt) external view returns (bool)
```



*getter to know if a salt is taken for the create2 deployment*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _salt | string | the salt used for deployment |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isTokenFactory

```solidity
function isTokenFactory(address _factory) external view returns (bool)
```



*getter to know if an address is registered as token factory or not*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _factory | address | the address of the factory  returns true if the address corresponds to a registered factory |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### linkWallet

```solidity
function linkWallet(address _newWallet) external nonpayable
```



*function used to link a new wallet to an existing identity*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newWallet | address | the address of the wallet to link  requires msg.sender to be linked to an existing onchainid  the _newWallet will be linked to the same OID contract as msg.sender  _newWallet cannot be linked to an OID yet  _newWallet cannot be address 0  cannot link more than 100 wallets to an OID, for gas consumption reason |

### removeTokenFactory

```solidity
function removeTokenFactory(address _factory) external nonpayable
```



*function used to unregister an address previously registered as a token factory*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _factory | address | the address of the token factory  can be called only by Owner  _factory has to be registered previously  once the factory has been unregistered it cannot deploy token identities anymore |

### unlinkWallet

```solidity
function unlinkWallet(address _oldWallet) external nonpayable
```



*function used to unlink a wallet from an existing identity*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _oldWallet | address | the address of the wallet to unlink  requires msg.sender to be linked to the same onchainid as _oldWallet  msg.sender cannot be _oldWallet to keep at least 1 wallet linked to any OID  _oldWallet cannot be address 0 |



## Events

### Deployed

```solidity
event Deployed(address indexed _addr)
```

events



#### Parameters

| Name | Type | Description |
|---|---|---|
| _addr `indexed` | address | undefined |

### TokenFactoryAdded

```solidity
event TokenFactoryAdded(address indexed factory)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| factory `indexed` | address | undefined |

### TokenFactoryRemoved

```solidity
event TokenFactoryRemoved(address indexed factory)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| factory `indexed` | address | undefined |

### TokenLinked

```solidity
event TokenLinked(address indexed token, address indexed identity)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token `indexed` | address | undefined |
| identity `indexed` | address | undefined |

### WalletLinked

```solidity
event WalletLinked(address indexed wallet, address indexed identity)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| wallet `indexed` | address | undefined |
| identity `indexed` | address | undefined |

### WalletUnlinked

```solidity
event WalletUnlinked(address indexed wallet, address indexed identity)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| wallet `indexed` | address | undefined |
| identity `indexed` | address | undefined |



