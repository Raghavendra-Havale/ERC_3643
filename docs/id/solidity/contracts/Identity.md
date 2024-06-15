# Identity







*Implementation of the `IERC734` &quot;KeyHolder&quot; and the `IERC735` &quot;ClaimHolder&quot; interfaces into a common Identity Contract. This implementation has a separate contract were it declares all storage, allowing for it to be used as an upgradable logic contract.*

## Methods

### addClaim

```solidity
function addClaim(uint256 _topic, uint256 _scheme, address _issuer, bytes _signature, bytes _data, string _uri) external nonpayable returns (bytes32 claimRequestId)
```

Implementation of the addClaim function from the ERC-735 standard  Require that the msg.sender has claim signer key.

*See {IERC735-addClaim}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _topic | uint256 | The type of claim |
| _scheme | uint256 | The scheme with which this claim SHOULD be verified or how it should be processed. |
| _issuer | address | The issuers identity contract address, or the address used to sign the above signature. |
| _signature | bytes | Signature which is the proof that the claim issuer issued a claim of topic for this identity. it MUST be a signed message of the following structure: keccak256(abi.encode(address identityHolder_address, uint256 _ topic, bytes data)) |
| _data | bytes | The hash of the claim data, sitting in another location, a bit-mask, call data, or actual data based on the claim scheme. |
| _uri | string | The location of the claim, this can be HTTP links, swarm hashes, IPFS hashes, and such. |

#### Returns

| Name | Type | Description |
|---|---|---|
| claimRequestId | bytes32 | Returns claimRequestId: COULD be send to the approve function, to approve or reject this claim. triggers ClaimAdded event. |

### addKey

```solidity
function addKey(bytes32 _key, uint256 _purpose, uint256 _type) external nonpayable returns (bool success)
```

implementation of the addKey function of the ERC-734 standard Adds a _key to the identity. The _purpose specifies the purpose of key. Initially we propose four purposes: 1: MANAGEMENT keys, which can manage the identity 2: ACTION keys, which perform actions in this identities name (signing, logins, transactions, etc.) 3: CLAIM signer keys, used to sign claims on other identities which need to be revokable. 4: ENCRYPTION keys, used to encrypt data e.g. hold in claims. MUST only be done by keys of purpose 1, or the identity itself. If its the identity itself, the approval process will determine its approval.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _key | bytes32 | keccak256 representation of an ethereum address |
| _purpose | uint256 | a uint256 specifying the key type, like 1 = MANAGEMENT, 2 = ACTION, 3 = CLAIM, 4 = ENCRYPTION |
| _type | uint256 | type of key used, which would be a uint256 for different key types. e.g. 1 = ECDSA, 2 = RSA, etc. |

#### Returns

| Name | Type | Description |
|---|---|---|
| success | bool | Returns TRUE if the addition was successful and FALSE if not |

### approve

```solidity
function approve(uint256 _id, bool _approve) external nonpayable returns (bool success)
```

Approves an execution.  If the sender is an ACTION key and the destination address is not the identity contract itself, then the  approval is authorized and the operation would be performed.  If the destination address is the identity itself, then the execution would be authorized and performed only  if the sender is a MANAGEMENT key.

*See {IERC734-approve}.*

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

Passes an execution instruction to the keymanager. If the sender is an ACTION key and the destination address is not the identity contract itself, then the execution is immediately approved and performed. If the destination address is the identity itself, then the execution would be performed immediately only if the sender is a MANAGEMENT key. Otherwise the execution request must be approved via the `approve` method.

*See {IERC734-execute}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _value | uint256 | undefined |
| _data | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| executionId | uint256 | to use in the approve function, to approve or reject this execution. |

### getClaim

```solidity
function getClaim(bytes32 _claimId) external view returns (uint256 topic, uint256 scheme, address issuer, bytes signature, bytes data, string uri)
```

Implementation of the getClaim function from the ERC-735 standard.

*See {IERC735-getClaim}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimId | bytes32 | The identity of the claim i.e. keccak256(abi.encode(_issuer, _topic)) |

#### Returns

| Name | Type | Description |
|---|---|---|
| topic | uint256 | Returns all the parameters of the claim for the specified _claimId (topic, scheme, signature, issuer, data, uri) . |
| scheme | uint256 | Returns all the parameters of the claim for the specified _claimId (topic, scheme, signature, issuer, data, uri) . |
| issuer | address | Returns all the parameters of the claim for the specified _claimId (topic, scheme, signature, issuer, data, uri) . |
| signature | bytes | Returns all the parameters of the claim for the specified _claimId (topic, scheme, signature, issuer, data, uri) . |
| data | bytes | Returns all the parameters of the claim for the specified _claimId (topic, scheme, signature, issuer, data, uri) . |
| uri | string | Returns all the parameters of the claim for the specified _claimId (topic, scheme, signature, issuer, data, uri) . |

