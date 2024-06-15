# TrustedIssuersRegistry









## Methods

### addTrustedIssuer

```solidity
function addTrustedIssuer(contract IClaimIssuer _trustedIssuer, uint256[] _claimTopics) external nonpayable
```



*See {ITrustedIssuersRegistry-addTrustedIssuer}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuer | contract IClaimIssuer | undefined |
| _claimTopics | uint256[] | undefined |

### getTrustedIssuerClaimTopics

```solidity
function getTrustedIssuerClaimTopics(contract IClaimIssuer _trustedIssuer) external view returns (uint256[])
```



*See {ITrustedIssuersRegistry-getTrustedIssuerClaimTopics}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuer | contract IClaimIssuer | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | undefined |

### getTrustedIssuers

```solidity
function getTrustedIssuers() external view returns (contract IClaimIssuer[])
```



*See {ITrustedIssuersRegistry-getTrustedIssuers}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IClaimIssuer[] | undefined |

### getTrustedIssuersForClaimTopic

```solidity
function getTrustedIssuersForClaimTopic(uint256 claimTopic) external view returns (contract IClaimIssuer[])
```



*See {ITrustedIssuersRegistry-getTrustedIssuersForClaimTopic}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| claimTopic | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IClaimIssuer[] | undefined |

### hasClaimTopic

```solidity
function hasClaimTopic(address _issuer, uint256 _claimTopic) external view returns (bool)
```



*See {ITrustedIssuersRegistry-hasClaimTopic}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _issuer | address | undefined |
| _claimTopic | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### init

```solidity
function init() external nonpayable
```






### isTrustedIssuer

```solidity
function isTrustedIssuer(address _issuer) external view returns (bool)
```



*See {ITrustedIssuersRegistry-isTrustedIssuer}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _issuer | address | undefined |

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

### removeTrustedIssuer

```solidity
function removeTrustedIssuer(contract IClaimIssuer _trustedIssuer) external nonpayable
```



*See {ITrustedIssuersRegistry-removeTrustedIssuer}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuer | contract IClaimIssuer | undefined |

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

### updateIssuerClaimTopics

```solidity
function updateIssuerClaimTopics(contract IClaimIssuer _trustedIssuer, uint256[] _claimTopics) external nonpayable
```



*See {ITrustedIssuersRegistry-updateIssuerClaimTopics}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuer | contract IClaimIssuer | undefined |
| _claimTopics | uint256[] | undefined |



## Events

### ClaimTopicsUpdated

```solidity
event ClaimTopicsUpdated(contract IClaimIssuer indexed trustedIssuer, uint256[] claimTopics)
```

this event is emitted when the set of claim topics is changed for a given trusted issuer.  the event is emitted by the updateIssuerClaimTopics function  `trustedIssuer` is the address of the trusted issuer&#39;s ClaimIssuer contract  `claimTopics` is the set of claims that the trusted issuer is allowed to emit



#### Parameters

| Name | Type | Description |
|---|---|---|
| trustedIssuer `indexed` | contract IClaimIssuer | undefined |
| claimTopics  | uint256[] | undefined |

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

### TrustedIssuerAdded

```solidity
event TrustedIssuerAdded(contract IClaimIssuer indexed trustedIssuer, uint256[] claimTopics)
```

this event is emitted when a trusted issuer is added in the registry.  the event is emitted by the addTrustedIssuer function  `trustedIssuer` is the address of the trusted issuer&#39;s ClaimIssuer contract  `claimTopics` is the set of claims that the trusted issuer is allowed to emit



#### Parameters

| Name | Type | Description |
|---|---|---|
| trustedIssuer `indexed` | contract IClaimIssuer | undefined |
| claimTopics  | uint256[] | undefined |

### TrustedIssuerRemoved

```solidity
event TrustedIssuerRemoved(contract IClaimIssuer indexed trustedIssuer)
```

this event is emitted when a trusted issuer is removed from the registry.  the event is emitted by the removeTrustedIssuer function  `trustedIssuer` is the address of the trusted issuer&#39;s ClaimIssuer contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| trustedIssuer `indexed` | contract IClaimIssuer | undefined |



