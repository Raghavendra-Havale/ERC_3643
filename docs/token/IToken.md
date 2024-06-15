# IToken







*interface*

## Methods

### allowance

```solidity
function allowance(address owner, address spender) external view returns (uint256)
```



*Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| spender | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### approve

```solidity
function approve(address spender, uint256 amount) external nonpayable returns (bool)
```



*Sets `amount` as the allowance of `spender` over the caller&#39;s tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender&#39;s allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### balanceOf

```solidity
function balanceOf(address account) external view returns (uint256)
```



*Returns the amount of tokens owned by `account`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### batchBurn

```solidity
function batchBurn(address[] _userAddresses, uint256[] _amounts) external nonpayable
```



*function allowing to burn tokens in batch  Require that the `_userAddresses` addresses are all verified addresses  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_userAddresses.length` IS TOO HIGH,  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN &quot;OUT OF GAS&quot; TRANSACTION*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | The addresses of the wallets concerned by the burn |
| _amounts | uint256[] | The number of tokens to burn from the corresponding wallets  This function can only be called by a wallet set as agent of the token  emits _userAddresses.length `Transfer` events |

### batchForcedTransfer

```solidity
function batchForcedTransfer(address[] _fromList, address[] _toList, uint256[] _amounts) external nonpayable
```



*function allowing to issue forced transfers in batch  Require that `_amounts[i]` should not exceed available balance of `_fromList[i]`.  Require that the `_toList` addresses are all verified addresses  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_fromList.length` IS TOO HIGH,  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN &quot;OUT OF GAS&quot; TRANSACTION*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _fromList | address[] | The addresses of the senders |
| _toList | address[] | The addresses of the receivers |
| _amounts | uint256[] | The number of tokens to transfer to the corresponding receiver  This function can only be called by a wallet set as agent of the token  emits `TokensUnfrozen` events if `_amounts[i]` is higher than the free balance of `_fromList[i]`  emits _fromList.length `Transfer` events |

### batchFreezePartialTokens

```solidity
function batchFreezePartialTokens(address[] _userAddresses, uint256[] _amounts) external nonpayable
```



*function allowing to freeze tokens partially in batch  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_userAddresses.length` IS TOO HIGH,  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN &quot;OUT OF GAS&quot; TRANSACTION*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | The addresses on which tokens need to be frozen |
| _amounts | uint256[] | the amount of tokens to freeze on the corresponding address  This function can only be called by a wallet set as agent of the token  emits _userAddresses.length `TokensFrozen` events |

### batchMint

```solidity
function batchMint(address[] _toList, uint256[] _amounts) external nonpayable
```



*function allowing to mint tokens in batch  Require that the `_toList` addresses are all verified addresses  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_toList.length` IS TOO HIGH,  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN &quot;OUT OF GAS&quot; TRANSACTION*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _toList | address[] | The addresses of the receivers |
| _amounts | uint256[] | The number of tokens to mint to the corresponding receiver  This function can only be called by a wallet set as agent of the token  emits _toList.length `Transfer` events |

### batchSetAddressFrozen

```solidity
function batchSetAddressFrozen(address[] _userAddresses, bool[] _freeze) external nonpayable
```



*function allowing to set frozen addresses in batch  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_userAddresses.length` IS TOO HIGH,  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN &quot;OUT OF GAS&quot; TRANSACTION*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | The addresses for which to update frozen status |
| _freeze | bool[] | Frozen status of the corresponding address  This function can only be called by a wallet set as agent of the token  emits _userAddresses.length `AddressFrozen` events |

### batchTransfer

```solidity
function batchTransfer(address[] _toList, uint256[] _amounts) external nonpayable
```



*function allowing to issue transfers in batch  Require that the msg.sender and `to` addresses are not frozen.  Require that the total value should not exceed available balance.  Require that the `to` addresses are all verified addresses,  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_toList.length` IS TOO HIGH,  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN &quot;OUT OF GAS&quot; TRANSACTION*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _toList | address[] | The addresses of the receivers |
| _amounts | uint256[] | The number of tokens to transfer to the corresponding receiver  emits _toList.length `Transfer` events |

