# AbstractModule









## Methods

### bindCompliance

```solidity
function bindCompliance(address _compliance) external nonpayable
```



*See {IModule-bindCompliance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |

### canComplianceBind

```solidity
function canComplianceBind(address _compliance) external view returns (bool)
```



*checks whether compliance is suitable to bind to the module.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | address of the compliance contract |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isComplianceBound

```solidity
function isComplianceBound(address _compliance) external view returns (bool)
```



*See {IModule-isComplianceBound}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isPlugAndPlay

```solidity
function isPlugAndPlay() external pure returns (bool)
```



*getter for module plug &amp; play status*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### moduleBurnAction

```solidity
function moduleBurnAction(address _from, uint256 _value) external nonpayable
```



*action performed on the module during a burn action  this function is used to update variables of the module upon burning if it is required  if the module does not require state updates in case of burn, this function remains empty  This function can be called ONLY by the compliance contract itself (_compliance)  This function can be called only on a compliance contract that is bound to the module*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | address on which tokens are burnt |
| _value | uint256 | amount of tokens burnt |

### moduleCheck

```solidity
function moduleCheck(address _from, address _to, uint256 _value, address _compliance) external view returns (bool)
```



*compliance check on the module for a specific transaction on a specific compliance contract  this function is used to check if the transfer is allowed by the module  This function can be called only on a compliance contract that is bound to the module*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | address of the transfer sender |
| _to | address | address of the transfer receiver |
| _value | uint256 | amount of tokens sent |
| _compliance | address | address of the compliance contract concerned by the transfer action  the function returns TRUE if the module allows the transfer, FALSE otherwise |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### moduleMintAction

```solidity
function moduleMintAction(address _to, uint256 _value) external nonpayable
```



*action performed on the module during a mint action  this function is used to update variables of the module upon minting if it is required  if the module does not require state updates in case of mint, this function remains empty  This function can be called ONLY by the compliance contract itself (_compliance)  This function can be called only on a compliance contract that is bound to the module*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | address used for minting |
| _value | uint256 | amount of tokens minted |

### moduleTransferAction

```solidity
function moduleTransferAction(address _from, address _to, uint256 _value) external nonpayable
```



*action performed on the module during a transfer action  this function is used to update variables of the module upon transfer if it is required  if the module does not require state updates in case of transfer, this function remains empty  This function can be called ONLY by the compliance contract itself (_compliance)  This function can be called only on a compliance contract that is bound to the module*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | address of the transfer sender |
| _to | address | address of the transfer receiver |
| _value | uint256 | amount of tokens sent |

### name

```solidity
function name() external pure returns (string _name)
```



*getter for the name of the module*


#### Returns

| Name | Type | Description |
|---|---|---|
| _name | string | the name of the module |

### unbindCompliance

```solidity
function unbindCompliance(address _compliance) external nonpayable
```



*See {IModule-unbindCompliance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |



## Events

### ComplianceBound

```solidity
event ComplianceBound(address indexed _compliance)
```

this event is emitted when the compliance contract is bound to the module.  the event is emitted by the bindCompliance function  `_compliance` is the address of the compliance contract being bound



#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance `indexed` | address | undefined |

### ComplianceUnbound

```solidity
event ComplianceUnbound(address indexed _compliance)
```

this event is emitted when the compliance contract is unbound from the module.  the event is emitted by the unbindCompliance function  `_compliance` is the address of the compliance contract being unbound



#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance `indexed` | address | undefined |



