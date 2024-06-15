# IIdentityRegistryLegacy





NOTICE     The T-REX software is licensed under a proprietary license or the GPL v.3.     If you choose to receive it under the GPL v.3 license, the following applies:     T-REX is a suite of smart contracts developed by Tokeny to manage and transfer financial assets on the ethereum blockchain     Copyright (C) 2021, Tokeny sàrl.     This program is free software: you can redistribute it and/or modify     it under the terms of the GNU General Public License as published by     the Free Software Foundation, either version 3 of the License, or     (at your option) any later version.     This program is distributed in the hope that it will be useful,     but WITHOUT ANY WARRANTY; without even the implied warranty of     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the     GNU General Public License for more details.     You should have received a copy of the GNU General Public License     along with this program.  If not, see &lt;https://www.gnu.org/licenses/&gt;.



## Methods

### addAgentOnIdentityRegistryContract

```solidity
function addAgentOnIdentityRegistryContract(address _agent) external nonpayable
```

Adds an address as _agent of the Identity Registry Contract.  This function can only be called by the wallet set as owner of the smart contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | The _agent&#39;s address to add. |

### batchRegisterIdentity

```solidity
function batchRegisterIdentity(address[] _userAddresses, contract LegacyIIdentity[] _identities, uint16[] _countries) external nonpayable
```



*function allowing to register identities in batch  This function can only be called by a wallet set as agent of the smart contract  Requires that none of the users has an identity contract already registered.  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_userAddresses.length` IS TOO HIGH,  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN &quot;OUT OF GAS&quot; TRANSACTION*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddresses | address[] | The addresses of the users |
| _identities | contract LegacyIIdentity[] | The addresses of the corresponding identity contracts |
| _countries | uint16[] | The countries of the corresponding investors  emits _userAddresses.length `IdentityRegistered` events |

### contains

```solidity
function contains(address _userAddress) external view returns (bool)
```



*This functions checks whether a wallet has its Identity registered or not  in the Identity Registry.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The address of the user to be checked. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | &#39;True&#39; if the address is contained in the Identity Registry, &#39;false&#39; if not. |

### deleteIdentity

```solidity
function deleteIdentity(address _userAddress) external nonpayable
```



*Removes an user from the identity registry.  Requires that the user have an identity contract already deployed that will be deleted.  This function can only be called by a wallet set as agent of the smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The address of the user to be removed  emits `IdentityRemoved` event |

### identity

```solidity
function identity(address _userAddress) external view returns (contract LegacyIIdentity)
```



*Returns the onchainID of an investor.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The wallet of the investor |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract LegacyIIdentity | undefined |

### identityStorage

```solidity
function identityStorage() external view returns (contract IIdentityRegistryStorageLegacy)
```



*Returns the IdentityRegistryStorage linked to the current IdentityRegistry.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IIdentityRegistryStorageLegacy | undefined |

### investorCountry

```solidity
function investorCountry(address _userAddress) external view returns (uint16)
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

### isVerified

```solidity
function isVerified(address _userAddress) external view returns (bool)
```



*This functions checks whether an identity contract  corresponding to the provided user address has the required claims or not based  on the data fetched from trusted issuers registry and from the claim topics registry*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The address of the user to be verified. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | &#39;True&#39; if the address is verified, &#39;false&#39; if not. |

### issuersRegistry

```solidity
function issuersRegistry() external view returns (contract ITrustedIssuersRegistryLegacy)
```



*Returns the TrustedIssuersRegistry linked to the current IdentityRegistry.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ITrustedIssuersRegistryLegacy | undefined |

### registerIdentity

```solidity
function registerIdentity(address _userAddress, contract LegacyIIdentity _identity, uint16 _country) external nonpayable
```



*Register an identity contract corresponding to a user address.  Requires that the user doesn&#39;t have an identity contract already registered.  This function can only be called by a wallet set as agent of the smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The address of the user |
| _identity | contract LegacyIIdentity | The address of the user&#39;s identity contract |
| _country | uint16 | The country of the investor  emits `IdentityRegistered` event |

### removeAgentOnIdentityRegistryContract

```solidity
function removeAgentOnIdentityRegistryContract(address _agent) external nonpayable
```

Removes an address from being _agent of the Identity Registry Contract.  This function can only be called by the wallet set as owner of the smart contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | The _agent&#39;s address to remove. |

### setClaimTopicsRegistry

```solidity
function setClaimTopicsRegistry(address _claimTopicsRegistry) external nonpayable
```



*Replace the actual claimTopicsRegistry contract with a new one.  This function can only be called by the wallet set as owner of the smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimTopicsRegistry | address | The address of the new claim Topics Registry  emits `ClaimTopicsRegistrySet` event |

### setIdentityRegistryStorage

```solidity
function setIdentityRegistryStorage(address _identityRegistryStorage) external nonpayable
```



*Replace the actual identityRegistryStorage contract with a new one.  This function can only be called by the wallet set as owner of the smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _identityRegistryStorage | address | The address of the new Identity Registry Storage  emits `IdentityStorageSet` event |

### setTrustedIssuersRegistry

