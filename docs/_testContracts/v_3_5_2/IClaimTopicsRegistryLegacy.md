# IClaimTopicsRegistryLegacy





NOTICE     The T-REX software is licensed under a proprietary license or the GPL v.3.     If you choose to receive it under the GPL v.3 license, the following applies:     T-REX is a suite of smart contracts developed by Tokeny to manage and transfer financial assets on the ethereum blockchain     Copyright (C) 2021, Tokeny sàrl.     This program is free software: you can redistribute it and/or modify     it under the terms of the GNU General Public License as published by     the Free Software Foundation, either version 3 of the License, or     (at your option) any later version.     This program is distributed in the hope that it will be useful,     but WITHOUT ANY WARRANTY; without even the implied warranty of     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the     GNU General Public License for more details.     You should have received a copy of the GNU General Public License     along with this program.  If not, see &lt;https://www.gnu.org/licenses/&gt;.



## Methods

### addClaimTopic

```solidity
function addClaimTopic(uint256 _claimTopic) external nonpayable
```



*Add a trusted claim topic (For example: KYC=1, AML=2). Only owner can call. emits `ClaimTopicAdded` event*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimTopic | uint256 | The claim topic index |

### getClaimTopics

```solidity
function getClaimTopics() external view returns (uint256[])
```



*Get the trusted claim topics for the security token*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | Array of trusted claim topics |

### removeClaimTopic

```solidity
function removeClaimTopic(uint256 _claimTopic) external nonpayable
```



*Remove a trusted claim topic (For example: KYC=1, AML=2).  Only owner can call.  emits `ClaimTopicRemoved` event*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _claimTopic | uint256 | The claim topic index |

### transferOwnershipOnClaimTopicsRegistryContract

```solidity
function transferOwnershipOnClaimTopicsRegistryContract(address _newOwner) external nonpayable
```



*Transfers the Ownership of ClaimTopics to a new Owner.  Only owner can call.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newOwner | address | The new owner of this contract. |



## Events

### ClaimTopicAdded

```solidity
event ClaimTopicAdded(uint256 indexed claimTopic)
```

this event is emitted when a claim topic has been added to the ClaimTopicsRegistry  the event is emitted by the &#39;addClaimTopic&#39; function  `claimTopic` is the required claim added to the Claim Topics Registry



#### Parameters

| Name | Type | Description |
|---|---|---|
| claimTopic `indexed` | uint256 | undefined |

### ClaimTopicRemoved

```solidity
event ClaimTopicRemoved(uint256 indexed claimTopic)
```

this event is emitted when a claim topic has been removed from the ClaimTopicsRegistry  the event is emitted by the &#39;removeClaimTopic&#39; function  `claimTopic` is the required claim removed from the Claim Topics Registry



#### Parameters

| Name | Type | Description |
|---|---|---|
| claimTopic `indexed` | uint256 | undefined |



