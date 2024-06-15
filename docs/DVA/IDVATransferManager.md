# IDVATransferManager









## Methods

### approveTransfer

```solidity
function approveTransfer(bytes32 transferID) external nonpayable
```



*approves a transfer*

#### Parameters

| Name | Type | Description |
|---|---|---|
| transferID | bytes32 | is the unique ID of the transfer  msg.sender must be an approver of the transfer  emits a `TransferApproved` event  emits a `TransferCompleted` event (if all approvers approved the transfer)  emits a `TransferApprovalStateReset` event (if transfer approval criteria have been reset) |

### calculateTransferID

```solidity
function calculateTransferID(uint256 _nonce, address _sender, address _recipient, uint256 _amount) external pure returns (bytes32)
```



*calculates unique transfer ID*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _nonce | uint256 | is the unique nonce value |
| _sender | address | is the sender of the transfer |
| _recipient | address | is the recipient of the transfer |
| _amount | uint256 | is the transfer amount  returns a unique transfer ID |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### cancelTransfer

```solidity
function cancelTransfer(bytes32 transferID) external nonpayable
```



*cancels a transfer*

#### Parameters

| Name | Type | Description |
|---|---|---|
| transferID | bytes32 | is the unique ID of the transfer  msg.sender must be the sender of the transfer  emits a `TransferCancelled` event |

### delegateApproveTransfer

```solidity
function delegateApproveTransfer(bytes32 transferID, IDVATransferManager.Signature[] signatures) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| transferID | bytes32 | undefined |
| signatures | IDVATransferManager.Signature[] | undefined |

### getApprovalCriteria

```solidity
function getApprovalCriteria(address tokenAddress) external view returns (struct IDVATransferManager.ApprovalCriteria)
```



*getter for the approval criteria of tokens*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenAddress | address | is the address of the token  returns approval criteria of the token |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | IDVATransferManager.ApprovalCriteria | undefined |

### getNextApprover

```solidity
function getNextApprover(bytes32 transferID) external view returns (address nextApprover, bool anyTokenAgent)
```



*getter for the next approver of a transfer*

#### Parameters

| Name | Type | Description |
|---|---|---|
| transferID | bytes32 | is the unique ID of the transfer  returns address of the next approver and any token agent flag |

#### Returns

| Name | Type | Description |
|---|---|---|
| nextApprover | address | undefined |
| anyTokenAgent | bool | undefined |

### getNextTxNonce

```solidity
function getNextTxNonce() external view returns (uint256)
```



*getter for the next unique nonce value  returns nonce*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getTransfer

```solidity
function getTransfer(bytes32 transferID) external view returns (struct IDVATransferManager.Transfer)
```



*getter for the transfer*

#### Parameters

| Name | Type | Description |
|---|---|---|
| transferID | bytes32 | is the unique ID of the transfer  returns transfer |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | IDVATransferManager.Transfer | undefined |

### initiateTransfer

```solidity
function initiateTransfer(address tokenAddress, address recipient, uint256 amount) external nonpayable
```



*initiates a new transfer*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenAddress | address | is the address of the token |
| recipient | address | is the address of the recipient |
| amount | uint256 | is the transfer amount  Approval criteria must be preset for the given token address  Sender must give DvA an allowance of at least the specified amount  Receiver must be verified for the given token address  emits a `TransferInitiated` event |

### name

```solidity
function name() external pure returns (string _name)
```



*getter for the name of the manager*


#### Returns

| Name | Type | Description |
|---|---|---|
| _name | string | the name of the manager |

### rejectTransfer

```solidity
function rejectTransfer(bytes32 transferID) external nonpayable
```



*rejects a transfer*

#### Parameters

| Name | Type | Description |
|---|---|---|
| transferID | bytes32 | is the unique ID of the transfer  msg.sender must be an approver of the transfer  emits a `TransferRejected` event  emits a `TransferApprovalStateReset` event (if transfer approval criteria have been reset) |

### setApprovalCriteria

```solidity
function setApprovalCriteria(address tokenAddress, bool includeRecipientApprover, bool includeAgentApprover, bool sequentialApproval, address[] additionalApprovers) external nonpayable
```



*modify the approval criteria of a token*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenAddress | address | is the token address. |
| includeRecipientApprover | bool | determines whether the recipient is included in the approver list |
| includeAgentApprover | bool | determines whether the agent is included in the approver list |
| sequentialApproval | bool | determines whether approvals must be sequential |
| additionalApprovers | address[] | are the addresses of additional approvers to be added to the approver list  Only token owner can call this function  DVATransferManager must be an agent of the given token  emits an `ApprovalCriteriaSet` event |



## Events

### ApprovalCriteriaSet

```solidity
event ApprovalCriteriaSet(address tokenAddress, bool includeRecipientApprover, bool includeAgentApprover, bool sequentialApproval, address[] additionalApprovers, bytes32 hash)
```

this event is emitted whenever an approval criteria of a token is modified.  the event is emitted by &#39;setApprovalCriteria&#39; function.  `tokenAddress` is the token address.  `includeRecipientApprover` determines whether the recipient is included in the approver list  `includeAgentApprover` determines whether the agent is included in the approver list  `sequentialApproval` determines whether approvals must be sequential  `additionalApprovers` are the addresses of additional approvers to be added to the approver list  `hash` is the approval criteria hash



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenAddress  | address | undefined |
| includeRecipientApprover  | bool | undefined |
| includeAgentApprover  | bool | undefined |
| sequentialApproval  | bool | undefined |
| additionalApprovers  | address[] | undefined |
| hash  | bytes32 | undefined |

### TransferApprovalStateReset

```solidity
event TransferApprovalStateReset(bytes32 transferID, bytes32 approvalCriteriaHash)
```

this event is emitted whenever a transfer approval criteria are reset  the event is emitted by &#39;approveTransfer&#39; and &#39;rejectTransfer&#39; functions.  `transferID` is the unique ID of the transfer  `approvers` is the list of approvers  `approvalCriteriaHash` is the approval criteria hash



#### Parameters

| Name | Type | Description |
|---|---|---|
| transferID  | bytes32 | undefined |
| approvalCriteriaHash  | bytes32 | undefined |

### TransferApproved

```solidity
event TransferApproved(bytes32 transferID, address approver)
```

this event is emitted whenever a transfer is approved by an approver  the event is emitted by &#39;approveTransfer&#39; function.  `transferID` is the unique ID of the transfer  `approver` is the approver address



#### Parameters

| Name | Type | Description |
|---|---|---|
| transferID  | bytes32 | undefined |
| approver  | address | undefined |

### TransferCancelled

```solidity
event TransferCancelled(bytes32 transferID)
```

this event is emitted whenever a transfer is cancelled by the sender  the event is emitted by &#39;cancelTransfer&#39; function.  `transferID` is the unique ID of the transfer



#### Parameters

| Name | Type | Description |
|---|---|---|
| transferID  | bytes32 | undefined |

### TransferCompleted

```solidity
event TransferCompleted(bytes32 transferID, address tokenAddress, address sender, address recipient, uint256 amount)
```

this event is emitted whenever all approvers approve a transfer  the event is emitted by &#39;approveTransfer&#39; function.  `transferID` is the unique ID of the transfer  `tokenAddress` is the token address  `sender` is the address of the sender  `recipient` is the address of the recipient  `amount` is the amount of the transfer



#### Parameters

| Name | Type | Description |
|---|---|---|
| transferID  | bytes32 | undefined |
| tokenAddress  | address | undefined |
| sender  | address | undefined |
| recipient  | address | undefined |
| amount  | uint256 | undefined |

### TransferInitiated

```solidity
event TransferInitiated(bytes32 transferID, address tokenAddress, address sender, address recipient, uint256 amount, bytes32 approvalCriteriaHash)
```

this event is emitted whenever a transfer is initiated  the event is emitted by &#39;initiateTransfer&#39; function.  `transferID` is the unique ID of the transfer  `tokenAddress` is the token address  `sender` is the address of the sender  `recipient` is the address of the recipient  `amount` is the amount of the transfer  `approvers` is the list of approvers  `approvalCriteriaHash` is the approval criteria hash



#### Parameters

| Name | Type | Description |
|---|---|---|
| transferID  | bytes32 | undefined |
| tokenAddress  | address | undefined |
| sender  | address | undefined |
| recipient  | address | undefined |
| amount  | uint256 | undefined |
| approvalCriteriaHash  | bytes32 | undefined |

### TransferRejected

```solidity
event TransferRejected(bytes32 transferID, address rejectedBy)
```

this event is emitted whenever a transfer is rejected by an approver  the event is emitted by &#39;rejectTransfer&#39; function.  `transferID` is the unique ID of the transfer  `rejectedBy` is the approver address



#### Parameters

| Name | Type | Description |
|---|---|---|
| transferID  | bytes32 | undefined |
| rejectedBy  | address | undefined |



## Errors

### ApprovalsMustBeSequential

```solidity
error ApprovalsMustBeSequential(bytes32 _transferID)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _transferID | bytes32 | undefined |

