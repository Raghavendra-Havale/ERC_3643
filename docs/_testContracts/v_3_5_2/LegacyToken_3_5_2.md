# LegacyToken_3_5_2





NOTICE     The T-REX software is licensed under a proprietary license or the GPL v.3.     If you choose to receive it under the GPL v.3 license, the following applies:     T-REX is a suite of smart contracts developed by Tokeny to manage and transfer financial assets on the ethereum blockchain     Copyright (C) 2021, Tokeny sàrl.     This program is free software: you can redistribute it and/or modify     it under the terms of the GNU General Public License as published by     the Free Software Foundation, either version 3 of the License, or     (at your option) any later version.     This program is distributed in the hope that it will be useful,     but WITHOUT ANY WARRANTY; without even the implied warranty of     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the     GNU General Public License for more details.     You should have received a copy of the GNU General Public License     along with this program.  If not, see &lt;https://www.gnu.org/licenses/&gt;.



## Methods

### addAgent

```solidity
function addAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### addAgentOnTokenContract

```solidity
function addAgentOnTokenContract(address _agent) external nonpayable
```



*See {ITokenLegacy-addAgentOnTokenContract}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### allowance

```solidity
function allowance(address _owner, address _spender) external view returns (uint256)
```



*See {IERC20Legacy-allowance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |
| _spender | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### approve

```solidity
function approve(address _spender, uint256 _amount) external nonpayable returns (bool)
```



*See {IERC20Legacy-approve}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _spender | address | undefined |
| _amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### balanceOf

```solidity
function balanceOf(address _userAddress) external view returns (uint256)
```



*See {IERC20Legacy-balanceOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### batchBurn

```solidity
function batchBurn(address[] _userAddresses, uint256[] _amounts) external nonpayable
```



*See {ITokenLegacy-batchBurn}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | undefined |
| _amounts | uint256[] | undefined |

### batchForcedTransfer

```solidity
function batchForcedTransfer(address[] _fromList, address[] _toList, uint256[] _amounts) external nonpayable
```



*See {ITokenLegacy-batchForcedTransfer}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _fromList | address[] | undefined |
| _toList | address[] | undefined |
| _amounts | uint256[] | undefined |

### batchFreezePartialTokens

```solidity
function batchFreezePartialTokens(address[] _userAddresses, uint256[] _amounts) external nonpayable
```



*See {ITokenLegacy-batchFreezePartialTokens}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | undefined |
| _amounts | uint256[] | undefined |

### batchMint

```solidity
function batchMint(address[] _toList, uint256[] _amounts) external nonpayable
```



*See {ITokenLegacy-batchMint}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _toList | address[] | undefined |
| _amounts | uint256[] | undefined |

### batchSetAddressFrozen

```solidity
function batchSetAddressFrozen(address[] _userAddresses, bool[] _freeze) external nonpayable
```



*See {ITokenLegacy-batchSetAddressFrozen}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | undefined |
| _freeze | bool[] | undefined |

### batchTransfer

```solidity
function batchTransfer(address[] _toList, uint256[] _amounts) external nonpayable
```



*See {ITokenLegacy-batchTransfer}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _toList | address[] | undefined |
| _amounts | uint256[] | undefined |

### batchUnfreezePartialTokens

```solidity
function batchUnfreezePartialTokens(address[] _userAddresses, uint256[] _amounts) external nonpayable
```



*See {ITokenLegacy-batchUnfreezePartialTokens}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | undefined |
| _amounts | uint256[] | undefined |

### burn

```solidity
function burn(address _userAddress, uint256 _amount) external nonpayable
```



*See {ITokenLegacy-burn}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _amount | uint256 | undefined |

### compliance

```solidity
function compliance() external view returns (contract IComplianceLegacy)
```



*See {ITokenLegacy-compliance}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IComplianceLegacy | undefined |

### decimals

```solidity
function decimals() external view returns (uint8)
```



*See {ITokenLegacy-decimals}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### decreaseAllowance

```solidity
function decreaseAllowance(address _spender, uint256 _subtractedValue) external nonpayable returns (bool)
```



*See {ERC20-decreaseAllowance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _spender | address | undefined |
| _subtractedValue | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### forcedTransfer

```solidity
function forcedTransfer(address _from, address _to, uint256 _amount) external nonpayable returns (bool)
```



*See {ITokenLegacy-forcedTransfer}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _to | address | undefined |
| _amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### freezePartialTokens

```solidity
function freezePartialTokens(address _userAddress, uint256 _amount) external nonpayable
```



*See {ITokenLegacy-freezePartialTokens}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _amount | uint256 | undefined |

### getFrozenTokens

```solidity
function getFrozenTokens(address _userAddress) external view returns (uint256)
```



*See {ITokenLegacy-getFrozenTokens}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### identityRegistry

```solidity
function identityRegistry() external view returns (contract IIdentityRegistryLegacy)
```



*See {ITokenLegacy-identityRegistry}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IIdentityRegistryLegacy | undefined |

### increaseAllowance

```solidity
function increaseAllowance(address _spender, uint256 _addedValue) external nonpayable returns (bool)
```



*See {ERC20-increaseAllowance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _spender | address | undefined |
| _addedValue | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### init

```solidity
function init(address _identityRegistry, address _compliance, string _name, string _symbol, uint8 _decimals, address _onchainID) external nonpayable
```



*the constructor initiates the token contract  msg.sender is set automatically as the owner of the smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _identityRegistry | address | the address of the Identity registry linked to the token |
| _compliance | address | the address of the compliance contract linked to the token |
| _name | string | the name of the token |
| _symbol | string | the symbol of the token |
| _decimals | uint8 | the decimals of the token |
| _onchainID | address | the address of the onchainID of the token  emits an `UpdatedTokenInformation` event  emits an `IdentityRegistryAdded` event  emits a `ComplianceAdded` event |

### isAgent

```solidity
function isAgent(address _agent) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isFrozen

