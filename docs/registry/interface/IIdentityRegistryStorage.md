# IIdentityRegistryStorage









## Methods

### addIdentityToStorage

```solidity
function addIdentityToStorage(address _userAddress, contract IIdentity _identity, uint16 _country) external nonpayable
```



*adds an identity contract corresponding to a user address in the storage.  Requires that the user doesn&#39;t have an identity contract already registered.  This function can only be called by an address set as agent of the smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The address of the user |
| _identity | contract IIdentity | The address of the user&#39;s identity contract |
| _country | uint16 | The country of the investor  emits `IdentityStored` event |

### bindIdentityRegistry

```solidity
function bindIdentityRegistry(address _identityRegistry) external nonpayable
```

Adds an identity registry as agent of the Identity Registry Storage Contract.  This function can only be called by the wallet set as owner of the smart contract  This function adds the identity registry to the list of identityRegistries linked to the storage contract  cannot bind more than 300 IR to 1 IRS



#### Parameters

| Name | Type | Description |
|---|---|---|
| _identityRegistry | address | The identity registry address to add. |

### linkedIdentityRegistries

```solidity
function linkedIdentityRegistries() external view returns (address[])
```



*Returns the identity registries linked to the storage contract*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | undefined |

### modifyStoredIdentity

```solidity
function modifyStoredIdentity(address _userAddress, contract IIdentity _identity) external nonpayable
```



*Updates an identity contract corresponding to a user address.  Requires that the user address should be the owner of the identity contract.  Requires that the user should have an identity contract already deployed that will be replaced.  This function can only be called by an address set as agent of the smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The address of the user |
| _identity | contract IIdentity | The address of the user&#39;s new identity contract  emits `IdentityModified` event |

### modifyStoredInvestorCountry

```solidity
function modifyStoredInvestorCountry(address _userAddress, uint16 _country) external nonpayable
```



*Updates the country corresponding to a user address.  Requires that the user should have an identity contract already deployed that will be replaced.  This function can only be called by an address set as agent of the smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The address of the user |
| _country | uint16 | The new country of the user  emits `CountryModified` event |

### removeIdentityFromStorage

```solidity
function removeIdentityFromStorage(address _userAddress) external nonpayable
```



*Removes an user from the storage.  Requires that the user have an identity contract already deployed that will be deleted.  This function can only be called by an address set as agent of the smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The address of the user to be removed  emits `IdentityUnstored` event |

### storedIdentity

```solidity
function storedIdentity(address _userAddress) external view returns (contract IIdentity)
```



*Returns the onchainID of an investor.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The wallet of the investor |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IIdentity | undefined |

### storedInvestorCountry

```solidity
function storedInvestorCountry(address _userAddress) external view returns (uint16)
```



*Returns the country code of an investor.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The wallet of the investor |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined |

### unbindIdentityRegistry

```solidity
function unbindIdentityRegistry(address _identityRegistry) external nonpayable
```

Removes an identity registry from being agent of the Identity Registry Storage Contract.  This function can only be called by the wallet set as owner of the smart contract  This function removes the identity registry from the list of identityRegistries linked to the storage contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| _identityRegistry | address | The identity registry address to remove. |



## Events

### CountryModified

```solidity
event CountryModified(address indexed investorAddress, uint16 indexed country)
```

this event is emitted when an Identity&#39;s country has been updated  the event is emitted by the &#39;updateCountry&#39; function  `investorAddress` is the address on which the country has been updated  `country` is the numeric code (ISO 3166-1) of the new country



#### Parameters

| Name | Type | Description |
|---|---|---|
| investorAddress `indexed` | address | undefined |
| country `indexed` | uint16 | undefined |

### IdentityModified

```solidity
event IdentityModified(contract IIdentity indexed oldIdentity, contract IIdentity indexed newIdentity)
```

this event is emitted when an Identity has been updated  the event is emitted by the &#39;updateIdentity&#39; function  `oldIdentity` is the old Identity contract&#39;s address to update  `newIdentity` is the new Identity contract&#39;s



#### Parameters

| Name | Type | Description |
|---|---|---|
| oldIdentity `indexed` | contract IIdentity | undefined |
| newIdentity `indexed` | contract IIdentity | undefined |

### IdentityRegistryBound

```solidity
event IdentityRegistryBound(address indexed identityRegistry)
```

this event is emitted when an Identity Registry is bound to the storage contract  the event is emitted by the &#39;addIdentityRegistry&#39; function  `identityRegistry` is the address of the identity registry added



#### Parameters

| Name | Type | Description |
|---|---|---|
| identityRegistry `indexed` | address | undefined |

### IdentityRegistryUnbound

```solidity
event IdentityRegistryUnbound(address indexed identityRegistry)
```

this event is emitted when an Identity Registry is unbound from the storage contract  the event is emitted by the &#39;removeIdentityRegistry&#39; function  `identityRegistry` is the address of the identity registry removed



#### Parameters

| Name | Type | Description |
|---|---|---|
| identityRegistry `indexed` | address | undefined |

### IdentityStored

```solidity
event IdentityStored(address indexed investorAddress, contract IIdentity indexed identity)
```

this event is emitted when an Identity is registered into the storage contract.  the event is emitted by the &#39;registerIdentity&#39; function  `investorAddress` is the address of the investor&#39;s wallet  `identity` is the address of the Identity smart contract (onchainID)



#### Parameters

| Name | Type | Description |
|---|---|---|
| investorAddress `indexed` | address | undefined |
| identity `indexed` | contract IIdentity | undefined |

### IdentityUnstored

```solidity
event IdentityUnstored(address indexed investorAddress, contract IIdentity indexed identity)
```

this event is emitted when an Identity is removed from the storage contract.  the event is emitted by the &#39;deleteIdentity&#39; function  `investorAddress` is the address of the investor&#39;s wallet  `identity` is the address of the Identity smart contract (onchainID)



#### Parameters

| Name | Type | Description |
|---|---|---|
| investorAddress `indexed` | address | undefined |
| identity `indexed` | contract IIdentity | undefined |