### ApproverNotFound

```solidity
error ApproverNotFound(bytes32 _transferID, address _approver)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _transferID | bytes32 | undefined |
| _approver | address | undefined |

### DVAManagerIsNotVerifiedForTheToken

```solidity
error DVAManagerIsNotVerifiedForTheToken(address _tokenAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenAddress | address | undefined |

### InvalidTransferID

```solidity
error InvalidTransferID(bytes32 _transferID)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _transferID | bytes32 | undefined |

### OnlyTokenAgentCanCall

```solidity
error OnlyTokenAgentCanCall(address _tokenAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenAddress | address | undefined |

### OnlyTransferSenderCanCall

```solidity
error OnlyTransferSenderCanCall(bytes32 _transferID)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _transferID | bytes32 | undefined |

### RecipientIsNotVerified

```solidity
error RecipientIsNotVerified(address _tokenAddress, address _recipient)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenAddress | address | undefined |
| _recipient | address | undefined |

### SignaturesCanNotBeEmpty

```solidity
error SignaturesCanNotBeEmpty(bytes32 _transferID)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _transferID | bytes32 | undefined |

### TokenIsNotRegistered

```solidity
error TokenIsNotRegistered(address _tokenAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenAddress | address | undefined |

### TransferIsNotInPendingStatus

```solidity
error TransferIsNotInPendingStatus(bytes32 _transferID)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _transferID | bytes32 | undefined |


