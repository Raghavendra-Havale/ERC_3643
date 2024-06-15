# OwnerManager









## Methods

### addClaimRegistryManager

```solidity
function addClaimRegistryManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### addComplianceManager

```solidity
function addComplianceManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### addComplianceSetter

```solidity
function addComplianceSetter(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### addIssuersRegistryManager

```solidity
function addIssuersRegistryManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### addOwnerAdmin

```solidity
function addOwnerAdmin(address _owner) external nonpayable
```

functions



#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### addRegistryAddressSetter

```solidity
function addRegistryAddressSetter(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### addTokenInfoManager

```solidity
function addTokenInfoManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### callAddAgentOnIdentityRegistryContract

```solidity
function callAddAgentOnIdentityRegistryContract(address _agent) external nonpayable
```



*calls the `addAgentOnIdentityRegistryContract` function on the Identity Registry contract  OwnerManager has to be set as owner on the Identity Registry smart contract to process this function  See {IIdentityRegistry-addAgentOnIdentityRegistryContract}.  Requires that msg.sender is an Admin of the OwnerManager contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### callAddAgentOnTokenContract

```solidity
function callAddAgentOnTokenContract(address _agent) external nonpayable
```



*calls the `addAgentOnTokenContract` function on the token contract  OwnerManager has to be set as owner on the token smart contract to process this function  See {IToken-addAgentOnTokenContract}.  Requires that msg.sender is an Admin of the OwnerManager contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### callAddClaimTopic

```solidity
function callAddClaimTopic(uint256 _claimTopic, contract IIdentity _onchainID) external nonpayable
```



*calls the `addClaimTopic` function on the Claim Topics Registry contract  OwnerManager has to be set as owner on the Claim Topics Registry smart contract to process this function  See {IClaimTopicsRegistry-addClaimTopic}.  Requires that `_onchainID` is set as ClaimRegistryManager on the OwnerManager contract  Requires that msg.sender is an ACTION KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimTopic | uint256 | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callAddTrustedIssuer

```solidity
function callAddTrustedIssuer(contract IClaimIssuer _trustedIssuer, uint256[] _claimTopics, contract IIdentity _onchainID) external nonpayable
```



*calls the `addTrustedIssuer` function on the Trusted Issuers Registry contract  OwnerManager has to be set as owner on the Trusted Issuers Registry smart contract to process this function  See {ITrustedIssuersRegistry-addTrustedIssuer}.  Requires that `_onchainID` is set as IssuersRegistryManager on the OwnerManager contract  Requires that msg.sender is an ACTION KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuer | contract IClaimIssuer | undefined |
| _claimTopics | uint256[] | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callComplianceFunction

```solidity
function callComplianceFunction(bytes callData, contract IIdentity _onchainID) external nonpayable
```



*calls any onlyOwner function available on the compliance contract  OwnerManager has to be set as owner on the compliance smart contract to process this function  Requires that `_onchainID` is set as ComplianceManager on the OwnerManager contract  Requires that msg.sender is an ACTION KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| callData | bytes | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callRemoveAgentOnIdentityRegistryContract

```solidity
function callRemoveAgentOnIdentityRegistryContract(address _agent) external nonpayable
```



*calls the `removeAgentOnIdentityRegistryContract` function on the Identity Registry contract  OwnerManager has to be set as owner on the Identity Registry smart contract to process this function  See {IIdentityRegistry-removeAgentOnIdentityRegistryContract}.  Requires that msg.sender is an Admin of the OwnerManager contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### callRemoveAgentOnTokenContract

```solidity
function callRemoveAgentOnTokenContract(address _agent) external nonpayable
```



*calls the `removeAgentOnTokenContract` function on the token contract  OwnerManager has to be set as owner on the token smart contract to process this function  See {IToken-removeAgentOnTokenContract}.  Requires that msg.sender is an Admin of the OwnerManager contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### callRemoveClaimTopic

```solidity
function callRemoveClaimTopic(uint256 _claimTopic, contract IIdentity _onchainID) external nonpayable
```



*calls the `removeClaimTopic` function on the Claim Topics Registry contract  OwnerManager has to be set as owner on the Claim Topics Registry smart contract to process this function  See {IClaimTopicsRegistry-removeClaimTopic}.  Requires that `_onchainID` is set as ClaimRegistryManager on the OwnerManager contract  Requires that msg.sender is an ACTION KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimTopic | uint256 | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callRemoveTrustedIssuer

