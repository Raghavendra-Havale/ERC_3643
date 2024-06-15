# ExchangeMonthlyLimits





this feature allows to put a limit on the monthly deposits one can make on a given exchange  It won&#39;t be possible for an investor to send more than the monthly limit of tokens on a given exchange



## Methods

### addAgent

```solidity
function addAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### addExchangeID

```solidity
function addExchangeID(address _exchangeID) external nonpayable
```



*tags the ONCHAINID as being an exchange ID*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID | address | ONCHAINID to be tagged  Function can be called only by owner of the compliance contract  Cannot be called on an address already tagged as being an exchange  emits an `ExchangeIDAdded` event |

### addTokenAgent

```solidity
function addTokenAgent(address _agentAddress) external nonpayable
```



*See {ICompliance-addTokenAgent}.  this function is deprecated, but still implemented to avoid breaking interfaces*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agentAddress | address | undefined |

### bindToken

```solidity
function bindToken(address _token) external nonpayable
```



*See {ICompliance-bindToken}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | undefined |

### canTransfer

```solidity
function canTransfer(address _from, address _to, uint256 _amount) external view returns (bool)
```



*checks that the transfer is compliant.  default compliance always returns true  READ ONLY FUNCTION, this function cannot be used to increment  counters, emit events, ...*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | The address of the sender |
| _to | address | The address of the receiver |
| _amount | uint256 | The amount of tokens involved in the transfer |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### complianceCheckOnExchangeMonthlyLimits

```solidity
function complianceCheckOnExchangeMonthlyLimits(address _from, address _to, uint256 _value) external view returns (bool)
```



*check on the compliance status of a transaction.  If the check returns TRUE, the transfer is allowed to be executed, if the check returns FALSE, the compliance  feature will block the transfer execution  The check will verify if the transfer is done to an exchange wallet, if it is the case it will check if the  transfer respects the limitations in terms of authorized monthly deposit volume, if it does the check  will return true, if the transfer doesn&#39;t respect the limitations it will return false and block the transfer  Agents are allowed to bypass this check*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | the address of the transfer sender |
| _to | address | the address of the transfer receiver |
| _value | uint256 | the amount of tokens that `_from` would send to `_to` |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### created

```solidity
function created(address _to, uint256 _amount) external nonpayable
```



*function called whenever tokens are created  on a wallet  this function can update state variables in the compliance contract  these state variables being used by `canTransfer` to decide if a transfer  is compliant or not depending on the values stored in these state variables and on  the parameters of the compliance smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | The address of the receiver |
| _amount | uint256 | The amount of tokens involved in the transfer |

### destroyed

```solidity
function destroyed(address _from, uint256 _amount) external nonpayable
```



*function called whenever tokens are destroyed  this function can update state variables in the compliance contract  these state variables being used by `canTransfer` to decide if a transfer  is compliant or not depending on the values stored in these state variables and on  the parameters of the compliance smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | The address of the receiver |
| _amount | uint256 | The amount of tokens involved in the transfer |

### getExchangeMonthlyLimit

```solidity
function getExchangeMonthlyLimit(address _exchangeID) external view returns (uint256)
```



*getter for `exchangeMonthlyLimit` variable*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID | address | exchange ONCHAINID  returns the monthly limit set for that exchange |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getMonthlyCounter

```solidity
function getMonthlyCounter(address _exchangeID, address _investorID) external view returns (uint256)
```



*getter for `exchangeCounters` variable on the counter parameter of the ExchangeTransferCounter struct*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID | address | exchange ONCHAINID |
| _investorID | address | ONCHAINID to be checked  returns current monthly counter of `_investorID` on `exchangeID` exchange |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getMonthlyTimer

```solidity
function getMonthlyTimer(address _exchangeID, address _investorID) external view returns (uint256)
```



*getter for `exchangeCounters` variable on the timer parameter of the ExchangeTransferCounter struct*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID | address | exchange ONCHAINID |
| _investorID | address | ONCHAINID to be checked  returns current timer of `_investorID` on `exchangeID` exchange |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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

### isExchangeID

```solidity
function isExchangeID(address _exchangeID) external view returns (bool)
```



*getter for `_exchangeIDs` variable  tells to the caller if an ONCHAINID belongs to an exchange or not*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID | address | ONCHAINID to be checked  returns TRUE if the address corresponds to an exchange, FALSE otherwise |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isTokenAgent

```solidity
function isTokenAgent(address _agentAddress) external view returns (bool)
```



*See {ICompliance-isTokenAgent}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agentAddress | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isTokenBound

```solidity
function isTokenBound(address _token) external view returns (bool)
```



*See {ICompliance-isTokenBound}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | undefined |

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

### removeAgent

```solidity
function removeAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### removeExchangeID

