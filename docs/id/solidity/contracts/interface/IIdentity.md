# IIdentity









## Methods

### addClaim

```solidity
function addClaim(uint256 _topic, uint256 _scheme, address issuer, bytes _signature, bytes _data, string _uri) external nonpayable returns (bytes32 claimRequestId)
```



*Add or update a claim. Triggers Event: `ClaimAdded`, `ClaimChanged` Specification: Add or update a claim from an issuer. _signature is a signed message of the following structure: `keccak256(abi.encode(address identityHolder_address, uint256 topic, bytes data))`. Claim IDs are generated using `keccak256(abi.encode(address issuer_address + uint256 topic))`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _topic | uint256 | undefined |
| _scheme | uint256 | undefined |
| issuer | address | undefined |
| _signature | bytes | undefined |
| _data | bytes | undefined |
| _uri | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| claimRequestId | bytes32 | undefined |

### addKey

```solidity
function addKey(bytes32 _key, uint256 _purpose, uint256 _keyType) external nonpayable returns (bool success)
```



*Adds a _key to the identity. The _purpose specifies the purpose of the key. Triggers Event: `KeyAdded` Specification: MUST only be done by keys of purpose 1, or the identity itself. If it&#39;s the identity itself, the approval process will determine its approval.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _key | bytes32 | undefined |
| _purpose | uint256 | undefined |
| _keyType | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| success | bool | undefined |

### approve

```solidity
function approve(uint256 _id, bool _approve) external nonpayable returns (bool success)
```



*Approves an execution. Triggers Event: `Approved` Triggers on execution successful Event: `Executed` Triggers on execution failure Event: `ExecutionFailed`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _id | uint256 | undefined |
| _approve | bool | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| success | bool | undefined |

### execute

```solidity
function execute(address _to, uint256 _value, bytes _data) external payable returns (uint256 executionId)
```



*Passes an execution instruction to an ERC734 identity. How the execution is handled is up to the identity implementation: An execution COULD be requested and require `approve` to be called with one or more keys of purpose 1 or 2 to approve this execution. Execute COULD be used as the only accessor for `addKey` and `removeKey`. Triggers Event: ExecutionRequested Triggers on direct execution Event: Executed*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _value | uint256 | undefined |
| _data | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| executionId | uint256 | undefined |

### getClaim

```solidity
function getClaim(bytes32 _claimId) external view returns (uint256 topic, uint256 scheme, address issuer, bytes signature, bytes data, string uri)
```



*Get a claim by its ID. Claim IDs are generated using `keccak256(abi.encode(address issuer_address, uint256 topic))`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimId | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| topic | uint256 | undefined |
| scheme | uint256 | undefined |
| issuer | address | undefined |
| signature | bytes | undefined |
| data | bytes | undefined |
| uri | string | undefined |

### getClaimIdsByTopic

```solidity
function getClaimIdsByTopic(uint256 _topic) external view returns (bytes32[] claimIds)
```



*Returns an array of claim IDs by topic.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _topic | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| claimIds | bytes32[] | undefined |

### getKey

```solidity
function getKey(bytes32 _key) external view returns (uint256[] purposes, uint256 keyType, bytes32 key)
```



*Returns the full key data, if present in the identity.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _key | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| purposes | uint256[] | undefined |
| keyType | uint256 | undefined |
| key | bytes32 | undefined |

### getKeyPurposes

```solidity
function getKeyPurposes(bytes32 _key) external view returns (uint256[] _purposes)
```



*Returns the list of purposes associated with a key.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _key | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _purposes | uint256[] | undefined |

### getKeysByPurpose

```solidity
function getKeysByPurpose(uint256 _purpose) external view returns (bytes32[] keys)
```



*Returns an array of public key bytes32 held by this identity.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _purpose | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| keys | bytes32[] | undefined |

### isClaimValid

```solidity
function isClaimValid(contract IIdentity _identity, uint256 claimTopic, bytes sig, bytes data) external view returns (bool)
```



*Checks if a claim is valid.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _identity | contract IIdentity | the identity contract related to the claim |
| claimTopic | uint256 | the claim topic of the claim |
| sig | bytes | the signature of the claim |
| data | bytes | the data field of the claim |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | claimValid true if the claim is valid, false otherwise |

