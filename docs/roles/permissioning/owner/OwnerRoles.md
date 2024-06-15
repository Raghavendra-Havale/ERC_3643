# OwnerRoles









## Methods

### addClaimRegistryManager

```solidity
function addClaimRegistryManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### addComplianceManager

```solidity
function addComplianceManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### addComplianceSetter

```solidity
function addComplianceSetter(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### addIssuersRegistryManager

```solidity
function addIssuersRegistryManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### addOwnerAdmin

```solidity
function addOwnerAdmin(address _owner) external nonpayable
```

functions



#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### addRegistryAddressSetter

```solidity
function addRegistryAddressSetter(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### addTokenInfoManager

```solidity
function addTokenInfoManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### isClaimRegistryManager

```solidity
function isClaimRegistryManager(address _owner) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isComplianceManager

```solidity
function isComplianceManager(address _owner) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isComplianceSetter

```solidity
function isComplianceSetter(address _owner) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isIssuersRegistryManager

```solidity
function isIssuersRegistryManager(address _owner) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isOwnerAdmin

```solidity
function isOwnerAdmin(address _owner) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isRegistryAddressSetter

```solidity
function isRegistryAddressSetter(address _owner) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isTokenInfoManager

```solidity
function isTokenInfoManager(address _owner) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

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

### removeClaimRegistryManager

```solidity
function removeClaimRegistryManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### removeComplianceManager

```solidity
function removeComplianceManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### removeComplianceSetter

```solidity
function removeComplianceSetter(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### removeIssuersRegistryManager

```solidity
function removeIssuersRegistryManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### removeOwnerAdmin

```solidity
function removeOwnerAdmin(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### removeRegistryAddressSetter

```solidity
function removeRegistryAddressSetter(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### removeTokenInfoManager

```solidity
function removeTokenInfoManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


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

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### RoleAdded

```solidity
event RoleAdded(address indexed _owner, string _role)
```

events



#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner `indexed` | address | undefined |
| _role  | string | undefined |

### RoleRemoved

```solidity
event RoleRemoved(address indexed _owner, string _role)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner `indexed` | address | undefined |
| _role  | string | undefined |