```solidity
function removeExchangeID(address _exchangeID) external nonpayable
```



*untags the ONCHAINID as being an exchange ID*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID | address | ONCHAINID to be untagged  Function can be called only by owner of the compliance contract  Cannot be called on an address not tagged as being an exchange  emits an `ExchangeIDRemoved` event |

### removeTokenAgent

```solidity
function removeTokenAgent(address _agentAddress) external nonpayable
```



*See {ICompliance-isTokenAgent}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agentAddress | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### setExchangeMonthlyLimit

```solidity
function setExchangeMonthlyLimit(address _exchangeID, uint256 _newExchangeMonthlyLimit) external nonpayable
```



*Set the limit of tokens allowed to be transferred monthly.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID | address | ONCHAINID of the exchange |
| _newExchangeMonthlyLimit | uint256 | The new monthly limit of tokens  Only the owner of the Compliance smart contract can call this function |

### tokenBound

```solidity
function tokenBound() external view returns (contract IToken)
```

Mapping of tokens linked to the compliance contract




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

### transferred

```solidity
function transferred(address _from, address _to, uint256 _amount) external nonpayable
```



*function called whenever tokens are transferred  from one wallet to another  this function can update state variables in the compliance contract  these state variables being used by `canTransfer` to decide if a transfer  is compliant or not depending on the values stored in these state variables and on  the parameters of the compliance smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | The address of the sender |
| _to | address | The address of the receiver |
| _amount | uint256 | The amount of tokens involved in the transfer |

### unbindToken

```solidity
function unbindToken(address _token) external nonpayable
```



*See {ICompliance-unbindToken}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | undefined |



## Events

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

### ExchangeIDAdded

```solidity
event ExchangeIDAdded(address _newExchangeID)
```

this event is emitted whenever an ONCHAINID is tagged as being an exchange ID.  the event is emitted by &#39;addExchangeID&#39;.  `_newExchangeID` is the ONCHAINID address of the exchange to add.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _newExchangeID  | address | undefined |

### ExchangeIDRemoved

```solidity
event ExchangeIDRemoved(address _exchangeID)
```

this event is emitted whenever an ONCHAINID is untagged as belonging to an exchange.  the event is emitted by &#39;removeExchangeID&#39;.  `_exchangeID` is the ONCHAINID being untagged as an exchange ID.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID  | address | undefined |

### ExchangeMonthlyLimitUpdated

```solidity
event ExchangeMonthlyLimitUpdated(address _exchangeID, uint256 _newExchangeMonthlyLimit)
```

this event is emitted whenever the Exchange Limit has been updated.  the event is emitted by &#39;setExchangeMonthlyLimit&#39;  `_exchangeID` is the amount ONCHAINID address of the exchange.  `_newExchangeMonthlyLimit` is the amount Limit of tokens to be transferred monthly to an exchange wallet.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _exchangeID  | address | undefined |
| _newExchangeMonthlyLimit  | uint256 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### TokenAgentAdded

```solidity
event TokenAgentAdded(address _agentAddress)
```

this event is emitted when the Agent has been added on the allowedList of this Compliance.  the event is emitted by the Compliance constructor and by the addTokenAgent function  `_agentAddress` is the address of the Agent to add



#### Parameters

| Name | Type | Description |
|---|---|---|
| _agentAddress  | address | undefined |

### TokenAgentRemoved

```solidity
event TokenAgentRemoved(address _agentAddress)
```

this event is emitted when the Agent has been removed from the agent list of this Compliance.  the event is emitted by the Compliance constructor and by the removeTokenAgent function  `_agentAddress` is the address of the Agent to remove



#### Parameters

| Name | Type | Description |
|---|---|---|
| _agentAddress  | address | undefined |

### TokenBound

```solidity
event TokenBound(address _token)
```

this event is emitted when a token has been bound to the compliance contract  the event is emitted by the bindToken function  `_token` is the address of the token to bind



#### Parameters

| Name | Type | Description |
|---|---|---|
| _token  | address | undefined |

### TokenUnbound

```solidity
event TokenUnbound(address _token)
```

this event is emitted when a token has been unbound from the compliance contract  the event is emitted by the unbindToken function  `_token` is the address of the token to unbind



#### Parameters

| Name | Type | Description |
|---|---|---|
| _token  | address | undefined |



