# TREXImplementationAuthority









## Methods

### addAndUseTREXVersion

```solidity
function addAndUseTREXVersion(ITREXImplementationAuthority.Version _version, ITREXImplementationAuthority.TREXContracts _trex) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | ITREXImplementationAuthority.Version | undefined |
| _trex | ITREXImplementationAuthority.TREXContracts | undefined |

### addTREXVersion

```solidity
function addTREXVersion(ITREXImplementationAuthority.Version _version, ITREXImplementationAuthority.TREXContracts _trex) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | ITREXImplementationAuthority.Version | undefined |
| _trex | ITREXImplementationAuthority.TREXContracts | undefined |

### changeImplementationAuthority

```solidity
function changeImplementationAuthority(address _token, address _newImplementationAuthority) external nonpayable
```



*See {ITREXImplementationAuthority-changeImplementationAuthority}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | undefined |
| _newImplementationAuthority | address | undefined |

### fetchVersion

```solidity
function fetchVersion(ITREXImplementationAuthority.Version _version) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | ITREXImplementationAuthority.Version | undefined |

### getCTRImplementation

```solidity
function getCTRImplementation() external view returns (address)
```



*See {ITREXImplementationAuthority-getCTRImplementation}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getContracts

```solidity
function getContracts(ITREXImplementationAuthority.Version _version) external view returns (struct ITREXImplementationAuthority.TREXContracts)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | ITREXImplementationAuthority.Version | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | ITREXImplementationAuthority.TREXContracts | undefined |

### getCurrentVersion

```solidity
function getCurrentVersion() external view returns (struct ITREXImplementationAuthority.Version)
```



*See {ITREXImplementationAuthority-getCurrentVersion}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | ITREXImplementationAuthority.Version | undefined |

### getIRImplementation

```solidity
function getIRImplementation() external view returns (address)
```



*See {ITREXImplementationAuthority-getIRImplementation}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getIRSImplementation

```solidity
function getIRSImplementation() external view returns (address)
```



*See {ITREXImplementationAuthority-getIRSImplementation}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getMCImplementation

```solidity
function getMCImplementation() external view returns (address)
```



*See {ITREXImplementationAuthority-getMCImplementation}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getReferenceContract

```solidity
function getReferenceContract() external view returns (address)
```



*See {ITREXImplementationAuthority-getReferenceContract}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getTIRImplementation

```solidity
function getTIRImplementation() external view returns (address)
```



*See {ITREXImplementationAuthority-getTIRImplementation}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getTREXFactory

```solidity
function getTREXFactory() external view returns (address)
```



*See {ITREXImplementationAuthority-getTREXFactory}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getTokenImplementation

```solidity
function getTokenImplementation() external view returns (address)
```



*See {ITREXImplementationAuthority-getTokenImplementation}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### isReferenceContract

```solidity
function isReferenceContract() external view returns (bool)
```



*See {ITREXImplementationAuthority-isReferenceContract}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### setIAFactory

```solidity
function setIAFactory(address iaFactory) external nonpayable
```



*See {ITREXImplementationAuthority-setIAFactory}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| iaFactory | address | undefined |

### setTREXFactory

```solidity
function setTREXFactory(address trexFactory) external nonpayable
```



*See {ITREXImplementationAuthority-setTREXFactory}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| trexFactory | address | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### useTREXVersion

```solidity
function useTREXVersion(ITREXImplementationAuthority.Version _version) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | ITREXImplementationAuthority.Version | undefined |



## Events

### IAFactorySet

```solidity
event IAFactorySet(address indexed iaFactory)
```

event emitted when the IA factory address is set



#### Parameters

| Name | Type | Description |
|---|---|---|
| iaFactory `indexed` | address | undefined |

### ImplementationAuthorityChanged

```solidity
event ImplementationAuthorityChanged(address indexed _token, address indexed _newImplementationAuthority)
```

event emitted when a token issuer decides to change current IA for a new one



#### Parameters

| Name | Type | Description |
|---|---|---|
| _token `indexed` | address | undefined |
| _newImplementationAuthority `indexed` | address | undefined |

### ImplementationAuthoritySet

```solidity
event ImplementationAuthoritySet(bool referenceStatus, address trexFactory)
```

event emitted by the constructor when the IA is deployed



#### Parameters

| Name | Type | Description |
|---|---|---|
| referenceStatus  | bool | undefined |
| trexFactory  | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### TREXFactorySet

```solidity
event TREXFactorySet(address indexed trexFactory)
```

event emitted when the TREX factory address is set



#### Parameters

| Name | Type | Description |
|---|---|---|
| trexFactory `indexed` | address | undefined |

### TREXVersionAdded

```solidity
event TREXVersionAdded(ITREXImplementationAuthority.Version indexed version, ITREXImplementationAuthority.TREXContracts indexed trex)
```

event emitted when a new TREX version is added to the contract memory



#### Parameters

| Name | Type | Description |
|---|---|---|
| version `indexed` | ITREXImplementationAuthority.Version | undefined |
| trex `indexed` | ITREXImplementationAuthority.TREXContracts | undefined |

### TREXVersionFetched

```solidity
event TREXVersionFetched(ITREXImplementationAuthority.Version indexed version, ITREXImplementationAuthority.TREXContracts indexed trex)
```

event emitted when a new TREX version is fetched from reference contract by auxiliary contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| version `indexed` | ITREXImplementationAuthority.Version | undefined |
| trex `indexed` | ITREXImplementationAuthority.TREXContracts | undefined |

### VersionUpdated

```solidity
event VersionUpdated(ITREXImplementationAuthority.Version indexed version)
```

event emitted when the current version is updated



#### Parameters

| Name | Type | Description |
|---|---|---|
| version `indexed` | ITREXImplementationAuthority.Version | undefined |