```solidity
function isFrozen(address _userAddress) external view returns (bool)
```



*See {ITokenLegacy-isFrozen}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### mint

```solidity
function mint(address _to, uint256 _amount) external nonpayable
```



*See {ITokenLegacy-mint}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _amount | uint256 | undefined |

### name

```solidity
function name() external view returns (string)
```



*See {ITokenLegacy-name}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### onchainID

```solidity
function onchainID() external view returns (address)
```



*See {ITokenLegacy-onchainID}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### pause

```solidity
function pause() external nonpayable
```



*See {ITokenLegacy-pause}.*


### paused

```solidity
function paused() external view returns (bool)
```



*See {ITokenLegacy-paused}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### recoveryAddress

```solidity
function recoveryAddress(address _lostWallet, address _newWallet, address _investorOnchainID) external nonpayable returns (bool)
```



*See {ITokenLegacy-recoveryAddress}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _lostWallet | address | undefined |
| _newWallet | address | undefined |
| _investorOnchainID | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### removeAgent

```solidity
function removeAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### removeAgentOnTokenContract

```solidity
function removeAgentOnTokenContract(address _agent) external nonpayable
```



*See {ITokenLegacy-removeAgentOnTokenContract}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### setAddressFrozen

```solidity
function setAddressFrozen(address _userAddress, bool _freeze) external nonpayable
```



*See {ITokenLegacy-setAddressFrozen}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _freeze | bool | undefined |

### setCompliance

```solidity
function setCompliance(address _compliance) external nonpayable
```



*See {ITokenLegacy-setCompliance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |

### setIdentityRegistry

```solidity
function setIdentityRegistry(address _identityRegistry) external nonpayable
```



*See {ITokenLegacy-setIdentityRegistry}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _identityRegistry | address | undefined |

### setName

```solidity
function setName(string _name) external nonpayable
```



*See {ITokenLegacy-setName}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _name | string | undefined |

### setOnchainID

```solidity
function setOnchainID(address _onchainID) external nonpayable
```



*See {ITokenLegacy-setOnchainID}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _onchainID | address | undefined |

### setSymbol

```solidity
function setSymbol(string _symbol) external nonpayable
```



*See {ITokenLegacy-setSymbol}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _symbol | string | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```



*See {ITokenLegacy-symbol}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*See {IERC20Legacy-totalSupply}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transfer

```solidity
function transfer(address _to, uint256 _amount) external nonpayable returns (bool)
```

ERC-20 overridden function that include logic to check for trade validity.  Require that the msg.sender and to addresses are not frozen.  Require that the value should not exceed available balance .  Require that the to address is a verified address



#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | The address of the receiver |
| _amount | uint256 | The number of tokens to transfer |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | `true` if successful and revert if unsuccessful |

### transferFrom

```solidity
function transferFrom(address _from, address _to, uint256 _amount) external nonpayable returns (bool)
```

ERC-20 overridden function that include logic to check for trade validity.  Require that the from and to addresses are not frozen.  Require that the value should not exceed available balance .  Require that the to address is a verified address



#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | The address of the sender |
| _to | address | The address of the receiver |
| _amount | uint256 | The number of tokens to transfer |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | `true` if successful and revert if unsuccessful |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### transferOwnershipOnTokenContract

```solidity
function transferOwnershipOnTokenContract(address _newOwner) external nonpayable
```



*See {ITokenLegacy-transferOwnershipOnTokenContract}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newOwner | address | undefined |

### unfreezePartialTokens

```solidity
function unfreezePartialTokens(address _userAddress, uint256 _amount) external nonpayable
```



*See {ITokenLegacy-unfreezePartialTokens}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _amount | uint256 | undefined |

