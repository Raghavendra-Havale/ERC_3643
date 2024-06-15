# AgentManager









## Methods

### addAgentAdmin

```solidity
function addAgentAdmin(address _agent) external nonpayable
```



*AgentAdmin Role _agentAdmin*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### addComplianceAgent

```solidity
function addComplianceAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### addFreezer

```solidity
function addFreezer(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### addRecoveryAgent

```solidity
function addRecoveryAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### addSupplyModifier

```solidity
function addSupplyModifier(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### addTransferManager

```solidity
function addTransferManager(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### addWhiteListManager

```solidity
function addWhiteListManager(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### callBatchBurn

```solidity
function callBatchBurn(address[] _userAddresses, uint256[] _amounts, contract IIdentity _onchainID) external nonpayable
```



*calls the `batchBurn` function on the Token contract  AgentManager has to be set as agent on the token smart contract to process this function  See {IToken-batchBurn}.  Requires that `_onchainID` is set as SupplyModifier on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | undefined |
| _amounts | uint256[] | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callBatchForcedTransfer

```solidity
function callBatchForcedTransfer(address[] _fromList, address[] _toList, uint256[] _amounts, contract IIdentity _onchainID) external nonpayable
```



*calls the `batchForcedTransfer` function on the Token contract  AgentManager has to be set as agent on the token smart contract to process this function  See {IToken-batchForcedTransfer}.  Requires that `_onchainID` is set as TransferManager on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _fromList | address[] | undefined |
| _toList | address[] | undefined |
| _amounts | uint256[] | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callBatchFreezePartialTokens

```solidity
function callBatchFreezePartialTokens(address[] _userAddresses, uint256[] _amounts, contract IIdentity _onchainID) external nonpayable
```



*calls the `batchFreezePartialTokens` function on the Token contract  AgentManager has to be set as agent on the token smart contract to process this function  See {IToken-batchFreezePartialTokens}.  Requires that `_onchainID` is set as Freezer on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | undefined |
| _amounts | uint256[] | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callBatchMint

```solidity
function callBatchMint(address[] _toList, uint256[] _amounts, contract IIdentity _onchainID) external nonpayable
```



*calls the `batchMint` function on the Token contract  AgentManager has to be set as agent on the token smart contract to process this function  See {IToken-batchMint}.  Requires that `_onchainID` is set as SupplyModifier on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _toList | address[] | undefined |
| _amounts | uint256[] | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callBatchSetAddressFrozen

```solidity
function callBatchSetAddressFrozen(address[] _userAddresses, bool[] _freeze, contract IIdentity _onchainID) external nonpayable
```



*calls the `batchSetAddressFrozen` function on the Token contract  AgentManager has to be set as agent on the token smart contract to process this function  See {IToken-batchSetAddressFrozen}.  Requires that `_onchainID` is set as Freezer on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | undefined |
| _freeze | bool[] | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callBatchUnfreezePartialTokens

```solidity
function callBatchUnfreezePartialTokens(address[] _userAddresses, uint256[] _amounts, contract IIdentity _onchainID) external nonpayable
```



*calls the `batchUnfreezePartialTokens` function on the Token contract  AgentManager has to be set as agent on the token smart contract to process this function  See {IToken-batchUnfreezePartialTokens}.  Requires that `_onchainID` is set as Freezer on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | undefined |
| _amounts | uint256[] | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callBurn

```solidity
function callBurn(address _userAddress, uint256 _amount, contract IIdentity _onchainID) external nonpayable
```



*calls the `burn` function on the Token contract  AgentManager has to be set as agent on the token smart contract to process this function  See {IToken-burn}.  Requires that `_onchainID` is set as SupplyModifier on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _amount | uint256 | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callDeleteIdentity

```solidity
function callDeleteIdentity(address _userAddress, contract IIdentity _onchainID) external nonpayable
```



*calls the `deleteIdentity` function on the Identity Registry contract  AgentManager has to be set as agent on the Identity Registry smart contract to process this function  See {IIdentityRegistry-deleteIdentity}.  Requires that `_onchainID` is set as WhiteListManager on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callForcedTransfer

```solidity
function callForcedTransfer(address _from, address _to, uint256 _amount, contract IIdentity _onchainID) external nonpayable
```



*calls the `forcedTransfer` function on the Token contract  AgentManager has to be set as agent on the token smart contract to process this function  See {IToken-forcedTransfer}.  Requires that `_onchainID` is set as TransferManager on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _to | address | undefined |
| _amount | uint256 | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callFreezePartialTokens

```solidity
function callFreezePartialTokens(address _userAddress, uint256 _amount, contract IIdentity _onchainID) external nonpayable
```



*calls the `freezePartialTokens` function on the Token contract  AgentManager has to be set as agent on the token smart contract to process this function  See {IToken-freezePartialTokens}.  Requires that `_onchainID` is set as Freezer on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _amount | uint256 | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callMint

```solidity
function callMint(address _to, uint256 _amount, contract IIdentity _onchainID) external nonpayable
```



*calls the `mint` function on the Token contract  AgentManager has to be set as agent on the token smart contract to process this function  See {IToken-mint}.  Requires that `_onchainID` is set as SupplyModifier on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _amount | uint256 | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callPause

```solidity
function callPause(contract IIdentity _onchainID) external nonpayable
```



*calls the `pause` function on the Token contract  AgentManager has to be set as agent on the token smart contract to process this function  See {IToken-pause}.  Requires that `_onchainID` is set as Freezer on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callRecoveryAddress

```solidity
function callRecoveryAddress(address _lostWallet, address _newWallet, address _onchainID, contract IIdentity _managerOnchainID) external nonpayable
```



*calls the `recoveryAddress` function on the Token contract  AgentManager has to be set as agent on the token smart contract to process this function  See {IToken-recoveryAddress}.  Requires that `_managerOnchainID` is set as RecoveryAgent on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_managerOnchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _lostWallet | address | undefined |
| _newWallet | address | undefined |
| _onchainID | address | undefined |
| _managerOnchainID | contract IIdentity | the onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callRegisterIdentity

```solidity
function callRegisterIdentity(address _userAddress, contract IIdentity _onchainID, uint16 _country, contract IIdentity _managerOnchainID) external nonpayable
```



*calls the `registerIdentity` function on the Identity Registry contract  AgentManager has to be set as agent on the Identity Registry smart contract to process this function  See {IIdentityRegistry-registerIdentity}.  Requires that `ManagerOnchainID` is set as WhiteListManager on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_managerOnchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _onchainID | contract IIdentity | undefined |
| _country | uint16 | undefined |
| _managerOnchainID | contract IIdentity | the onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callSetAddressFrozen

```solidity
function callSetAddressFrozen(address _userAddress, bool _freeze, contract IIdentity _onchainID) external nonpayable
```



*calls the `setAddressFrozen` function on the Token contract  AgentManager has to be set as agent on the token smart contract to process this function  See {IToken-setAddressFrozen}.  Requires that `_onchainID` is set as Freezer on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _freeze | bool | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callUnfreezePartialTokens

```solidity
function callUnfreezePartialTokens(address _userAddress, uint256 _amount, contract IIdentity _onchainID) external nonpayable
```



*calls the `unfreezePartialTokens` function on the Token contract  AgentManager has to be set as agent on the token smart contract to process this function  See {IToken-unfreezePartialTokens}.  Requires that `_onchainID` is set as Freezer on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _amount | uint256 | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callUnpause

```solidity
function callUnpause(contract IIdentity _onchainID) external nonpayable
```



*calls the `unpause` function on the Token contract  AgentManager has to be set as agent on the token smart contract to process this function  See {IToken-unpause}.  Requires that `_onchainID` is set as Freezer on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callUpdateCountry

```solidity
function callUpdateCountry(address _userAddress, uint16 _country, contract IIdentity _onchainID) external nonpayable
```



*calls the `updateCountry` function on the Identity Registry contract  AgentManager has to be set as agent on the Identity Registry smart contract to process this function  See {IIdentityRegistry-updateCountry}.  Requires that `_onchainID` is set as WhiteListManager on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _country | uint16 | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### callUpdateIdentity

```solidity
function callUpdateIdentity(address _userAddress, contract IIdentity _identity, contract IIdentity _onchainID) external nonpayable
```



*calls the `updateIdentity` function on the Identity Registry contract  AgentManager has to be set as agent on the Identity Registry smart contract to process this function  See {IIdentityRegistry-updateIdentity}.  Requires that `_onchainID` is set as WhiteListManager on the AgentManager contract  Requires that msg.sender is a MANAGEMENT KEY on `_onchainID`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _identity | contract IIdentity | undefined |
| _onchainID | contract IIdentity | the _onchainID contract of the caller, e.g. &quot;i call this function and i am Bob&quot; |

### isAgentAdmin

```solidity
function isAgentAdmin(address _agent) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isComplianceAgent

```solidity
function isComplianceAgent(address _agent) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isFreezer

```solidity
function isFreezer(address _agent) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isRecoveryAgent

```solidity
function isRecoveryAgent(address _agent) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isSupplyModifier

```solidity
function isSupplyModifier(address _agent) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isTransferManager

```solidity
function isTransferManager(address _agent) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isWhiteListManager

```solidity
function isWhiteListManager(address _agent) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

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

### removeAgentAdmin

```solidity
function removeAgentAdmin(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### removeComplianceAgent

```solidity
function removeComplianceAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### removeFreezer

```solidity
function removeFreezer(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### removeRecoveryAgent

```solidity
function removeRecoveryAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### removeSupplyModifier

```solidity
function removeSupplyModifier(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### removeTransferManager

```solidity
function removeTransferManager(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### removeWhiteListManager

```solidity
function removeWhiteListManager(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### token

```solidity
function token() external view returns (contract IToken)
```



*the token managed by this AgentManager contract*


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
event RoleAdded(address indexed _agent, string _role)
```

events



#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent `indexed` | address | undefined |
| _role  | string | undefined |

### RoleRemoved

```solidity
event RoleRemoved(address indexed _agent, string _role)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent `indexed` | address | undefined |
| _role  | string | undefined |



