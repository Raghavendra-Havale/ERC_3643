# CountryWhitelisting





this feature allows to setup a whitelist of countries, only investors with a whitelisted country  of residence will be allowed to receive tokens



## Methods

### addAgent

```solidity
function addAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### addTokenAgent

```solidity
function addTokenAgent(address _agentAddress) external nonpayable
```



*See {ICompliance-addTokenAgent}.  this function is deprecated, but still implemented to avoid breaking interfaces*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agentAddress | address | undefined |

### batchUnWhitelistCountries

```solidity
function batchUnWhitelistCountries(uint16[] _countries) external nonpayable
```



*Removes countries from the whitelist in batch.  Identities from those countries will be unwhitelisted.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _countries | uint16[] | Countries to be unwhitelisted, should be expressed by following numeric ISO 3166-1 standard  Only the owner of the Compliance smart contract can call this function  emits an `UnwhitelistedCountry` event |

### batchWhitelistCountries

```solidity
function batchWhitelistCountries(uint16[] _countries) external nonpayable
```



*Adds countries to the whitelist in batch.  Identities from those countries will be whitelisted &amp; authorized to manipulate Tokens linked to this Compliance.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _countries | uint16[] | Countries to be whitelisted, should be expressed by following numeric ISO 3166-1 standard  Only the owner of the Compliance smart contract can call this function  emits an `WhitelistedCountry` event |

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

### complianceCheckOnCountryWhitelisting

```solidity
function complianceCheckOnCountryWhitelisting(address, address _to, uint256) external view returns (bool)
```



*check on the compliance status of a transaction.  If the check returns TRUE, the transfer is allowed to be executed, if the check returns FALSE, the compliance  feature will block the transfer execution  The check will verify if the country of residence of `_to` is whitelisted or not, in case the country is  whitelisted, this feature will allow the transfer to pass, otherwise the transfer will be blocked*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _to | address | the address of the transfer receiver |
| _2 | uint256 | undefined |

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

### isCountryWhitelisted

```solidity
function isCountryWhitelisted(uint16 _country) external view returns (bool)
```



*Returns true if country is whitelisted*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _country | uint16 | , numeric ISO 3166-1 standard of the country to be checked |

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

### unWhitelistCountry

```solidity
function unWhitelistCountry(uint16 _country) external nonpayable
```



*removes whitelisting status of a country.  Identities from those countries will be de-whitelisted &amp; forbidden  to manipulate Tokens linked to this Compliance.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _country | uint16 | Country to be de-whitelisted, should be expressed by following numeric ISO 3166-1 standard  Only the owner of the Compliance smart contract can call this function  emits an `UnwhitelistedCountry` event |

### unbindToken

```solidity
function unbindToken(address _token) external nonpayable
```



*See {ICompliance-unbindToken}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | undefined |

### whitelistCountry

```solidity
function whitelistCountry(uint16 _country) external nonpayable
```



*whitelist country.  Identities from those countries will be whitelisted &amp; authorised to manipulate Tokens linked to this Compliance.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _country | uint16 | Country to be whitelisted, should be expressed by following numeric ISO 3166-1 standard  Only the owner of the Compliance smart contract can call this function  emits an `WhitelistedCountry` event |



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

### UnWhitelistedCountry

```solidity
event UnWhitelistedCountry(uint16 _country)
```

this event is emitted whenever a Country has been removed from the whitelist.  the event is emitted by &#39;unwhitelistCountry&#39; and &#39;batchBlacklistCountries&#39; functions.  `_country` is the numeric ISO 3166-1 of the whitelisted country.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _country  | uint16 | undefined |

### WhitelistedCountry

```solidity
event WhitelistedCountry(uint16 _country)
```

this event is emitted whenever a Country has been whitelisted.  the event is emitted by &#39;whitelistCountry&#39; and &#39;batchWhitelistCountries&#39; functions.  `_country` is the numeric ISO 3166-1 of the whitelisted country.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _country  | uint16 | undefined |