```solidity
function setTrustedIssuersRegistry(address _trustedIssuersRegistry) external nonpayable
```



*Replace the actual trustedIssuersRegistry contract with a new one.  This function can only be called by the wallet set as owner of the smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuersRegistry | address | The address of the new Trusted Issuers Registry  emits `TrustedIssuersRegistrySet` event |

### topicsRegistry

```solidity
function topicsRegistry() external view returns (contract IClaimTopicsRegistryLegacy)
```



*Returns the ClaimTopicsRegistry linked to the current IdentityRegistry.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IClaimTopicsRegistryLegacy | undefined |

### transferOwnershipOnIdentityRegistryContract

```solidity
function transferOwnershipOnIdentityRegistryContract(address _newOwner) external nonpayable
```

Transfers the Ownership of the Identity Registry to a new Owner.  This function can only be called by the wallet set as owner of the smart contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| _newOwner | address | The new owner of this contract. |

### updateCountry

```solidity
function updateCountry(address _userAddress, uint16 _country) external nonpayable
```



*Updates the country corresponding to a user address.  Requires that the user should have an identity contract already deployed that will be replaced.  This function can only be called by a wallet set as agent of the smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The address of the user |
| _country | uint16 | The new country of the user  emits `CountryUpdated` event |

### updateIdentity

```solidity
function updateIdentity(address _userAddress, contract LegacyIIdentity _identity) external nonpayable
```



*Updates an identity contract corresponding to a user address.  Requires that the user address should be the owner of the identity contract.  Requires that the user should have an identity contract already deployed that will be replaced.  This function can only be called by a wallet set as agent of the smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _userAddress | address | The address of the user |
| _identity | contract LegacyIIdentity | The address of the user&#39;s new identity contract  emits `IdentityUpdated` event |



## Events

### ClaimTopicsRegistrySet

```solidity
event ClaimTopicsRegistrySet(address indexed claimTopicsRegistry)
```

this event is emitted when the ClaimTopicsRegistry has been set for the IdentityRegistry  the event is emitted by the IdentityRegistry constructor  `claimTopicsRegistry` is the address of the Claim Topics Registry contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| claimTopicsRegistry `indexed` | address | undefined |

### CountryUpdated

```solidity
event CountryUpdated(address indexed investorAddress, uint16 indexed country)
```

this event is emitted when an Identity&#39;s country has been updated  the event is emitted by the &#39;updateCountry&#39; function  `investorAddress` is the address on which the country has been updated  `country` is the numeric code (ISO 3166-1) of the new country



#### Parameters

| Name | Type | Description |
|---|---|---|
| investorAddress `indexed` | address | undefined |
| country `indexed` | uint16 | undefined |

### IdentityRegistered

```solidity
event IdentityRegistered(address indexed investorAddress, contract LegacyIIdentity indexed identity)
```

this event is emitted when an Identity is registered into the Identity Registry.  the event is emitted by the &#39;registerIdentity&#39; function  `investorAddress` is the address of the investor&#39;s wallet  `identity` is the address of the Identity smart contract (onchainID)



#### Parameters

| Name | Type | Description |
|---|---|---|
| investorAddress `indexed` | address | undefined |
| identity `indexed` | contract LegacyIIdentity | undefined |

### IdentityRemoved

```solidity
event IdentityRemoved(address indexed investorAddress, contract LegacyIIdentity indexed identity)
```

this event is emitted when an Identity is removed from the Identity Registry.  the event is emitted by the &#39;deleteIdentity&#39; function  `investorAddress` is the address of the investor&#39;s wallet  `identity` is the address of the Identity smart contract (onchainID)



#### Parameters

| Name | Type | Description |
|---|---|---|
| investorAddress `indexed` | address | undefined |
| identity `indexed` | contract LegacyIIdentity | undefined |

### IdentityStorageSet

```solidity
event IdentityStorageSet(address indexed identityStorage)
```

this event is emitted when the IdentityRegistryStorage has been set for the IdentityRegistry  the event is emitted by the IdentityRegistry constructor  `identityStorage` is the address of the Identity Registry Storage contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| identityStorage `indexed` | address | undefined |

### IdentityUpdated

```solidity
event IdentityUpdated(contract LegacyIIdentity indexed oldIdentity, contract LegacyIIdentity indexed newIdentity)
```

this event is emitted when an Identity has been updated  the event is emitted by the &#39;updateIdentity&#39; function  `oldIdentity` is the old Identity contract&#39;s address to update  `newIdentity` is the new Identity contract&#39;s



#### Parameters

| Name | Type | Description |
|---|---|---|
| oldIdentity `indexed` | contract LegacyIIdentity | undefined |
| newIdentity `indexed` | contract LegacyIIdentity | undefined |

### TrustedIssuersRegistrySet

```solidity
event TrustedIssuersRegistrySet(address indexed trustedIssuersRegistry)
```

this event is emitted when the ClaimTopicsRegistry has been set for the IdentityRegistry  the event is emitted by the IdentityRegistry constructor  `trustedIssuersRegistry` is the address of the Trusted Issuers Registry contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| trustedIssuersRegistry `indexed` | address | undefined |



