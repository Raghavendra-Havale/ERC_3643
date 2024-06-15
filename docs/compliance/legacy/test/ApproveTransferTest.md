# ApproveTransferTest









## Methods

### addAgent

```solidity
function addAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### addTokenAgent

```solidity
function addTokenAgent(address _agentAddress) external nonpayable
```



*See {ICompliance-addTokenAgent}.  this function is deprecated, but still implemented to avoid breaking interfaces*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agentAddress | address | undefined |

### approveAndTransfer

```solidity
function approveAndTransfer(address _from, address _to, uint256 _amount) external nonpayable
```



*Approves a transfer and execute it immediately  As the function calls `transferFrom` on the token contract, the compliance contract, which is de facto sender of  that function call has to be allowed to make such a call, i.e. the allowance should be &gt;= `_amount` with  Compliance contract address being the spender address*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | the address of the transfer sender |
| _to | address | the address of the transfer receiver |
| _amount | uint256 | the amount of tokens that `_from` would send to `_to`  Only Admin can call this function, i.e. owner of compliance contract OR token agent  emits a `TransferApproved` event, an `ApprovalRemoved` event and a `Transfer` event |

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
| _amount | uint256 | the amount of tokens that `_from` would send to `_to`  Only Admin can call this function, i.e. owner of compliance contract OR token agent  emits a `TransferApproved` event |

### bindToken

```solidity
function bindToken(address _token) external nonpayable
```



*See {ICompliance-bindToken}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | undefined |

### canTransfer

```solidity
function canTransfer(address _from, address _to, uint256 _value) external view returns (bool)
```



*See {ICompliance-canTransfer}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _to | address | undefined |
| _value | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### complianceCheckOnApproveTransfer

```solidity
function complianceCheckOnApproveTransfer(address _from, address _to, uint256 _value) external view returns (bool)
```



*check on the compliance status of a transaction.  If the check returns TRUE, the transfer is allowed to be executed, if the check returns FALSE, the compliance  feature will block the transfer execution  The check will verify if the transferID corresponding to the parameters of the transfer corresponds to a  pre-approved transfer or not, and will return TRUE or FALSE according to the approval status of the said transfer  If `_from` is a token agent, the transfer will pass whatever the approval status may be as agents bypass this  compliance feature.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | the address of the transfer sender |
| _to | address | the address of the transfer receiver |
| _value | uint256 | the amount of tokens that `_from` would send to `_to` |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### created

```solidity
function created(address _to, uint256 _value) external nonpayable
```



*See {ICompliance-created}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _value | uint256 | undefined |

### destroyed

```solidity
function destroyed(address _from, uint256 _value) external nonpayable
```



*See {ICompliance-destroyed}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _value | uint256 | undefined |

### isAgent

```solidity
function isAgent(address _agent) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isTokenAgent

```solidity
function isTokenAgent(address _agentAddress) external view returns (bool)
```



*See {ICompliance-isTokenAgent}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agentAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isTokenBound

```solidity
function isTokenBound(address _token) external view returns (bool)
```



*See {ICompliance-isTokenBound}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | undefined |

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

### removeAgent

```solidity
function removeAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### removeApproval

```solidity
function removeApproval(address _from, address _to, uint256 _amount) external nonpayable
```



*removes approval on a transfer previously approved  requires the transfer to be previously approved  once a transfer approval is removed, the sender is not allowed to execute it anymore*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | the address of the transfer sender |
| _to | address | the address of the transfer receiver |
| _amount | uint256 | the amount of tokens that `_from` was allowed to send to `_to`  Only Admin can call this function, i.e. owner of compliance contract OR token agent  emits an `ApprovalRemoved` event |

### removeTokenAgent

```solidity
function removeTokenAgent(address _agentAddress) external nonpayable
```



*See {ICompliance-isTokenAgent}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agentAddress | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### tokenBound

```solidity
function tokenBound() external view returns (contract IToken)
```

Mapping of tokens linked to the compliance contract




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IToken | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### transferred

```solidity
function transferred(address _from, address _to, uint256 _value) external nonpayable
```



*See {ICompliance-transferred}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _to | address | undefined |
| _value | uint256 | undefined |

### unbindToken

```solidity
function unbindToken(address _token) external nonpayable
```



*See {ICompliance-unbindToken}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | undefined |



## Events

### AgentAdded

```solidity
event AgentAdded(address indexed _agent)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent `indexed` | address | undefined |

### AgentRemoved

```solidity
event AgentRemoved(address indexed _agent)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent `indexed` | address | undefined |

### ApprovalRemoved

```solidity
event ApprovalRemoved(address _from, address _to, uint256 _amount, address _token)
```

this event is emitted when a transfer approval is removed  the event is emitted by the `removeApproval` function  `_from` is the address of the transfer sender  `_to` is the address of the transfer receiver  `_amount` is the amount of tokens that `_from` was allowed to send to `_to`  `_token` is the address of the token that was allowed to be transferred



#### Parameters

| Name | Type | Description |
|---|---|---|
| _from  | address | undefined |
| _to  | address | undefined |
| _amount  | uint256 | undefined |
| _token  | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### TokenAgentAdded

```solidity
event TokenAgentAdded(address _agentAddress)
```

this event is emitted when the Agent has been added on the allowedList of this Compliance.  the event is emitted by the Compliance constructor and by the addTokenAgent function  `_agentAddress` is the address of the Agent to add



#### Parameters

| Name | Type | Description |
|---|---|---|
| _agentAddress  | address | undefined |

### TokenAgentRemoved

```solidity
event TokenAgentRemoved(address _agentAddress)
```

this event is emitted when the Agent has been removed from the agent list of this Compliance.  the event is emitted by the Compliance constructor and by the removeTokenAgent function  `_agentAddress` is the address of the Agent to remove



#### Parameters

| Name | Type | Description |
|---|---|---|
| _agentAddress  | address | undefined |

### TokenBound

```solidity
event TokenBound(address _token)
```

this event is emitted when a token has been bound to the compliance contract  the event is emitted by the bindToken function  `_token` is the address of the token to bind



#### Parameters

| Name | Type | Description |
|---|---|---|
| _token  | address | undefined |

### TokenUnbound

```solidity
event TokenUnbound(address _token)
```

this event is emitted when a token has been unbound from the compliance contract  the event is emitted by the unbindToken function  `_token` is the address of the token to unbind



#### Parameters

| Name | Type | Description |
|---|---|---|
| _token  | address | undefined |

### TransferApproved

```solidity
event TransferApproved(address _from, address _to, uint256 _amount, address _token)
```

this event is emitted when a transfer is approved  the event is emitted by the `approveTransfer` and `approveAndTransfer` functions  `_from` is the address of the transfer sender  `_to` is the address of the transfer receiver  `_amount` is the amount of tokens that `_from` is allowed to send to `_to`  note that the approved transfer has to be exactly of the approved amount `_amount`  `_token` is the address of the token that is allowed to be transferred



#### Parameters

| Name | Type | Description |
|---|---|---|
| _from  | address | undefined |
| _to  | address | undefined |
| _amount  | uint256 | undefined |
| _token  | address | undefined |



