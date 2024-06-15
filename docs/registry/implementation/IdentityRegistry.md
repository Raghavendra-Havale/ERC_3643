# IdentityRegistry









## Methods

### addAgent

```solidity
function addAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### batchRegisterIdentity

```solidity
function batchRegisterIdentity(address[] _userAddresses, contract IIdentity[] _identities, uint16[] _countries) external nonpayable
```



*See {IIdentityRegistry-batchRegisterIdentity}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | undefined |
| _identities | contract IIdentity[] | undefined |
| _countries | uint16[] | undefined |

### contains

```solidity
function contains(address _userAddress) external view returns (bool)
```



*See {IIdentityRegistry-contains}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### deleteIdentity

```solidity
function deleteIdentity(address _userAddress) external nonpayable
```



*See {IIdentityRegistry-deleteIdentity}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |

### identity

```solidity
function identity(address _userAddress) external view returns (contract IIdentity)
```



*See {IIdentityRegistry-identity}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IIdentity | undefined |

### identityStorage

```solidity
function identityStorage() external view returns (contract IIdentityRegistryStorage)
```



*See {IIdentityRegistry-identityStorage}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IIdentityRegistryStorage | undefined |

### init

```solidity
function init(address _trustedIssuersRegistry, address _claimTopicsRegistry, address _identityStorage) external nonpayable
```



*the constructor initiates the Identity Registry smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuersRegistry | address | the trusted issuers registry linked to the Identity Registry |
| _claimTopicsRegistry | address | the claim topics registry linked to the Identity Registry |
| _identityStorage | address | the identity registry storage linked to the Identity Registry  emits a `ClaimTopicsRegistrySet` event  emits a `TrustedIssuersRegistrySet` event  emits an `IdentityStorageSet` event |

### investorCountry

```solidity
function investorCountry(address _userAddress) external view returns (uint16)
```



*See {IIdentityRegistry-investorCountry}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined |

### isAgent

```solidity
function isAgent(address _agent) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isVerified

```solidity
function isVerified(address _userAddress) external view returns (bool)
```



*See {IIdentityRegistry-isVerified}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### issuersRegistry

```solidity
function issuersRegistry() external view returns (contract ITrustedIssuersRegistry)
```



*See {IIdentityRegistry-issuersRegistry}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ITrustedIssuersRegistry | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### registerIdentity

```solidity
function registerIdentity(address _userAddress, contract IIdentity _identity, uint16 _country) external nonpayable
```



*See {IIdentityRegistry-registerIdentity}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _identity | contract IIdentity | undefined |
| _country | uint16 | undefined |

### removeAgent

```solidity
function removeAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### setClaimTopicsRegistry

```solidity
function setClaimTopicsRegistry(address _claimTopicsRegistry) external nonpayable
```



*See {IIdentityRegistry-setClaimTopicsRegistry}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimTopicsRegistry | address | undefined |

### setIdentityRegistryStorage

```solidity
function setIdentityRegistryStorage(address _identityRegistryStorage) external nonpayable
```



*See {IIdentityRegistry-setIdentityRegistryStorage}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _identityRegistryStorage | address | undefined |

### setTrustedIssuersRegistry

```solidity
function setTrustedIssuersRegistry(address _trustedIssuersRegistry) external nonpayable
```



*See {IIdentityRegistry-setTrustedIssuersRegistry}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuersRegistry | address | undefined |

### topicsRegistry

```solidity
function topicsRegistry() external view returns (contract IClaimTopicsRegistry)
```



*See {IIdentityRegistry-topicsRegistry}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IClaimTopicsRegistry | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### updateCountry

```solidity
function updateCountry(address _userAddress, uint16 _country) external nonpayable
```



*See {IIdentityRegistry-updateCountry}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _country | uint16 | undefined |

### updateIdentity

```solidity
function updateIdentity(address _userAddress, contract IIdentity _identity) external nonpayable
```



*See {IIdentityRegistry-updateIdentity}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _identity | contract IIdentity | undefined |



## Events

### AgentAdded

```solidity
event AgentAdded(address indexed _agent)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent `indexed` | address | undefined |

### AgentRemoved

```solidity
event AgentRemoved(address indexed _agent)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent `indexed` | address | undefined |

### ClaimTopicsRegistrySet

```solidity
event ClaimTopicsRegistrySet(address indexed claimTopicsRegistry)
```

this event is emitted when the ClaimTopicsRegistry has been set for the IdentityRegistry  the event is emitted by the IdentityRegistry constructor  `claimTopicsRegistry` is the address of the Claim Topics Registry contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| claimTopicsRegistry `indexed` | address | undefined |

### CountryUpdated

```solidity
event CountryUpdated(address indexed investorAddress, uint16 indexed country)
```

this event is emitted when an Identity&#39;s country has been updated  the event is emitted by the &#39;updateCountry&#39; function  `investorAddress` is the address on which the country has been updated  `country` is the numeric code (ISO 3166-1) of the new country



#### Parameters

| Name | Type | Description |
|---|---|---|
| investorAddress `indexed` | address | undefined |
| country `indexed` | uint16 | undefined |

### IdentityRegistered

```solidity
event IdentityRegistered(address indexed investorAddress, contract IIdentity indexed identity)
```

this event is emitted when an Identity is registered into the Identity Registry.  the event is emitted by the &#39;registerIdentity&#39; function  `investorAddress` is the address of the investor&#39;s wallet  `identity` is the address of the Identity smart contract (onchainID)



#### Parameters

| Name | Type | Description |
|---|---|---|
| investorAddress `indexed` | address | undefined |
| identity `indexed` | contract IIdentity | undefined |

### IdentityRemoved

```solidity
event IdentityRemoved(address indexed investorAddress, contract IIdentity indexed identity)
```

this event is emitted when an Identity is removed from the Identity Registry.  the event is emitted by the &#39;deleteIdentity&#39; function  `investorAddress` is the address of the investor&#39;s wallet  `identity` is the address of the Identity smart contract (onchainID)



#### Parameters

| Name | Type | Description |
|---|---|---|
| investorAddress `indexed` | address | undefined |
| identity `indexed` | contract IIdentity | undefined |

### IdentityStorageSet

```solidity
event IdentityStorageSet(address indexed identityStorage)
```

this event is emitted when the IdentityRegistryStorage has been set for the IdentityRegistry  the event is emitted by the IdentityRegistry constructor  `identityStorage` is the address of the Identity Registry Storage contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| identityStorage `indexed` | address | undefined |

### IdentityUpdated

```solidity
event IdentityUpdated(contract IIdentity indexed oldIdentity, contract IIdentity indexed newIdentity)
```

this event is emitted when an Identity has been updated  the event is emitted by the &#39;updateIdentity&#39; function  `oldIdentity` is the old Identity contract&#39;s address to update  `newIdentity` is the new Identity contract&#39;s



#### Parameters

| Name | Type | Description |
|---|---|---|
| oldIdentity `indexed` | contract IIdentity | undefined |
| newIdentity `indexed` | contract IIdentity | undefined |

### Initialized

```solidity
event Initialized(uint8 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint8 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### TrustedIssuersRegistrySet

```solidity
event TrustedIssuersRegistrySet(address indexed trustedIssuersRegistry)
```

this event is emitted when the TrustedIssuersRegistry has been set for the IdentityRegistry  the event is emitted by the IdentityRegistry constructor  `trustedIssuersRegistry` is the address of the Trusted Issuers Registry contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| trustedIssuersRegistry `indexed` | address | undefined |



