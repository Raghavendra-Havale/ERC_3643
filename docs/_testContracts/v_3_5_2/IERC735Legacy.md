# IERC735Legacy







*interface of the ERC735 (Claim Holder) standard as defined in the EIP.*

## Methods

### addClaim

```solidity
function addClaim(uint256 _topic, uint256 _scheme, address issuer, bytes _signature, bytes _data, string _uri) external nonpayable returns (bytes32 claimRequestId)
```



*Add or update a claim. Triggers Event: `ClaimRequested`, `ClaimAdded`, `ClaimChanged` Specification: Requests the ADDITION or the CHANGE of a claim from an issuer. Claims can requested to be added by anybody, including the claim holder itself (self issued). _signature is a signed message of the following structure: `keccak256(abi.encode(address identityHolder_address, uint256 topic, bytes data))`. Claim IDs are generated using `keccak256(abi.encode(address issuer_address + uint256 topic))`. This COULD implement an approval process for pending claims, or add them right away. MUST return a claimRequestId (use claim ID) that COULD be sent to the approve function.*

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



## Events

### ClaimAdded

```solidity
event ClaimAdded(bytes32 indexed claimId, uint256 indexed topic, uint256 scheme, address indexed issuer, bytes signature, bytes data, string uri)
```



*Emitted when a claim was added. Specification: MUST be triggered when a claim was successfully added.*

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



*Emitted when a claim was changed. Specification: MUST be triggered when changeClaim was successfully called.*

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



*Emitted when a claim was removed. Specification: MUST be triggered when removeClaim was successfully called.*

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

### ClaimRequested

```solidity
event ClaimRequested(uint256 indexed claimRequestId, uint256 indexed topic, uint256 scheme, address indexed issuer, bytes signature, bytes data, string uri)
```



*Emitted when a claim request was performed. Specification: Is not clear*

#### Parameters

| Name | Type | Description |
|---|---|---|
| claimRequestId `indexed` | uint256 | undefined |
| topic `indexed` | uint256 | undefined |
| scheme  | uint256 | undefined |
| issuer `indexed` | address | undefined |
| signature  | bytes | undefined |
| data  | bytes | undefined |
| uri  | string | undefined |



