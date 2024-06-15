# TransferFeesModule









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



*See {IModule-canComplianceBind}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### getFee

```solidity
function getFee(address _compliance) external view returns (struct TransferFeesModule.Fee)
```



*getter for `_fees` variable*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | the Compliance smart contract to be checked  returns the Fee |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | TransferFeesModule.Fee | undefined |

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



*See {IModule-moduleBurnAction}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _value | uint256 | undefined |

### moduleCheck

```solidity
function moduleCheck(address _from, address _to, uint256 _value, address _compliance) external view returns (bool)
```



*See {IModule-moduleCheck}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
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



*See {IModule-moduleMintAction}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _value | uint256 | undefined |

### moduleTransferAction

```solidity
function moduleTransferAction(address _from, address _to, uint256 _value) external nonpayable
```



*See {IModule-moduleTransferAction}.*

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


### setFee

```solidity
function setFee(uint256 _rate, address _collector) external nonpayable
```



*Sets the fee rate and collector of the given compliance*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _rate | uint256 | is the rate of the fee (0.01% = 1, 1% = 100, 100% = 10000) |
| _collector | address | is the collector wallet address  Only the owner of the Compliance smart contract can call this function  Collector wallet address must be verified |

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

### FeeUpdated

```solidity
event FeeUpdated(address indexed compliance, uint256 _rate, address _collector)
```

this event is emitted whenever a fee definition is updated for the given compliance address  the event is emitted by &#39;setFee&#39;.  compliance is the compliance contract address  _rate is the rate of the fee (0.01% = 1, 1% = 100, 100% = 10000)  _collector is the collector wallet address



#### Parameters

| Name | Type | Description |
|---|---|---|
| compliance `indexed` | address | undefined |
| _rate  | uint256 | undefined |
| _collector  | address | undefined |

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



## Errors

### CollectorAddressIsNotVerified

```solidity
error CollectorAddressIsNotVerified(address compliance, address collector)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| compliance | address | undefined |
| collector | address | undefined |

### FeeRateIsOutOfRange

```solidity
error FeeRateIsOutOfRange(address compliance, uint256 rate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| compliance | address | undefined |
| rate | uint256 | undefined |


