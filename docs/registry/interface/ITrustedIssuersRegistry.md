# ITrustedIssuersRegistry









## Methods

### addTrustedIssuer

```solidity
function addTrustedIssuer(contract IClaimIssuer _trustedIssuer, uint256[] _claimTopics) external nonpayable
```



*registers a ClaimIssuer contract as trusted claim issuer.  Requires that a ClaimIssuer contract doesn&#39;t already exist  Requires that the claimTopics set is not empty  Requires that there is no more than 15 claimTopics  Requires that there is no more than 50 Trusted issuers*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuer | contract IClaimIssuer | The ClaimIssuer contract address of the trusted claim issuer. |
| _claimTopics | uint256[] | the set of claim topics that the trusted issuer is allowed to emit  This function can only be called by the owner of the Trusted Issuers Registry contract  emits a `TrustedIssuerAdded` event |

### getTrustedIssuerClaimTopics

```solidity
function getTrustedIssuerClaimTopics(contract IClaimIssuer _trustedIssuer) external view returns (uint256[])
```



*Function for getting all the claim topic of trusted claim issuer  Requires the provided ClaimIssuer contract to be registered in the trusted issuers registry.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuer | contract IClaimIssuer | the trusted issuer concerned. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | The set of claim topics that the trusted issuer is allowed to emit |

### getTrustedIssuers

```solidity
function getTrustedIssuers() external view returns (contract IClaimIssuer[])
```



*Function for getting all the trusted claim issuers stored.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IClaimIssuer[] | array of all claim issuers registered. |

### getTrustedIssuersForClaimTopic

```solidity
function getTrustedIssuersForClaimTopic(uint256 claimTopic) external view returns (contract IClaimIssuer[])
```



*Function for getting all the trusted issuer allowed for a given claim topic.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| claimTopic | uint256 | the claim topic to get the trusted issuers for. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IClaimIssuer[] | array of all claim issuer addresses that are allowed for the given claim topic. |

### hasClaimTopic

```solidity
function hasClaimTopic(address _issuer, uint256 _claimTopic) external view returns (bool)
```



*Function for checking if the trusted claim issuer is allowed  to emit a certain claim topic*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _issuer | address | the address of the trusted issuer&#39;s ClaimIssuer contract |
| _claimTopic | uint256 | the Claim Topic that has to be checked to know if the `issuer` is allowed to emit it |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | true if the issuer is trusted for this claim topic. |

### isTrustedIssuer

```solidity
function isTrustedIssuer(address _issuer) external view returns (bool)
```



*Checks if the ClaimIssuer contract is trusted*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _issuer | address | the address of the ClaimIssuer contract |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | true if the issuer is trusted, false otherwise. |

### removeTrustedIssuer

```solidity
function removeTrustedIssuer(contract IClaimIssuer _trustedIssuer) external nonpayable
```



*Removes the ClaimIssuer contract of a trusted claim issuer.  Requires that the claim issuer contract to be registered first*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuer | contract IClaimIssuer | the claim issuer to remove.  This function can only be called by the owner of the Trusted Issuers Registry contract  emits a `TrustedIssuerRemoved` event |

### updateIssuerClaimTopics

```solidity
function updateIssuerClaimTopics(contract IClaimIssuer _trustedIssuer, uint256[] _claimTopics) external nonpayable
```



*Updates the set of claim topics that a trusted issuer is allowed to emit.  Requires that this ClaimIssuer contract already exists in the registry  Requires that the provided claimTopics set is not empty  Requires that there is no more than 15 claimTopics*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuer | contract IClaimIssuer | the claim issuer to update. |
| _claimTopics | uint256[] | the set of claim topics that the trusted issuer is allowed to emit  This function can only be called by the owner of the Trusted Issuers Registry contract  emits a `ClaimTopicsUpdated` event |



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



