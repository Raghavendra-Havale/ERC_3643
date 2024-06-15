# AgentRoleUpgradeableLegacy





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

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |



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



