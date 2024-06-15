# ITrustedIssuersRegistryLegacy





NOTICE     The T-REX software is licensed under a proprietary license or the GPL v.3.     If you choose to receive it under the GPL v.3 license, the following applies:     T-REX is a suite of smart contracts developed by Tokeny to manage and transfer financial assets on the ethereum blockchain     Copyright (C) 2021, Tokeny sàrl.     This program is free software: you can redistribute it and/or modify     it under the terms of the GNU General Public License as published by     the Free Software Foundation, either version 3 of the License, or     (at your option) any later version.     This program is distributed in the hope that it will be useful,     but WITHOUT ANY WARRANTY; without even the implied warranty of     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the     GNU General Public License for more details.     You should have received a copy of the GNU General Public License     along with this program.  If not, see &lt;https://www.gnu.org/licenses/&gt;.



## Methods

### addTrustedIssuer

```solidity
function addTrustedIssuer(contract IClaimIssuerLegacy _trustedIssuer, uint256[] _claimTopics) external nonpayable
```



*registers a ClaimIssuer contract as trusted claim issuer.  Requires that a ClaimIssuer contract doesn&#39;t already exist  Requires that the claimTopics set is not empty*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuer | contract IClaimIssuerLegacy | The ClaimIssuer contract address of the trusted claim issuer. |
| _claimTopics | uint256[] | the set of claim topics that the trusted issuer is allowed to emit  This function can only be called by the owner of the Trusted Issuers Registry contract  emits a `TrustedIssuerAdded` event |

### getTrustedIssuerClaimTopics

```solidity
function getTrustedIssuerClaimTopics(contract IClaimIssuerLegacy _trustedIssuer) external view returns (uint256[])
```



*Function for getting all the claim topic of trusted claim issuer  Requires the provided ClaimIssuer contract to be registered in the trusted issuers registry.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuer | contract IClaimIssuerLegacy | the trusted issuer concerned. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | The set of claim topics that the trusted issuer is allowed to emit |

### getTrustedIssuers

```solidity
function getTrustedIssuers() external view returns (contract IClaimIssuerLegacy[])
```



*Function for getting all the trusted claim issuers stored.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IClaimIssuerLegacy[] | array of all claim issuers registered. |

### hasClaimTopic

```solidity
function hasClaimTopic(address _issuer, uint256 _claimTopic) external view returns (bool)
```



*Function for checking if the trusted claim issuer is allowed  to emit a certain claim topic*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _issuer | address | the address of the trusted issuer&#39;s ClaimIssuer contract |
| _claimTopic | uint256 | the Claim Topic that has to be checked to know if the `issuer` is allowed to emit it |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | true if the issuer is trusted for this claim topic. |

### isTrustedIssuer

```solidity
function isTrustedIssuer(address _issuer) external view returns (bool)
```



*Checks if the ClaimIssuer contract is trusted*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _issuer | address | the address of the ClaimIssuer contract |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | true if the issuer is trusted, false otherwise. |

### removeTrustedIssuer

```solidity
function removeTrustedIssuer(contract IClaimIssuerLegacy _trustedIssuer) external nonpayable
```



*Removes the ClaimIssuer contract of a trusted claim issuer.  Requires that the claim issuer contract to be registered first*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuer | contract IClaimIssuerLegacy | the claim issuer to remove.  This function can only be called by the owner of the Trusted Issuers Registry contract  emits a `TrustedIssuerRemoved` event |

### transferOwnershipOnIssuersRegistryContract

```solidity
function transferOwnershipOnIssuersRegistryContract(address _newOwner) external nonpayable
```



*Transfers the Ownership of TrustedIssuersRegistry to a new Owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newOwner | address | The new owner of this contract.  This function can only be called by the owner of the Trusted Issuers Registry contract  emits an `OwnershipTransferred` event |

### updateIssuerClaimTopics

```solidity
function updateIssuerClaimTopics(contract IClaimIssuerLegacy _trustedIssuer, uint256[] _claimTopics) external nonpayable
```



*Updates the set of claim topics that a trusted issuer is allowed to emit.  Requires that this ClaimIssuer contract already exists in the registry  Requires that the provided claimTopics set is not empty*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _trustedIssuer | contract IClaimIssuerLegacy | the claim issuer to update. |
| _claimTopics | uint256[] | the set of claim topics that the trusted issuer is allowed to emit  This function can only be called by the owner of the Trusted Issuers Registry contract  emits a `ClaimTopicsUpdated` event |



## Events

### ClaimTopicsUpdated

```solidity
event ClaimTopicsUpdated(contract IClaimIssuerLegacy indexed trustedIssuer, uint256[] claimTopics)
```

this event is emitted when the set of claim topics is changed for a given trusted issuer.  the event is emitted by the updateIssuerClaimTopics function  `trustedIssuer` is the address of the trusted issuer&#39;s ClaimIssuer contract  `claimTopics` is the set of claims that the trusted issuer is allowed to emit



#### Parameters

| Name | Type | Description |
|---|---|---|
| trustedIssuer `indexed` | contract IClaimIssuerLegacy | undefined |
| claimTopics  | uint256[] | undefined |

### TrustedIssuerAdded

```solidity
event TrustedIssuerAdded(contract IClaimIssuerLegacy indexed trustedIssuer, uint256[] claimTopics)
```

this event is emitted when a trusted issuer is added in the registry.  the event is emitted by the addTrustedIssuer function  `trustedIssuer` is the address of the trusted issuer&#39;s ClaimIssuer contract  `claimTopics` is the set of claims that the trusted issuer is allowed to emit



#### Parameters

| Name | Type | Description |
|---|---|---|
| trustedIssuer `indexed` | contract IClaimIssuerLegacy | undefined |
| claimTopics  | uint256[] | undefined |

### TrustedIssuerRemoved

```solidity
event TrustedIssuerRemoved(contract IClaimIssuerLegacy indexed trustedIssuer)
```

this event is emitted when a trusted issuer is removed from the registry.  the event is emitted by the removeTrustedIssuer function  `trustedIssuer` is the address of the trusted issuer&#39;s ClaimIssuer contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| trustedIssuer `indexed` | contract IClaimIssuerLegacy | undefined |



