# ConditionalTransferModule





this module allows to require the pre-validation of a transfer before allowing it to be executed



## Methods

### approveTransfer

```solidity
function approveTransfer(address _from, address _to, uint256 _amount) external nonpayable
```



*Approves a transfer  once a transfer is approved, the sender is allowed to execute it*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | the address of the transfer sender |
| _to | address | the address of the transfer receiver |
| _amount | uint256 | the amount of tokens that `_from` would send to `_to`  Only a bound compliance can call this function  emits a `TransferApproved` event |

### batchApproveTransfers

```solidity
function batchApproveTransfers(address[] _from, address[] _to, uint256[] _amount) external nonpayable
```



*Approves transfers in batch  once a transfer is approved, the sender is allowed to execute it  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_from.length` IS TOO HIGH,  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN &quot;OUT OF GAS&quot; TRANSACTION*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address[] | the array of addresses of the transfer senders |
| _to | address[] | the array of addresses of the transfer receivers |
| _amount | uint256[] | the array of tokens amounts that `_from` would send to `_to`  Only a bound compliance can call this function  emits `_from.length` `TransferApproved` events |

### batchUnApproveTransfers

```solidity
function batchUnApproveTransfers(address[] _from, address[] _to, uint256[] _amount) external nonpayable
```



*removes approval on a transfer previously approved  requires the transfer to be previously approved  once a transfer approval is removed, the sender is not allowed to execute it anymore  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_from.length` IS TOO HIGH,  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN &quot;OUT OF GAS&quot; TRANSACTION*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address[] | the array of addresses of the transfer senders |
| _to | address[] | the array of addresses of the transfer receivers |
| _amount | uint256[] | the array of token amounts that `_from` were allowed to send to `_to`  Only a bound compliance can call this function  emits `_from.length` `ApprovalRemoved` events |

### bindCompliance

```solidity
function bindCompliance(address _compliance) external nonpayable
```



*See {IModule-bindCompliance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |

### calculateTransferHash

```solidity
function calculateTransferHash(address _from, address _to, uint256 _amount, address _token) external pure returns (bytes32)
```



*Calculates the hash of a transfer approval*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | the address of the transfer sender |
| _to | address | the address of the transfer receiver |
| _amount | uint256 | the amount of tokens that `_from` would send to `_to` |
| _token | address | the address of the token that would be transferred  returns the transferId of the transfer |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

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

### getTransferApprovals

```solidity
function getTransferApprovals(address _compliance, bytes32 _transferHash) external view returns (uint256)
```



*Returns the amount of identical transfers approved*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | the modular compliance address |
| _transferHash | bytes32 | , bytes corresponding to the transfer details, hashed  requires `_compliance` to be bound to this module |

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

### isTransferApproved

```solidity
function isTransferApproved(address _compliance, bytes32 _transferHash) external view returns (bool)
```



*Returns true if transfer is approved*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | the modular compliance address |
| _transferHash | bytes32 | , bytes corresponding to the transfer details, hashed  requires `_compliance` to be bound to this module |

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
function moduleCheck(address _from, address _to, uint256 _value, address _compliance) external view returns (bool)
```



*See {IModule-moduleCheck}.  checks if the transfer is approved or not*

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



*See {IModule-moduleTransferAction}.  transfer approval is removed post-transfer if it was pre-approved  the check on whether the transfer was pre-approved or not here is to allow forced transfers to bypass the module*

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


### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### unApproveTransfer

```solidity
function unApproveTransfer(address _from, address _to, uint256 _amount) external nonpayable
```



*removes approval on a transfer previously approved  requires the transfer to be previously approved  once a transfer approval is removed, the sender is not allowed to execute it anymore*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | the address of the transfer sender |
| _to | address | the address of the transfer receiver |
| _amount | uint256 | the amount of tokens that `_from` was allowed to send to `_to`  Only a bound compliance can call this function  emits an `ApprovalRemoved` event |

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

### ApprovalRemoved

```solidity
event ApprovalRemoved(address _from, address _to, uint256 _amount, address _token)
```

this event is emitted whenever a transfer approval is removed.  the event is emitted by &#39;unApproveTransfer&#39; function.  `_from` is the address of transfer sender.  `_to` is the address of transfer recipient  `_amount` is the token amount to be sent (take care of decimals)  `_token` is the token address of the token concerned by the approval



#### Parameters

| Name | Type | Description |
|---|---|---|
| _from  | address | undefined |
| _to  | address | undefined |
| _amount  | uint256 | undefined |
| _token  | address | undefined |

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

### TransferApproved

```solidity
event TransferApproved(address _from, address _to, uint256 _amount, address _token)
```

this event is emitted whenever a transfer is approved.  the event is emitted by &#39;approveTransfer&#39; function.  `_from` is the address of transfer sender.  `_to` is the address of transfer recipient  `_amount` is the token amount to be sent (take care of decimals)  `_token` is the token address of the token concerned by the approval



#### Parameters

| Name | Type | Description |
|---|---|---|
| _from  | address | undefined |
| _to  | address | undefined |
| _amount  | uint256 | undefined |
| _token  | address | undefined |

### Upgraded

```solidity
event Upgraded(address indexed implementation)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| implementation `indexed` | address | undefined |



