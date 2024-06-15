# IClaimTopicsRegistry









## Methods

### addClaimTopic

```solidity
function addClaimTopic(uint256 _claimTopic) external nonpayable
```



*Add a trusted claim topic (For example: KYC=1, AML=2). Only owner can call. emits `ClaimTopicAdded` event cannot add more than 15 topics for 1 token as adding more could create gas issues*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimTopic | uint256 | The claim topic index |

### getClaimTopics

```solidity
function getClaimTopics() external view returns (uint256[])
```



*Get the trusted claim topics for the security token*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | Array of trusted claim topics |

### removeClaimTopic

```solidity
function removeClaimTopic(uint256 _claimTopic) external nonpayable
```



*Remove a trusted claim topic (For example: KYC=1, AML=2).  Only owner can call.  emits `ClaimTopicRemoved` event*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimTopic | uint256 | The claim topic index |



## Events

### ClaimTopicAdded

```solidity
event ClaimTopicAdded(uint256 indexed claimTopic)
```

this event is emitted when a claim topic has been added to the ClaimTopicsRegistry  the event is emitted by the &#39;addClaimTopic&#39; function  `claimTopic` is the required claim added to the Claim Topics Registry



#### Parameters

| Name | Type | Description |
|---|---|---|
| claimTopic `indexed` | uint256 | undefined |

### ClaimTopicRemoved

```solidity
event ClaimTopicRemoved(uint256 indexed claimTopic)
```

this event is emitted when a claim topic has been removed from the ClaimTopicsRegistry  the event is emitted by the &#39;removeClaimTopic&#39; function  `claimTopic` is the required claim removed from the Claim Topics Registry



#### Parameters

| Name | Type | Description |
|---|---|---|
| claimTopic `indexed` | uint256 | undefined |