```solidity
function callRemoveTrustedIssuer(contract IClaimIssuer _trustedIssuer, contract IIdentity _onchainID) external nonpayable
```



*calls the `removeTrustedIssuer` function on the Trusted Issuers Registry contract  OwnerManager has to be set as owner on the Trusted Issuers Registry smart contract to process this function  See {ITrustedIssuersRegistry-removeTrustedIssuer}.  Requires that `_onchainID` is set as IssuersRegistryManager on the OwnerManager contract  Requires that msg.sender is an ACTION KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuer | contract IClaimIssuer | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callSetClaimTopicsRegistry

```solidity
function callSetClaimTopicsRegistry(address _claimTopicsRegistry, contract IIdentity _onchainID) external nonpayable
```



*calls the `setClaimTopicsRegistry` function on the Identity Registry contract  OwnerManager has to be set as owner on the Identity Registry smart contract to process this function  See {IIdentityRegistry-setClaimTopicsRegistry}.  Requires that `_onchainID` is set as RegistryAddressSetter on the OwnerManager contract  Requires that msg.sender is an ACTION KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimTopicsRegistry | address | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callSetCompliance

```solidity
function callSetCompliance(address _compliance, contract IIdentity _onchainID) external nonpayable
```



*calls the `setCompliance` function on the token contract  OwnerManager has to be set as owner on the token smart contract to process this function  See {IToken-setCompliance}.  Requires that `_onchainID` is set as ComplianceSetter on the OwnerManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callSetIdentityRegistry

```solidity
function callSetIdentityRegistry(address _identityRegistry, contract IIdentity _onchainID) external nonpayable
```



*calls the `setIdentityRegistry` function on the token contract  OwnerManager has to be set as owner on the token smart contract to process this function  See {IToken-setIdentityRegistry}.  Requires that `_onchainID` is set as RegistryAddressSetter on the OwnerManager contract  Requires that msg.sender is an ACTION KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _identityRegistry | address | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callSetTokenName

```solidity
function callSetTokenName(string _name, contract IIdentity _onchainID) external nonpayable
```



*calls the `setName` function on the token contract  OwnerManager has to be set as owner on the token smart contract to process this function  See {IToken-setName}.  Requires that `_onchainID` is set as TokenInfoManager on the OwnerManager contract  Requires that msg.sender is an ACTION KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _name | string | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callSetTokenOnchainID

```solidity
function callSetTokenOnchainID(address _tokenOnchainID, contract IIdentity _onchainID) external nonpayable
```



*calls the `setOnchainID` function on the token contract  OwnerManager has to be set as owner on the token smart contract to process this function  See {IToken-setOnchainID}.  Requires that `_tokenOnchainID` is set as TokenInfoManager on the OwnerManager contract  Requires that msg.sender is an ACTION KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenOnchainID | address | undefined |
| _onchainID | contract IIdentity | the onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callSetTokenSymbol

```solidity
function callSetTokenSymbol(string _symbol, contract IIdentity _onchainID) external nonpayable
```



*calls the `setSymbol` function on the token contract  OwnerManager has to be set as owner on the token smart contract to process this function  See {IToken-setSymbol}.  Requires that `_onchainID` is set as TokenInfoManager on the OwnerManager contract  Requires that msg.sender is an ACTION KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _symbol | string | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callSetTrustedIssuersRegistry

```solidity
function callSetTrustedIssuersRegistry(address _trustedIssuersRegistry, contract IIdentity _onchainID) external nonpayable
```



*calls the `setTrustedIssuersRegistry` function on the Identity Registry contract  OwnerManager has to be set as owner on the Identity Registry smart contract to process this function  See {IIdentityRegistry-setTrustedIssuersRegistry}.  Requires that `_onchainID` is set as RegistryAddressSetter on the OwnerManager contract  Requires that msg.sender is an ACTION KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuersRegistry | address | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callTransferOwnershipOnClaimTopicsRegistryContract

```solidity
function callTransferOwnershipOnClaimTopicsRegistryContract(address _newOwner) external nonpayable
```



*calls the `transferOwnershipOnClaimTopicsRegistryContract` function on the Claim Topics Registry contract  OwnerManager has to be set as owner on the Claim Topics registry smart contract to process this function  See {IClaimTopicsRegistry-transferOwnershipOnClaimTopicsRegistryContract}.  Requires that msg.sender is an Admin of the OwnerManager contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newOwner | address | undefined |

### callTransferOwnershipOnComplianceContract

```solidity
function callTransferOwnershipOnComplianceContract(address _newOwner) external nonpayable
```



