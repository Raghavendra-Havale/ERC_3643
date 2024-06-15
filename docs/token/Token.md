# Token









## Methods

### addAgent

```solidity
function addAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### allowance

```solidity
function allowance(address _owner, address _spender) external view returns (uint256)
```



*See {IERC20-allowance}.*

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



*See {IERC20-approve}.*

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



*See {IERC20-balanceOf}.*

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



*See {IToken-batchBurn}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | undefined |
| _amounts | uint256[] | undefined |

### batchForcedTransfer

```solidity
function batchForcedTransfer(address[] _fromList, address[] _toList, uint256[] _amounts) external nonpayable
```



*See {IToken-batchForcedTransfer}.*

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



*See {IToken-batchFreezePartialTokens}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | undefined |
| _amounts | uint256[] | undefined |

### batchMint

```solidity
function batchMint(address[] _toList, uint256[] _amounts) external nonpayable
```



*See {IToken-batchMint}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _toList | address[] | undefined |
| _amounts | uint256[] | undefined |

### batchSetAddressFrozen

```solidity
function batchSetAddressFrozen(address[] _userAddresses, bool[] _freeze) external nonpayable
```



*See {IToken-batchSetAddressFrozen}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | undefined |
| _freeze | bool[] | undefined |

### batchTransfer

```solidity
function batchTransfer(address[] _toList, uint256[] _amounts) external nonpayable
```



*See {IToken-batchTransfer}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _toList | address[] | undefined |
| _amounts | uint256[] | undefined |

### batchUnfreezePartialTokens

```solidity
function batchUnfreezePartialTokens(address[] _userAddresses, uint256[] _amounts) external nonpayable
```



*See {IToken-batchUnfreezePartialTokens}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | undefined |
| _amounts | uint256[] | undefined |

### burn

```solidity
function burn(address _userAddress, uint256 _amount) external nonpayable
```



*See {IToken-burn}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _amount | uint256 | undefined |

### compliance

```solidity
function compliance() external view returns (contract IModularCompliance)
```



*See {IToken-compliance}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IModularCompliance | undefined |

### decimals

```solidity
function decimals() external view returns (uint8)
```



*See {IToken-decimals}.*


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



*See {IToken-forcedTransfer}.*

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



*See {IToken-freezePartialTokens}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _amount | uint256 | undefined |

### getFrozenTokens

```solidity
function getFrozenTokens(address _userAddress) external view returns (uint256)
```



*See {IToken-getFrozenTokens}.*

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
function identityRegistry() external view returns (contract IIdentityRegistry)
```



*See {IToken-identityRegistry}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IIdentityRegistry | undefined |

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



*See {IToken-isFrozen}.*

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



*See {IToken-mint}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _amount | uint256 | undefined |

### name

```solidity
function name() external view returns (string)
```



*See {IToken-name}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### onchainID

```solidity
function onchainID() external view returns (address)
```



*See {IToken-onchainID}.*


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



*See {IToken-pause}.*


### paused

```solidity
function paused() external view returns (bool)
```



*See {IToken-paused}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### recoveryAddress

```solidity
function recoveryAddress(address _lostWallet, address _newWallet, address _investorOnchainID) external nonpayable returns (bool)
```



*See {IToken-recoveryAddress}.*

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

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### setAddressFrozen

```solidity
function setAddressFrozen(address _userAddress, bool _freeze) external nonpayable
```



*See {IToken-setAddressFrozen}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _freeze | bool | undefined |

### setCompliance

```solidity
function setCompliance(address _compliance) external nonpayable
```



*See {IToken-setCompliance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |

### setIdentityRegistry

```solidity
function setIdentityRegistry(address _identityRegistry) external nonpayable
```



*See {IToken-setIdentityRegistry}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _identityRegistry | address | undefined |

### setName

```solidity
function setName(string _name) external nonpayable
```



*See {IToken-setName}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _name | string | undefined |

### setOnchainID

```solidity
function setOnchainID(address _onchainID) external nonpayable
```



*See {IToken-setOnchainID}.  if _onchainID is set at zero address it means no ONCHAINID is bound to this token*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _onchainID | address | undefined |

### setSymbol

```solidity
function setSymbol(string _symbol) external nonpayable
```



*See {IToken-setSymbol}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _symbol | string | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```



*See {IToken-symbol}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*See {IERC20-totalSupply}.*


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

### unfreezePartialTokens

```solidity
function unfreezePartialTokens(address _userAddress, uint256 _amount) external nonpayable
```



*See {IToken-unfreezePartialTokens}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | undefined |
| _amount | uint256 | undefined |

### unpause

```solidity
function unpause() external nonpayable
```



*See {IToken-unpause}.*


### version

```solidity
function version() external pure returns (string)
```



*See {IToken-version}.*


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
event RecoverySuccess(address indexed _lostWallet, address indexed _newWallet, address indexed _investorOnchainID)
```

this event is emitted when an investor successfully recovers his tokens  the event is emitted by the recoveryAddress function  `_lostWallet` is the address of the wallet that the investor lost access to  `_newWallet` is the address of the wallet that the investor provided for the recovery  `_investorOnchainID` is the address of the onchainID of the investor who asked for a recovery



#### Parameters

| Name | Type | Description |
|---|---|---|
| _lostWallet `indexed` | address | undefined |
| _newWallet `indexed` | address | undefined |
| _investorOnchainID `indexed` | address | undefined |

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
event UpdatedTokenInformation(string indexed _newName, string indexed _newSymbol, uint8 _newDecimals, string _newVersion, address indexed _newOnchainID)
```

this event is emitted when the token information is updated.  the event is emitted by the token init function and by the setTokenInformation function  `_newName` is the name of the token  `_newSymbol` is the symbol of the token  `_newDecimals` is the decimals of the token  `_newVersion` is the version of the token, current version is 3.0  `_newOnchainID` is the address of the onchainID of the token



#### Parameters

| Name | Type | Description |
|---|---|---|
| _newName `indexed` | string | undefined |
| _newSymbol `indexed` | string | undefined |
| _newDecimals  | uint8 | undefined |
| _newVersion  | string | undefined |
| _newOnchainID `indexed` | address | undefined |



