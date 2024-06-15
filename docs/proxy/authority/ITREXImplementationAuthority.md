# ITREXImplementationAuthority









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



*change the implementationAuthority address of all proxy contracts linked to a given token  only the owner of all proxy contracts can call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | the address of the token proxy |
| _newImplementationAuthority | address | the address of the new IA contract  caller has to be owner of all contracts linked to the token and impacted by the change  Set _newImplementationAuthority on zero address to deploy a new IA contract  New IA contracts can only be deployed ONCE per token and only if current IA is the main IA  if _newImplementationAuthority is not a new contract it must be using the same version  as the current IA contract.  calls `setImplementationAuthority` on all proxies linked to the token  emits a `ImplementationAuthorityChanged` event |

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



*getter function returning address of ClaimTopicsRegistry contract implementation  currently used by the proxies using this TREXImplementationAuthority*


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



*getter function returning the current version of contracts used by proxies*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | ITREXImplementationAuthority.Version | undefined |

### getIRImplementation

```solidity
function getIRImplementation() external view returns (address)
```



*getter function returning address of IdentityRegistry contract implementation  currently used by the proxies using this TREXImplementationAuthority*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getIRSImplementation

```solidity
function getIRSImplementation() external view returns (address)
```



*getter function returning address of IdentityRegistryStorage contract implementation  currently used by the proxies using this TREXImplementationAuthority*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getMCImplementation

```solidity
function getMCImplementation() external view returns (address)
```



*getter function returning address of ModularCompliance contract implementation  currently used by the proxies using this TREXImplementationAuthority*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getReferenceContract

```solidity
function getReferenceContract() external view returns (address)
```



*getter for reference contract address*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getTIRImplementation

```solidity
function getTIRImplementation() external view returns (address)
```



*getter function returning address of TrustedIssuersRegistry contract implementation  currently used by the proxies using this TREXImplementationAuthority*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getTREXFactory

```solidity
function getTREXFactory() external view returns (address)
```



*getter function returning address of reference TREX factory*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getTokenImplementation

```solidity
function getTokenImplementation() external view returns (address)
```



*getter function returning address of token contract implementation  currently used by the proxies using this TREXImplementationAuthority*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### isReferenceContract

```solidity
function isReferenceContract() external view returns (bool)
```



*returns true if the contract is the main contract  returns false if the contract is an auxiliary contract*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### setIAFactory

```solidity
function setIAFactory(address iaFactory) external nonpayable
```



*setter for _iaFactory variable  _iaFactory is set at zero address for auxiliary contracts  for main contract it can be set post-deployment or at deployment  in the constructor*

#### Parameters

| Name | Type | Description |
|---|---|---|
| iaFactory | address | the address of IAFactory contract  emits a IAFactorySet event  only Owner can call  can be called only on main contract, auxiliary contracts cannot call |

### setTREXFactory

```solidity
function setTREXFactory(address trexFactory) external nonpayable
```



*setter for _trexFactory variable  _trexFactory is set at deployment for auxiliary contracts  for main contract it must be set post-deployment as main IA is  deployed before the TREXFactory.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| trexFactory | address | the address of TREXFactory contract  emits a TREXFactorySet event  only Owner can call  can be called only on main contract, auxiliary contracts cannot call |

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