### batchUnfreezePartialTokens

```solidity
function batchUnfreezePartialTokens(address[] _userAddresses, uint256[] _amounts) external nonpayable
```



*function allowing to unfreeze tokens partially in batch  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_userAddresses.length` IS TOO HIGH,  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN &quot;OUT OF GAS&quot; TRANSACTION*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | The addresses on which tokens need to be unfrozen |
| _amounts | uint256[] | the amount of tokens to unfreeze on the corresponding address  This function can only be called by a wallet set as agent of the token  emits _userAddresses.length `TokensUnfrozen` events |

### burn

```solidity
function burn(address _userAddress, uint256 _amount) external nonpayable
```



*burn tokens on a wallet  In case the `account` address has not enough free tokens (unfrozen tokens)  but has a total balance higher or equal to the `value` amount  the amount of frozen tokens is reduced in order to have enough free tokens  to proceed the burn, in such a case, the remaining balance on the `account`  is 100% composed of frozen tokens post-transaction.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | Address to burn the tokens from. |
| _amount | uint256 | Amount of tokens to burn.  This function can only be called by a wallet set as agent of the token  emits a `TokensUnfrozen` event if `_amount` is higher than the free balance of `_userAddress`  emits a `Transfer` event |

### compliance

```solidity
function compliance() external view returns (contract IModularCompliance)
```



*Returns the Compliance contract linked to the token*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IModularCompliance | undefined |

### decimals

```solidity
function decimals() external view returns (uint8)
```



*Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 1 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including balanceOf() and transfer().*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### forcedTransfer

```solidity
function forcedTransfer(address _from, address _to, uint256 _amount) external nonpayable returns (bool)
```



*force a transfer of tokens between 2 whitelisted wallets  In case the `from` address has not enough free tokens (unfrozen tokens)  but has a total balance higher or equal to the `amount`  the amount of frozen tokens is reduced in order to have enough free tokens  to proceed the transfer, in such a case, the remaining balance on the `from`  account is 100% composed of frozen tokens post-transfer.  Require that the `to` address is a verified address,*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | The address of the sender |
| _to | address | The address of the receiver |
| _amount | uint256 | The number of tokens to transfer |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | `true` if successful and revert if unsuccessful  This function can only be called by a wallet set as agent of the token  emits a `TokensUnfrozen` event if `_amount` is higher than the free balance of `_from`  emits a `Transfer` event |

### freezePartialTokens

```solidity
function freezePartialTokens(address _userAddress, uint256 _amount) external nonpayable
```



*freezes token amount specified for given address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The address for which to update frozen tokens |
| _amount | uint256 | Amount of Tokens to be frozen  This function can only be called by a wallet set as agent of the token  emits a `TokensFrozen` event |

### getFrozenTokens

```solidity
function getFrozenTokens(address _userAddress) external view returns (uint256)
```



*Returns the amount of tokens that are partially frozen on a wallet  the amount of frozen tokens is always &lt;= to the total balance of the wallet*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | the address of the wallet on which getFrozenTokens is called |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### identityRegistry

```solidity
function identityRegistry() external view returns (contract IIdentityRegistry)
```



*Returns the Identity Registry linked to the token*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IIdentityRegistry | undefined |

### isFrozen

```solidity
function isFrozen(address _userAddress) external view returns (bool)
```



*Returns the freezing status of a wallet  if isFrozen returns `true` the wallet is frozen  if isFrozen returns `false` the wallet is not frozen  isFrozen returning `true` doesn&#39;t mean that the balance is free, tokens could be blocked by  a partial freeze or the whole token could be blocked by pause*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | the address of the wallet on which isFrozen is called |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### mint

```solidity
function mint(address _to, uint256 _amount) external nonpayable
```



*mint tokens on a wallet  Improved version of default mint method. Tokens can be minted  to an address if only it is a verified address as per the security token.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | Address to mint the tokens to. |
| _amount | uint256 | Amount of tokens to mint.  This function can only be called by a wallet set as agent of the token  emits a `Transfer` event |

### name

```solidity
function name() external view returns (string)
```



*Returns the name of the token.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### onchainID

```solidity
function onchainID() external view returns (address)
```



*Returns the address of the onchainID of the token. the onchainID of the token gives all the information available about the token and is managed by the token issuer or his agent.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### pause

```solidity
function pause() external nonpayable
```



*pauses the token contract, when contract is paused investors cannot transfer tokens anymore  This function can only be called by a wallet set as agent of the token  emits a `Paused` event*


### paused

```solidity
function paused() external view returns (bool)
```



*Returns true if the contract is paused, and false otherwise.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### recoveryAddress

```solidity
function recoveryAddress(address _lostWallet, address _newWallet, address _investorOnchainID) external nonpayable returns (bool)
```



*recovery function used to force transfer tokens from a  lost wallet to a new wallet for an investor.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _lostWallet | address | the wallet that the investor lost |
| _newWallet | address | the newly provided wallet on which tokens have to be transferred |
| _investorOnchainID | address | the onchainID of the investor asking for a recovery  This function can only be called by a wallet set as agent of the token  emits a `TokensUnfrozen` event if there is some frozen tokens on the lost wallet if the recovery process is successful  emits a `Transfer` event if the recovery process is successful  emits a `RecoverySuccess` event if the recovery process is successful  emits a `RecoveryFails` event if the recovery process fails |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### setAddressFrozen

```solidity
function setAddressFrozen(address _userAddress, bool _freeze) external nonpayable
```



*sets an address frozen status for this token.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The address for which to update frozen status |
| _freeze | bool | Frozen status of the address  This function can only be called by a wallet set as agent of the token  emits an `AddressFrozen` event |

### setCompliance

```solidity
function setCompliance(address _compliance) external nonpayable
```



*sets the compliance contract of the token*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | the address of the compliance contract to set  Only the owner of the token smart contract can call this function  calls bindToken on the compliance contract  emits a `ComplianceAdded` event |

### setIdentityRegistry

```solidity
function setIdentityRegistry(address _identityRegistry) external nonpayable
```



*sets the Identity Registry for the token*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _identityRegistry | address | the address of the Identity Registry to set  Only the owner of the token smart contract can call this function  emits an `IdentityRegistryAdded` event |

### setName

```solidity
function setName(string _name) external nonpayable
```



*sets the token name*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _name | string | the name of token to set  Only the owner of the token smart contract can call this function  emits a `UpdatedTokenInformation` event |

### setOnchainID

```solidity
function setOnchainID(address _onchainID) external nonpayable
```



*sets the onchain ID of the token*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _onchainID | address | the address of the onchain ID to set  Only the owner of the token smart contract can call this function  emits a `UpdatedTokenInformation` event |

### setSymbol

```solidity
function setSymbol(string _symbol) external nonpayable
```



*sets the token symbol*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _symbol | string | the token symbol to set  Only the owner of the token smart contract can call this function  emits a `UpdatedTokenInformation` event |

### symbol

```solidity
function symbol() external view returns (string)
```



*Returns the symbol of the token, usually a shorter version of the name.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*Returns the amount of tokens in existence.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transfer

```solidity
function transfer(address to, uint256 amount) external nonpayable returns (bool)
```



*Moves `amount` tokens from the caller&#39;s account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 amount) external nonpayable returns (bool)
```



*Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller&#39;s allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### unfreezePartialTokens

```solidity
function unfreezePartialTokens(address _userAddress, uint256 _amount) external nonpayable
```



*unfreezes token amount specified for given address*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The address for which to update frozen tokens |
| _amount | uint256 | Amount of Tokens to be unfrozen  This function can only be called by a wallet set as agent of the token  emits a `TokensUnfrozen` event |

### unpause

```solidity
function unpause() external nonpayable
```



*unpauses the token contract, when contract is unpaused investors can transfer tokens  if their wallet is not blocked &amp; if the amount to transfer is &lt;= to the amount of free tokens  This function can only be called by a wallet set as agent of the token  emits an `Unpaused` event*


### version

```solidity
function version() external view returns (string)
```



*Returns the TREX version of the token. current version is 3.0.0*


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



