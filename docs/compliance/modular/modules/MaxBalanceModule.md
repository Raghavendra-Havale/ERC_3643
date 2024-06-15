# MaxBalanceModule









## Methods

### batchPreSetModuleState

```solidity
function batchPreSetModuleState(address _compliance, address[] _id, uint256[] _balance) external nonpayable
```



*make a batch transaction calling preSetModuleState multiple times*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | the address of the compliance contract to preset |
| _id | address[] | the ONCHAINID address of the token holder |
| _balance | uint256[] | the current balance of the token holder  Only the owner of the Compliance smart contract can call this function  emits _id.length `IDBalancePreSet` events |

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



*See {IModule-canComplianceBind}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### getIDBalance

```solidity
function getIDBalance(address _compliance, address _identity) external view returns (uint256)
```



*getter for compliance identity balance*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | address of the compliance contract |
| _identity | address | ONCHAINID address |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### initialize

```solidity
function initialize() external nonpayable
```

This function should only be called once during the contract deployment.

*initializes the contract and sets the initial state.*


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



*See {IModule-isPlugAndPlay}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### moduleBurnAction

```solidity
function moduleBurnAction(address _from, uint256 _value) external nonpayable
```



*See {IModule-moduleBurnAction}.  no burn action required in this module*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _value | uint256 | undefined |

### moduleCheck

```solidity
function moduleCheck(address, address _to, uint256 _value, address _compliance) external view returns (bool)
```



*See {IModule-moduleCheck}.  checks if the country of address _to is allowed for this _compliance  returns TRUE if the country of _to is allowed for this _compliance  returns FALSE if the country of _to is not allowed for this _compliance*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _to | address | undefined |
| _value | uint256 | undefined |
| _compliance | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### moduleMintAction

```solidity
function moduleMintAction(address _to, uint256 _value) external nonpayable
```



*See {IModule-moduleMintAction}.  no mint action required in this module*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _value | uint256 | undefined |

### moduleTransferAction

```solidity
function moduleTransferAction(address _from, address _to, uint256 _value) external nonpayable
```



*See {IModule-moduleTransferAction}.  no transfer action required in this module*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _to | address | undefined |
| _value | uint256 | undefined |

### name

```solidity
function name() external pure returns (string _name)
```



*See {IModule-name}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _name | string | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### preSetModuleState

```solidity
function preSetModuleState(address _compliance, address _id, uint256 _balance) external nonpayable
```



*pre-set the balance of a token holder per ONCHAINID*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | the address of the compliance contract to preset |
| _id | address | the ONCHAINID address of the token holder |
| _balance | uint256 | the current balance of the token holder  Only the owner of the Compliance smart contract can call this function  emits a `IDBalancePreSet` event |

### presetCompleted

```solidity
function presetCompleted(address _compliance) external nonpayable
```



*updates compliance preset status as true*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | the address of the compliance contract  Only the owner of the Compliance smart contract can call this function |

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


### setMaxBalance

```solidity
function setMaxBalance(uint256 _max) external nonpayable
```



*sets max balance limit for a bound compliance contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _max | uint256 | max amount of tokens owned by an individual  Only the owner of the Compliance smart contract can call this function  emits an `MaxBalanceSet` event |

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

### IDBalancePreSet

```solidity
event IDBalancePreSet(address indexed _compliance, address indexed _id, uint256 _balance)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance `indexed` | address | undefined |
| _id `indexed` | address | undefined |
| _balance  | uint256 | undefined |

### Initialized

```solidity
event Initialized(uint8 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint8 | undefined |

### MaxBalanceSet

```solidity
event MaxBalanceSet(address indexed _compliance, uint256 indexed _maxBalance)
```

this event is emitted when the max balance has been set for a compliance bound.  `_compliance` is the address of modular compliance concerned  `_maxBalance` is the max amount of tokens that a user can hold .



#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance `indexed` | address | undefined |
| _maxBalance `indexed` | uint256 | undefined |

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



## Errors

### InvalidPresetValues

```solidity
error InvalidPresetValues(address _compliance, address[] _id, uint256[] _balance)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |
| _id | address[] | undefined |
| _balance | uint256[] | undefined |

### MaxBalanceExceeded

```solidity
error MaxBalanceExceeded(address _compliance, uint256 _value)
```

errors



#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |
| _value | uint256 | undefined |

### OnlyComplianceOwnerCanCall

```solidity
error OnlyComplianceOwnerCanCall(address _compliance)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |

### TokenAlreadyBound

```solidity
error TokenAlreadyBound(address _compliance)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |


