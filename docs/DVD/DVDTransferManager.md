# DVDTransferManager









## Methods

### calculateFee

```solidity
function calculateFee(bytes32 _transferID) external view returns (struct DVDTransferManager.TxFees)
```



*calculates the fees to apply to a specific transfer depending  on the fees applied to the parity used in the transfer*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _transferID | bytes32 | the DVD transfer identifier as calculated through the  `calculateTransferID` function for the transfer to calculate fees on  requires `_transferID` to exist (DVD transfer has to be initiated)  returns the fees to apply on each leg of the transfer in the form of a `TxFees` struct |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | DVDTransferManager.TxFees | undefined |

### calculateParity

```solidity
function calculateParity(address _token1, address _token2) external pure returns (bytes32)
```



*calculates the parity byte signature*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token1 | address | the address of the base token |
| _token2 | address | the address of the counterpart token  return the byte signature of the parity |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### calculateTransferID

```solidity
function calculateTransferID(uint256 _nonce, address _maker, address _token1, uint256 _token1Amount, address _taker, address _token2, uint256 _token2Amount) external pure returns (bytes32)
```



*calculates the transferID depending on DVD transfer parameters*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _nonce | uint256 | the nonce of the transfer on the smart contract |
| _maker | address | the address of the DVD transfer maker (initiator of the transfer) |
| _token1 | address | the address of the token that the maker is providing |
| _token1Amount | uint256 | the amount of tokens `_token1` provided by the maker |
| _taker | address | the address of the DVD transfer taker (executor of the transfer) |
| _token2 | address | the address of the token that the taker is providing |
| _token2Amount | uint256 | the amount of tokens `_token2` provided by the taker  return the identifier of the DVD transfer as a byte signature |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### cancelDVDTransfer

```solidity
function cancelDVDTransfer(bytes32 _transferID) external nonpayable
```



*delete a pending DVD transfer that was previously initiated  through the `initiateDVDTransfer` function from the pool*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _transferID | bytes32 | the DVD transfer identifier as calculated through  the `calculateTransferID` function for the initiated DVD transfer to delete  requires `_transferID` to exist (DVD transfer has to be initiated)  requires that `msg.sender` is the taker or the maker or the `DVDTransferManager` contract  owner or the TREX agent in case a TREX token is involved in the transfer  once the `cancelDVDTransfer` is executed the `_transferID` is removed from the pending `_transferID` pool  emits a `DVDTransferCancelled` event |

### fee

```solidity
function fee(bytes32) external view returns (uint256 token1Fee, uint256 token2Fee, uint256 feeBase, address fee1Wallet, address fee2Wallet)
```

variables



#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| token1Fee | uint256 | undefined |
| token2Fee | uint256 | undefined |
| feeBase | uint256 | undefined |
| fee1Wallet | address | undefined |
| fee2Wallet | address | undefined |

### initiateDVDTransfer

```solidity
function initiateDVDTransfer(address _token1, uint256 _token1Amount, address _counterpart, address _token2, uint256 _token2Amount) external nonpayable
```



*initiates a DVD transfer between `msg.sender` &amp; `_counterpart`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token1 | address | the address of the token (ERC20 or TREX) provided by `msg.sender` |
| _token1Amount | uint256 | the amount of `_token1` that `msg.sender` will send to `_counterpart` at DVD execution time |
| _counterpart | address | the address of the counterpart, which will receive `_token1Amount` of `_token1` in exchange for  `_token2Amount` of `_token2` |
| _token2 | address | the address of the token (ERC20 or TREX) provided by `_counterpart` |
| _token2Amount | uint256 | the amount of `_token2` that `_counterpart` will send to `msg.sender` at DVD execution time  requires `msg.sender` to have enough `_token1` tokens to process the DVD transfer  requires `DVDTransferManager` contract to have the necessary allowance to process the DVD transfer on `msg.sender`  requires `_counterpart` to not be the 0 address  requires `_token1` &amp; `_token2` to be valid token addresses  emits a `DVDTransferInitiated` event |

### isTREX

```solidity
function isTREX(address _token) external view returns (bool)
```



*check if `_token` corresponds to a functional TREX token (with identity registry initiated)*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | the address token to check  the function will try to call `identityRegistry()` on  the address, which is a getter specific to TREX tokens  if the call pass and returns an address it means that  the token is a TREX, otherwise it&#39;s not a TREX  return `true` if the token is a TREX, `false` otherwise |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isTREXAgent

```solidity
function isTREXAgent(address _token, address _user) external view returns (bool)
```



*check if `_user` is a TREX agent of `_token`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | the address token to check |
| _user | address | the wallet address  if `_token` is a TREX token this function will check if `_user` is registered as an agent on it  return `true` if `_user` is agent of `_token`, return `false` otherwise |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isTREXOwner

```solidity
function isTREXOwner(address _token, address _user) external view returns (bool)
```



*check if `_user` is a TREX owner of `_token`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | the address token to check |
| _user | address | the wallet address  if `_token` is a TREX token this function will check if `_user` is registered as an owner on it  return `true` if `_user` is owner of `_token`, return `false` otherwise |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### modifyFee

```solidity
function modifyFee(address _token1, address _token2, uint256 _fee1, uint256 _fee2, uint256 _feeBase, address _fee1Wallet, address _fee2Wallet) external nonpayable
```



