# TREXFactory









## Methods

### deployTREXSuite

```solidity
function deployTREXSuite(string _salt, ITREXFactory.TokenDetails _tokenDetails, ITREXFactory.ClaimDetails _claimDetails) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _salt | string | undefined |
| _tokenDetails | ITREXFactory.TokenDetails | undefined |
| _claimDetails | ITREXFactory.ClaimDetails | undefined |

### getIdFactory

```solidity
function getIdFactory() external view returns (address)
```



*See {ITREXFactory-getIdFactory}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getImplementationAuthority

```solidity
function getImplementationAuthority() external view returns (address)
```



*See {ITREXFactory-getImplementationAuthority}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getToken

```solidity
function getToken(string _salt) external view returns (address)
```



*See {ITREXFactory-getToken}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _salt | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### recoverContractOwnership

```solidity
function recoverContractOwnership(address _contract, address _newOwner) external nonpayable
```



*See {ITREXFactory-recoverContractOwnership}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _contract | address | undefined |
| _newOwner | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### setIdFactory

```solidity
function setIdFactory(address idFactory_) external nonpayable
```



*See {ITREXFactory-setIdFactory}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| idFactory_ | address | undefined |

### setImplementationAuthority

```solidity
function setImplementationAuthority(address implementationAuthority_) external nonpayable
```



*See {ITREXFactory-setImplementationAuthority}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| implementationAuthority_ | address | undefined |

### tokenDeployed

```solidity
function tokenDeployed(string) external view returns (address)
```

mapping containing info about the token contracts corresponding to salt already used for CREATE2 deployments



#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |



## Events

### Deployed

```solidity
event Deployed(address indexed _addr)
```

event emitted whenever a single contract is deployed by the factory



#### Parameters

| Name | Type | Description |
|---|---|---|
| _addr `indexed` | address | undefined |

### IdFactorySet

```solidity
event IdFactorySet(address _idFactory)
```

event emitted when the Identity Factory is set



#### Parameters

| Name | Type | Description |
|---|---|---|
| _idFactory  | address | undefined |

### ImplementationAuthoritySet

```solidity
event ImplementationAuthoritySet(address _implementationAuthority)
```

event emitted when the implementation authority of the factory contract is set



#### Parameters

| Name | Type | Description |
|---|---|---|
| _implementationAuthority  | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### TREXSuiteDeployed

```solidity
event TREXSuiteDeployed(address indexed _token, address _ir, address _irs, address _tir, address _ctr, address _mc, string indexed _salt)
```

event emitted by the factory when a full suite of T-REX contracts is deployed



#### Parameters

| Name | Type | Description |
|---|---|---|
| _token `indexed` | address | undefined |
| _ir  | address | undefined |
| _irs  | address | undefined |
| _tir  | address | undefined |
| _ctr  | address | undefined |
| _mc  | address | undefined |
| _salt `indexed` | string | undefined |



