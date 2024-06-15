# IERC734







*interface of the ERC734 (Key Holder) standard as defined in the EIP.*

## Methods

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



*Emitted when an execution request was approved. Specification: MUST be triggered when approve was successfully called.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| executionId `indexed` | uint256 | undefined |
| approved  | bool | undefined |

### Executed

```solidity
event Executed(uint256 indexed executionId, address indexed to, uint256 indexed value, bytes data)
```



*Emitted when an execute operation was approved and successfully performed. Specification: MUST be triggered when approve was called and the execution was successfully approved.*

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



*Emitted when an execute operation was called and failed Specification: MUST be triggered when execute call failed*

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



*Emitted when an execution request was performed via `execute`. Specification: MUST be triggered when execute was successfully called.*

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



*Emitted when a key was added to the Identity. Specification: MUST be triggered when addKey was successfully called.*

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



*Emitted when a key was removed from the Identity. Specification: MUST be triggered when removeKey was successfully called.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| key `indexed` | bytes32 | undefined |
| purpose `indexed` | uint256 | undefined |
| keyType `indexed` | uint256 | undefined |



