# AbstractModuleUpgradeable









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

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### proxiableUUID

```solidity
function proxiableUUID() external view returns (bytes32)
```



*Implementation of the ERC1822 {proxiableUUID} function. This returns the storage slot used by the implementation. It is used to validate the implementation&#39;s compatibility when performing an upgrade. IMPORTANT: A proxy pointing at a proxiable contract should not be considered proxiable itself, because this risks bricking a proxy that upgrades to it, by delegating to itself until out of gas. Thus it is critical that this function revert if invoked through a proxy. This is guaranteed by the `notDelegated` modifier.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

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

### unbindCompliance

```solidity
function unbindCompliance(address _compliance) external nonpayable
```



*See {IModule-unbindCompliance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |

### upgradeTo

```solidity
function upgradeTo(address newImplementation) external nonpayable
```



*Upgrade the implementation of the proxy to `newImplementation`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newImplementation | address | undefined |

### upgradeToAndCall

```solidity
function upgradeToAndCall(address newImplementation, bytes data) external payable
```



*Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call encoded in `data`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newImplementation | address | undefined |
| data | bytes | undefined |



## Events

### AdminChanged

```solidity
event AdminChanged(address previousAdmin, address newAdmin)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousAdmin  | address | undefined |
| newAdmin  | address | undefined |

### BeaconUpgraded

```solidity
event BeaconUpgraded(address indexed beacon)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| beacon `indexed` | address | undefined |

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

### Upgraded

```solidity
event Upgraded(address indexed implementation)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| implementation `indexed` | address | undefined |



