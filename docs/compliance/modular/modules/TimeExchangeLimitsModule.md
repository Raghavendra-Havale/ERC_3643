# TimeExchangeLimitsModule









## Methods

### addExchangeID

```solidity
function addExchangeID(address _exchangeID) external nonpayable
```



*tags the ONCHAINID as being an exchange ID*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID | address | ONCHAINID to be tagged  Function can be called only by the owner of this module  Cannot be called on an address already tagged as being an exchange  emits an `ExchangeIDAdded` event |

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
function canComplianceBind(address) external view returns (bool)
```



*See {IModule-canComplianceBind}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### getExchangeCounter

```solidity
function getExchangeCounter(address compliance, address _exchangeID, address _investorID, uint32 _limitTime) external view returns (struct TimeExchangeLimitsModule.ExchangeTransferCounter)
```



*getter for `exchangeCounters` variable on the timer parameter of the ExchangeTransferCounter struct*

#### Parameters

| Name | Type | Description |
|---|---|---|
| compliance | address | the compliance smart contract address to be checked |
| _exchangeID | address | the ONCHAINID of the exchange |
| _investorID | address | the ONCHAINID of the investor to be checked |
| _limitTime | uint32 | limit time frame  returns the counter of the given `_limitTime`, `_investorID`, and `exchangeID` |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | TimeExchangeLimitsModule.ExchangeTransferCounter | undefined |

### getExchangeLimits

```solidity
function getExchangeLimits(address compliance, address _exchangeID) external view returns (struct TimeExchangeLimitsModule.Limit[])
```



*getter for `exchangeLimit` variable*

#### Parameters

| Name | Type | Description |
|---|---|---|
| compliance | address | the Compliance smart contract to be checked |
| _exchangeID | address | exchange ONCHAINID  returns the array of limits set for that exchange |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | TimeExchangeLimitsModule.Limit[] | undefined |

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

### isExchangeID

```solidity
function isExchangeID(address _exchangeID) external view returns (bool)
```



*getter for `_exchangeIDs` variable  tells to the caller if an ONCHAINID belongs to an exchange or not*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID | address | ONCHAINID to be checked  returns TRUE if the address corresponds to an exchange, FALSE otherwise |

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
function moduleBurnAction(address, uint256) external nonpayable
```



*See {IModule-moduleBurnAction}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint256 | undefined |

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
function moduleMintAction(address, uint256) external nonpayable
```



*See {IModule-moduleMintAction}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint256 | undefined |

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

### removeExchangeID

```solidity
function removeExchangeID(address _exchangeID) external nonpayable
```



*untags the ONCHAINID as being an exchange ID*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID | address | ONCHAINID to be untagged  Function can be called only by the owner of this module  Cannot be called on an address not tagged as being an exchange  emits an `ExchangeIDRemoved` event |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### setExchangeLimit

```solidity
function setExchangeLimit(address _exchangeID, TimeExchangeLimitsModule.Limit _limit) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID | address | undefined |
| _limit | TimeExchangeLimitsModule.Limit | undefined |

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

### ExchangeIDAdded

```solidity
event ExchangeIDAdded(address _newExchangeID)
```

this event is emitted whenever an ONCHAINID is tagged as an exchange ID.  the event is emitted by &#39;addExchangeID&#39;.  `_newExchangeID` is the ONCHAINID address of the exchange to add.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _newExchangeID  | address | undefined |

### ExchangeIDRemoved

```solidity
event ExchangeIDRemoved(address _exchangeID)
```

this event is emitted whenever an ONCHAINID is untagged as belonging to an exchange.  the event is emitted by &#39;removeExchangeID&#39;.  `_exchangeID` is the ONCHAINID being untagged as an exchange ID.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID  | address | undefined |

### ExchangeLimitUpdated

```solidity
event ExchangeLimitUpdated(address indexed compliance, address _exchangeID, uint256 _limitValue, uint32 _limitTime)
```

this event is emitted whenever an exchange limit is updated for the given compliance address  the event is emitted by &#39;setExchangeLimit&#39;.  compliance`is the compliance contract address  _exchangeID is the ONCHAINID of the exchange  _limitValue is the new limit value for the given limit time  _limitTime is the period of time of the limit



#### Parameters

| Name | Type | Description |
|---|---|---|
| compliance `indexed` | address | undefined |
| _exchangeID  | address | undefined |
| _limitValue  | uint256 | undefined |
| _limitTime  | uint32 | undefined |

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

### LimitsArraySizeExceeded

```solidity
error LimitsArraySizeExceeded(address compliance, uint256 arraySize)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| compliance | address | undefined |
| arraySize | uint256 | undefined |

### ONCHAINIDAlreadyTaggedAsExchange

```solidity
error ONCHAINIDAlreadyTaggedAsExchange(address _exchangeID)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID | address | undefined |

### ONCHAINIDNotTaggedAsExchange

```solidity
error ONCHAINIDNotTaggedAsExchange(address _exchangeID)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID | address | undefined |