### getClaimIdsByTopic

```solidity
function getClaimIdsByTopic(uint256 _topic) external view returns (bytes32[] claimIds)
```

Implementation of the getClaimIdsByTopic function from the ERC-735 standard. used to get all the claims from the specified topic

*See {IERC735-getClaimIdsByTopic}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _topic | uint256 | The identity of the claim i.e. keccak256(abi.encode(_issuer, _topic)) |

#### Returns

| Name | Type | Description |
|---|---|---|
| claimIds | bytes32[] | Returns an array of claim IDs by topic. |

### getKey

```solidity
function getKey(bytes32 _key) external view returns (uint256[] purposes, uint256 keyType, bytes32 key)
```

Implementation of the getKey function from the ERC-734 standard

*See {IERC734-getKey}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _key | bytes32 | The public key.  for non-hex and long keys, its the Keccak256 hash of the key |

#### Returns

| Name | Type | Description |
|---|---|---|
| purposes | uint256[] | Returns the full key data, if present in the identity. |
| keyType | uint256 | Returns the full key data, if present in the identity. |
| key | bytes32 | Returns the full key data, if present in the identity. |

### getKeyPurposes

```solidity
function getKeyPurposes(bytes32 _key) external view returns (uint256[] _purposes)
```

gets the purposes of a key

*See {IERC734-getKeyPurposes}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _key | bytes32 | The public key.  for non-hex and long keys, its the Keccak256 hash of the key |

#### Returns

| Name | Type | Description |
|---|---|---|
| _purposes | uint256[] | Returns the purposes of the specified key |

### getKeysByPurpose

```solidity
function getKeysByPurpose(uint256 _purpose) external view returns (bytes32[] keys)
```

gets all the keys with a specific purpose from an identity

*See {IERC734-getKeysByPurpose}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _purpose | uint256 | a uint256[] Array of the key types, like 1 = MANAGEMENT, 2 = ACTION, 3 = CLAIM, 4 = ENCRYPTION |

#### Returns

| Name | Type | Description |
|---|---|---|
| keys | bytes32[] | Returns an array of public key bytes32 hold by this identity and having the specified purpose |

### getRecoveredAddress

```solidity
function getRecoveredAddress(bytes sig, bytes32 dataHash) external pure returns (address addr)
```



*returns the address that signed the given data*

#### Parameters

| Name | Type | Description |
|---|---|---|
| sig | bytes | the signature of the data |
| dataHash | bytes32 | the data that was signed returns the address that signed dataHash and created the signature sig |

#### Returns

| Name | Type | Description |
|---|---|---|
| addr | address | undefined |

### initialize

```solidity
function initialize(address initialManagementKey) external nonpayable
```

When using this contract as an implementation for a proxy, call this initializer with a delegatecall.



#### Parameters

| Name | Type | Description |
|---|---|---|
| initialManagementKey | address | The ethereum address to be set as the management key of the ONCHAINID. |

### isClaimValid

```solidity
function isClaimValid(contract IIdentity _identity, uint256 claimTopic, bytes sig, bytes data) external view returns (bool claimValid)
```



*Checks if a claim is valid. Claims issued by the identity are self-attested claims. They do not have a built-in revocation mechanism and are considered valid as long as their signature is valid and they are still stored by the identity contract.*

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
| claimValid | bool | true if the claim is valid, false otherwise |

### keyHasPurpose

```solidity
function keyHasPurpose(bytes32 _key, uint256 _purpose) external view returns (bool result)
```

Returns true if the key has MANAGEMENT purpose or the specified purpose.

*See {IERC734-keyHasPurpose}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _key | bytes32 | undefined |
| _purpose | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| result | bool | undefined |

### removeClaim

```solidity
function removeClaim(bytes32 _claimId) external nonpayable returns (bool success)
```

Implementation of the removeClaim function from the ERC-735 standard Require that the msg.sender has management key. Can only be removed by the claim issuer, or the claim holder itself.

*See {IERC735-removeClaim}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimId | bytes32 | The identity of the claim i.e. keccak256(abi.encode(_issuer, _topic)) |

#### Returns

| Name | Type | Description |
|---|---|---|
| success | bool | Returns TRUE when the claim was removed. triggers ClaimRemoved event |

### removeKey

```solidity
function removeKey(bytes32 _key, uint256 _purpose) external nonpayable returns (bool success)
```

Remove the purpose from a key.

*See {IERC734-removeKey}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _key | bytes32 | undefined |
| _purpose | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| success | bool | undefined |

### version

```solidity
function version() external pure returns (string)
```



*Returns the string of the current version.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |



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