### keyHasPurpose

```solidity
function keyHasPurpose(bytes32 _key, uint256 _purpose) external view returns (bool exists)
```



*Returns TRUE if a key is present and has the given purpose. If the key is not present it returns FALSE.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _key | bytes32 | undefined |
| _purpose | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| exists | bool | undefined |

### removeClaim

```solidity
function removeClaim(bytes32 _claimId) external nonpayable returns (bool success)
```



*Removes a claim. Triggers Event: `ClaimRemoved` Claim IDs are generated using `keccak256(abi.encode(address issuer_address, uint256 topic))`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimId | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| success | bool | undefined |

### removeKey

```solidity
function removeKey(bytes32 _key, uint256 _purpose) external nonpayable returns (bool success)
```



*Removes _purpose for _key from the identity. Triggers Event: `KeyRemoved` Specification: MUST only be done by keys of purpose 1, or the identity itself. If it&#39;s the identity itself, the approval process will determine its approval.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _key | bytes32 | undefined |
| _purpose | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| success | bool | undefined |



## Events

### Approved

```solidity
event Approved(uint256 indexed executionId, bool approved)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| executionId `indexed` | uint256 | undefined |
| approved  | bool | undefined |

### ClaimAdded

```solidity
event ClaimAdded(bytes32 indexed claimId, uint256 indexed topic, uint256 scheme, address indexed issuer, bytes signature, bytes data, string uri)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| claimId `indexed` | bytes32 | undefined |
| topic `indexed` | uint256 | undefined |
| scheme  | uint256 | undefined |
| issuer `indexed` | address | undefined |
| signature  | bytes | undefined |
| data  | bytes | undefined |
| uri  | string | undefined |

### ClaimChanged

```solidity
event ClaimChanged(bytes32 indexed claimId, uint256 indexed topic, uint256 scheme, address indexed issuer, bytes signature, bytes data, string uri)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| claimId `indexed` | bytes32 | undefined |
| topic `indexed` | uint256 | undefined |
| scheme  | uint256 | undefined |
| issuer `indexed` | address | undefined |
| signature  | bytes | undefined |
| data  | bytes | undefined |
| uri  | string | undefined |

### ClaimRemoved

```solidity
event ClaimRemoved(bytes32 indexed claimId, uint256 indexed topic, uint256 scheme, address indexed issuer, bytes signature, bytes data, string uri)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| claimId `indexed` | bytes32 | undefined |
| topic `indexed` | uint256 | undefined |
| scheme  | uint256 | undefined |
| issuer `indexed` | address | undefined |
| signature  | bytes | undefined |
| data  | bytes | undefined |
| uri  | string | undefined |

### Executed

```solidity
event Executed(uint256 indexed executionId, address indexed to, uint256 indexed value, bytes data)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| executionId `indexed` | uint256 | undefined |
| to `indexed` | address | undefined |
| value `indexed` | uint256 | undefined |
| data  | bytes | undefined |

### ExecutionFailed

```solidity
event ExecutionFailed(uint256 indexed executionId, address indexed to, uint256 indexed value, bytes data)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| executionId `indexed` | uint256 | undefined |
| to `indexed` | address | undefined |
| value `indexed` | uint256 | undefined |
| data  | bytes | undefined |

### ExecutionRequested

```solidity
event ExecutionRequested(uint256 indexed executionId, address indexed to, uint256 indexed value, bytes data)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| executionId `indexed` | uint256 | undefined |
| to `indexed` | address | undefined |
| value `indexed` | uint256 | undefined |
| data  | bytes | undefined |

### KeyAdded

```solidity
event KeyAdded(bytes32 indexed key, uint256 indexed purpose, uint256 indexed keyType)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| key `indexed` | bytes32 | undefined |
| purpose `indexed` | uint256 | undefined |
| keyType `indexed` | uint256 | undefined |

### KeyRemoved

```solidity
event KeyRemoved(bytes32 indexed key, uint256 indexed purpose, uint256 indexed keyType)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| key `indexed` | bytes32 | undefined |
| purpose `indexed` | uint256 | undefined |
| keyType `indexed` | uint256 | undefined |



