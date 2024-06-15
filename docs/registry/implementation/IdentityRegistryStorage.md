# IdentityRegistryStorage









## Methods

### addAgent

```solidity
function addAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### addIdentityToStorage

```solidity
function addIdentityToStorage(address _userAddress, contract IIdentity _identity, uint16 _country) external nonpayable
```



*See {IIdentityRegistryStorage-addIdentityToStorage}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _identity | contract IIdentity | undefined |
| _country | uint16 | undefined |

### bindIdentityRegistry

```solidity
function bindIdentityRegistry(address _identityRegistry) external nonpayable
```



*See {IIdentityRegistryStorage-bindIdentityRegistry}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _identityRegistry | address | undefined |

### init

```solidity
function init() external nonpayable
```






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

### linkedIdentityRegistries

```solidity
function linkedIdentityRegistries() external view returns (address[])
```



*See {IIdentityRegistryStorage-linkedIdentityRegistries}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | undefined |

### modifyStoredIdentity

```solidity
function modifyStoredIdentity(address _userAddress, contract IIdentity _identity) external nonpayable
```



*See {IIdentityRegistryStorage-modifyStoredIdentity}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _identity | contract IIdentity | undefined |

### modifyStoredInvestorCountry

```solidity
function modifyStoredInvestorCountry(address _userAddress, uint16 _country) external nonpayable
```



*See {IIdentityRegistryStorage-modifyStoredInvestorCountry}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _country | uint16 | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### removeAgent

```solidity
function removeAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### removeIdentityFromStorage

```solidity
function removeIdentityFromStorage(address _userAddress) external nonpayable
```



*See {IIdentityRegistryStorage-removeIdentityFromStorage}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### storedIdentity

```solidity
function storedIdentity(address _userAddress) external view returns (contract IIdentity)
```



*See {IIdentityRegistryStorage-storedIdentity}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IIdentity | undefined |

### storedInvestorCountry

```solidity
function storedInvestorCountry(address _userAddress) external view returns (uint16)
```



*See {IIdentityRegistryStorage-storedInvestorCountry}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### unbindIdentityRegistry

```solidity
function unbindIdentityRegistry(address _identityRegistry) external nonpayable
```



*See {IIdentityRegistryStorage-unbindIdentityRegistry}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _identityRegistry | address | undefined |



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

### CountryModified

```solidity
event CountryModified(address indexed investorAddress, uint16 indexed country)
```

this event is emitted when an Identity&#39;s country has been updated  the event is emitted by the &#39;updateCountry&#39; function  `investorAddress` is the address on which the country has been updated  `country` is the numeric code (ISO 3166-1) of the new country



#### Parameters

| Name | Type | Description |
|---|---|---|
| investorAddress `indexed` | address | undefined |
| country `indexed` | uint16 | undefined |

### IdentityModified

```solidity
event IdentityModified(contract IIdentity indexed oldIdentity, contract IIdentity indexed newIdentity)
```

this event is emitted when an Identity has been updated  the event is emitted by the &#39;updateIdentity&#39; function  `oldIdentity` is the old Identity contract&#39;s address to update  `newIdentity` is the new Identity contract&#39;s



#### Parameters

| Name | Type | Description |
|---|---|---|
| oldIdentity `indexed` | contract IIdentity | undefined |
| newIdentity `indexed` | contract IIdentity | undefined |

### IdentityRegistryBound

```solidity
event IdentityRegistryBound(address indexed identityRegistry)
```

this event is emitted when an Identity Registry is bound to the storage contract  the event is emitted by the &#39;addIdentityRegistry&#39; function  `identityRegistry` is the address of the identity registry added



#### Parameters

| Name | Type | Description |
|---|---|---|
| identityRegistry `indexed` | address | undefined |

### IdentityRegistryUnbound

```solidity
event IdentityRegistryUnbound(address indexed identityRegistry)
```

this event is emitted when an Identity Registry is unbound from the storage contract  the event is emitted by the &#39;removeIdentityRegistry&#39; function  `identityRegistry` is the address of the identity registry removed



#### Parameters

| Name | Type | Description |
|---|---|---|
| identityRegistry `indexed` | address | undefined |

### IdentityStored

```solidity
event IdentityStored(address indexed investorAddress, contract IIdentity indexed identity)
```

this event is emitted when an Identity is registered into the storage contract.  the event is emitted by the &#39;registerIdentity&#39; function  `investorAddress` is the address of the investor&#39;s wallet  `identity` is the address of the Identity smart contract (onchainID)



#### Parameters

| Name | Type | Description |
|---|---|---|
| investorAddress `indexed` | address | undefined |
| identity `indexed` | contract IIdentity | undefined |

### IdentityUnstored

```solidity
event IdentityUnstored(address indexed investorAddress, contract IIdentity indexed identity)
```

this event is emitted when an Identity is removed from the storage contract.  the event is emitted by the &#39;deleteIdentity&#39; function  `investorAddress` is the address of the investor&#39;s wallet  `identity` is the address of the Identity smart contract (onchainID)



#### Parameters

| Name | Type | Description |
|---|---|---|
| investorAddress `indexed` | address | undefined |
| identity `indexed` | contract IIdentity | undefined |

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