*modify the fees applied to a parity of tokens (tokens can be TREX or ERC20)*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token1 | address | the address of the base token for the parity `_token1`/`_token2` |
| _token2 | address | the address of the counterpart token for the parity `_token1`/`_token2` |
| _fee1 | uint256 | the fee to apply on `_token1` leg of the DVD transfer per 10^`_feeBase` |
| _fee2 | uint256 | the fee to apply on `_token2` leg of the DVD transfer per 10^`_feeBase` |
| _feeBase | uint256 | the precision of the fee setting, e.g.  if `_feeBase` == 2 then `_fee1` and `_fee2` are in % (fee/10^`_feeBase`) |
| _fee1Wallet | address | the wallet address receiving fees applied on `_token1` |
| _fee2Wallet | address | the wallet address receiving fees applied on `_token2`  `_token1` and `_token2` need to be ERC20 or TREX tokens addresses, otherwise the transaction will fail  `msg.sender` has to be owner of the DVD contract or the owner of the TREX token involved in the parity (if any)  requires fees to be lower than 100%  requires `_feeBase` to be higher or equal to 2 (precision 10^2)  requires `_feeBase` to be lower or equal to 5 (precision 10^5) to avoid overflows  requires `_fee1Wallet` &amp; `_fee2Wallet` to be non empty addresses if `_fee1` &amp; `_fee2` are respectively set  note that if fees are not set for a parity the default fee is basically 0%  emits a `FeeModified` event |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### takeDVDTransfer

```solidity
function takeDVDTransfer(bytes32 _transferID) external nonpayable
```



*execute a DVD transfer that was previously initiated through the `initiateDVDTransfer` function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _transferID | bytes32 | the DVD transfer identifier as calculated through  the `calculateTransferID` function for the initiated DVD transfer to execute  requires `_transferID` to exist (DVD transfer has to be initiated)  requires that taker (counterpart sending token2) has enough tokens in balance to process the DVD transfer  requires that `DVDTransferManager` contract has enough allowance to process the `token2` leg of the DVD transfer  requires that `msg.sender` is the taker OR the TREX agent in case a  TREX token is involved in the transfer (in case of conditional transfer  the agent can call the function when the transfer has been approved)  if fees apply on one side or both sides of the transfer the fees will be sent,  at transaction time, to the fees wallet previously set  in case fees apply the counterparts will receive less than the amounts  included in the DVD transfer as part of the transfer is redirected to the  fee wallet at transfer execution time  if one or both legs of the transfer are TREX, then all the relevant  checks apply on the transaction (compliance + identity checks)  and the transaction WILL FAIL if the TREX conditions of transfer are  not respected, please refer to {Token-transfer} and {Token-transferFrom} to  know more about TREX conditions for transfers  once the DVD transfer is executed the `_transferID` is removed from the pending `_transferID` pool  emits a `DVDTransferExecuted` event |

### token1ToDeliver

```solidity
function token1ToDeliver(bytes32) external view returns (address counterpart, address token, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| counterpart | address | undefined |
| token | address | undefined |
| amount | uint256 | undefined |

### token2ToDeliver

```solidity
function token2ToDeliver(bytes32) external view returns (address counterpart, address token, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| counterpart | address | undefined |
| token | address | undefined |
| amount | uint256 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### txNonce

```solidity
function txNonce() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |



## Events

### DVDTransferCancelled

```solidity
event DVDTransferCancelled(bytes32 indexed transferID)
```



*Emitted when a DVD transfer is cancelled this event is emitted by the `cancelDVDTransfer` function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| transferID `indexed` | bytes32 | undefined |

### DVDTransferExecuted

```solidity
event DVDTransferExecuted(bytes32 indexed transferID)
```



*Emitted when a DVD transfer is validated by `taker` and executed either by `taker` either by the agent of the TREX token if the TREX token is subject to conditional transfers this event is emitted by the `takeDVDTransfer` function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| transferID `indexed` | bytes32 | undefined |

### DVDTransferInitiated

```solidity
event DVDTransferInitiated(bytes32 indexed transferID, address maker, address indexed token1, uint256 token1Amount, address taker, address indexed token2, uint256 token2Amount)
```



*Emitted when a DVD transfer is initiated by `maker` to swap `token1Amount` tokens `token1` (TREX or not) for `token2Amount` tokens `token2` with `taker` this event is emitted by the `initiateDVDTransfer` function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| transferID `indexed` | bytes32 | undefined |
| maker  | address | undefined |
| token1 `indexed` | address | undefined |
| token1Amount  | uint256 | undefined |
| taker  | address | undefined |
| token2 `indexed` | address | undefined |
| token2Amount  | uint256 | undefined |

### FeeModified

```solidity
event FeeModified(bytes32 indexed parity, address token1, address token2, uint256 fee1, uint256 fee2, uint256 feeBase, address fee1Wallet, address fee2Wallet)
```



*Emitted when a DVD transfer is cancelled this event is emitted by the `cancelDVDTransfer` function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| parity `indexed` | bytes32 | undefined |
| token1  | address | undefined |
| token2  | address | undefined |
| fee1  | uint256 | undefined |
| fee2  | uint256 | undefined |
| feeBase  | uint256 | undefined |
| fee1Wallet  | address | undefined |
| fee2Wallet  | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