### unpause

```solidity
function unpause() external nonpayable
```



*See {ITokenLegacy-unpause}.*


### version

```solidity
function version() external view returns (string)
```



*See {ITokenLegacy-version}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |



## Events

### AddressFrozen

```solidity
event AddressFrozen(address indexed _userAddress, bool indexed _isFrozen, address indexed _owner)
```

this event is emitted when the wallet of an investor is frozen or unfrozen  the event is emitted by setAddressFrozen and batchSetAddressFrozen functions  `_userAddress` is the wallet of the investor that is concerned by the freezing status  `_isFrozen` is the freezing status of the wallet  if `_isFrozen` equals `true` the wallet is frozen after emission of the event  if `_isFrozen` equals `false` the wallet is unfrozen after emission of the event  `_owner` is the address of the agent who called the function to freeze the wallet



#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress `indexed` | address | undefined |
| _isFrozen `indexed` | bool | undefined |
| _owner `indexed` | address | undefined |

### AgentAdded

```solidity
event AgentAdded(address indexed _agent)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent `indexed` | address | undefined |

### AgentRemoved

```solidity
event AgentRemoved(address indexed _agent)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent `indexed` | address | undefined |

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 value)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| spender `indexed` | address | undefined |
| value  | uint256 | undefined |

### ComplianceAdded

```solidity
event ComplianceAdded(address indexed _compliance)
```

this event is emitted when the Compliance has been set for the token  the event is emitted by the token constructor and by the setCompliance function  `_compliance` is the address of the Compliance contract of the token



#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance `indexed` | address | undefined |

### IdentityRegistryAdded

```solidity
event IdentityRegistryAdded(address indexed _identityRegistry)
```

this event is emitted when the IdentityRegistry has been set for the token  the event is emitted by the token constructor and by the setIdentityRegistry function  `_identityRegistry` is the address of the Identity Registry of the token



#### Parameters

| Name | Type | Description |
|---|---|---|
| _identityRegistry `indexed` | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### Paused

```solidity
event Paused(address _userAddress)
```

this event is emitted when the token is paused  the event is emitted by the pause function  `_userAddress` is the address of the wallet that called the pause function



#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress  | address | undefined |

### RecoverySuccess

```solidity
event RecoverySuccess(address _lostWallet, address _newWallet, address _investorOnchainID)
```

this event is emitted when an investor successfully recovers his tokens  the event is emitted by the recoveryAddress function  `_lostWallet` is the address of the wallet that the investor lost access to  `_newWallet` is the address of the wallet that the investor provided for the recovery  `_investorOnchainID` is the address of the onchainID of the investor who asked for a recovery



#### Parameters

| Name | Type | Description |
|---|---|---|
| _lostWallet  | address | undefined |
| _newWallet  | address | undefined |
| _investorOnchainID  | address | undefined |

### TokensFrozen

```solidity
event TokensFrozen(address indexed _userAddress, uint256 _amount)
```

this event is emitted when a certain amount of tokens is frozen on a wallet  the event is emitted by freezePartialTokens and batchFreezePartialTokens functions  `_userAddress` is the wallet of the investor that is concerned by the freezing status  `_amount` is the amount of tokens that are frozen



#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress `indexed` | address | undefined |
| _amount  | uint256 | undefined |

### TokensUnfrozen

```solidity
event TokensUnfrozen(address indexed _userAddress, uint256 _amount)
```

this event is emitted when a certain amount of tokens is unfrozen on a wallet  the event is emitted by unfreezePartialTokens and batchUnfreezePartialTokens functions  `_userAddress` is the wallet of the investor that is concerned by the freezing status  `_amount` is the amount of tokens that are unfrozen



#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress `indexed` | address | undefined |
| _amount  | uint256 | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 value)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| value  | uint256 | undefined |

### Unpaused

```solidity
event Unpaused(address _userAddress)
```

this event is emitted when the token is unpaused  the event is emitted by the unpause function  `_userAddress` is the address of the wallet that called the unpause function



#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress  | address | undefined |

### UpdatedTokenInformation

```solidity
event UpdatedTokenInformation(string _newName, string _newSymbol, uint8 _newDecimals, string _newVersion, address _newOnchainID)
```

this event is emitted when the token information is updated.  the event is emitted by the token constructor and by the setTokenInformation function  `_newName` is the name of the token  `_newSymbol` is the symbol of the token  `_newDecimals` is the decimals of the token  `_newVersion` is the version of the token, current version is 3.0  `_newOnchainID` is the address of the onchainID of the token



#### Parameters

| Name | Type | Description |
|---|---|---|
| _newName  | string | undefined |
| _newSymbol  | string | undefined |
| _newDecimals  | uint8 | undefined |
| _newVersion  | string | undefined |
| _newOnchainID  | address | undefined |