*calls the `transferOwnershipOnComplianceContract` function on the Compliance contract  OwnerManager has to be set as owner on the Compliance smart contract to process this function  See {ICompliance-transferOwnershipOnComplianceContract}.  Requires that msg.sender is an Admin of the OwnerManager contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newOwner | address | undefined |

### callTransferOwnershipOnIdentityRegistryContract

```solidity
function callTransferOwnershipOnIdentityRegistryContract(address _newOwner) external nonpayable
```



*calls the `transferOwnershipOnIdentityRegistryContract` function on the Identity Registry contract  OwnerManager has to be set as owner on the Identity Registry smart contract to process this function  See {IIdentityRegistry-transferOwnershipOnIdentityRegistryContract}.  Requires that msg.sender is an Admin of the OwnerManager contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newOwner | address | undefined |

### callTransferOwnershipOnIssuersRegistryContract

```solidity
function callTransferOwnershipOnIssuersRegistryContract(address _newOwner) external nonpayable
```



*calls the `transferOwnershipOnIssuersRegistryContract` function on the Trusted Issuers Registry contract  OwnerManager has to be set as owner on the Trusted Issuers registry smart contract to process this function  See {ITrustedIssuersRegistry-transferOwnershipOnIssuersRegistryContract}.  Requires that msg.sender is an Admin of the OwnerManager contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newOwner | address | undefined |

### callTransferOwnershipOnTokenContract

```solidity
function callTransferOwnershipOnTokenContract(address _newOwner) external nonpayable
```



*calls the `transferOwnershipOnTokenContract` function on the token contract  OwnerManager has to be set as owner on the token smart contract to process this function  See {IToken-transferOwnershipOnTokenContract}.  Requires that msg.sender is an Admin of the OwnerManager contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newOwner | address | undefined |

### callUpdateIssuerClaimTopics

```solidity
function callUpdateIssuerClaimTopics(contract IClaimIssuer _trustedIssuer, uint256[] _claimTopics, contract IIdentity _onchainID) external nonpayable
```



*calls the `updateIssuerClaimTopics` function on the Trusted Issuers Registry contract  OwnerManager has to be set as owner on the Trusted Issuers Registry smart contract to process this function  See {ITrustedIssuersRegistry-updateIssuerClaimTopics}.  Requires that `_onchainID` is set as IssuersRegistryManager on the OwnerManager contract  Requires that msg.sender is an ACTION KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuer | contract IClaimIssuer | undefined |
| _claimTopics | uint256[] | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### isClaimRegistryManager

```solidity
function isClaimRegistryManager(address _owner) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isComplianceManager

```solidity
function isComplianceManager(address _owner) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isComplianceSetter

```solidity
function isComplianceSetter(address _owner) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isIssuersRegistryManager

```solidity
function isIssuersRegistryManager(address _owner) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isOwnerAdmin

```solidity
function isOwnerAdmin(address _owner) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isRegistryAddressSetter

```solidity
function isRegistryAddressSetter(address _owner) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isTokenInfoManager

```solidity
function isTokenInfoManager(address _owner) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

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

### removeClaimRegistryManager

```solidity
function removeClaimRegistryManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### removeComplianceManager

```solidity
function removeComplianceManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### removeComplianceSetter

```solidity
function removeComplianceSetter(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### removeIssuersRegistryManager

```solidity
function removeIssuersRegistryManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### removeOwnerAdmin

```solidity
function removeOwnerAdmin(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### removeRegistryAddressSetter

```solidity
function removeRegistryAddressSetter(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### removeTokenInfoManager

```solidity
function removeTokenInfoManager(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### token

```solidity
function token() external view returns (contract IToken)
```



*the token that is managed by this OwnerManager Contract*


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



## Events

### ComplianceInteraction

```solidity
event ComplianceInteraction(address indexed target, bytes4 selector)
```



*Event emitted for each executed interaction with the compliance contract. For gas efficiency, only the interaction calldata selector (first 4 bytes) is included in the event. For interactions without calldata or whose calldata is shorter than 4 bytes, the selector will be `0`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| target `indexed` | address | undefined |
| selector  | bytes4 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### RoleAdded

```solidity
event RoleAdded(address indexed _owner, string _role)
```

events



#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner `indexed` | address | undefined |
| _role  | string | undefined |

### RoleRemoved

```solidity
event RoleRemoved(address indexed _owner, string _role)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner `indexed` | address | undefined |
| _role  | string | undefined |



