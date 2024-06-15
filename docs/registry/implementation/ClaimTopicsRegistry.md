# ClaimTopicsRegistry









## Methods

### addClaimTopic

```solidity
function addClaimTopic(uint256 _claimTopic) external nonpayable
```



*See {IClaimTopicsRegistry-addClaimTopic}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimTopic | uint256 | undefined |

### getClaimTopics

```solidity
function getClaimTopics() external view returns (uint256[])
```



*See {IClaimTopicsRegistry-getClaimTopics}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | undefined |

### init

```solidity
function init() external nonpayable
```






### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### removeClaimTopic

```solidity
function removeClaimTopic(uint256 _claimTopic) external nonpayable
```



*See {IClaimTopicsRegistry-removeClaimTopic}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimTopic | uint256 | undefined |

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



