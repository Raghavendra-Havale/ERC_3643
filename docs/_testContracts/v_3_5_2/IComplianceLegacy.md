# IComplianceLegacy





NOTICE     The T-REX software is licensed under a proprietary license or the GPL v.3.     If you choose to receive it under the GPL v.3 license, the following applies:     T-REX is a suite of smart contracts developed by Tokeny to manage and transfer financial assets on the ethereum blockchain     Copyright (C) 2021, Tokeny sàrl.     This program is free software: you can redistribute it and/or modify     it under the terms of the GNU General Public License as published by     the Free Software Foundation, either version 3 of the License, or     (at your option) any later version.     This program is distributed in the hope that it will be useful,     but WITHOUT ANY WARRANTY; without even the implied warranty of     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the     GNU General Public License for more details.     You should have received a copy of the GNU General Public License     along with this program.  If not, see &lt;https://www.gnu.org/licenses/&gt;.



## Methods

### addTokenAgent

```solidity
function addTokenAgent(address _agentAddress) external nonpayable
```



*adds an agent to the list of token agents*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agentAddress | address | address of the agent to be added  Emits a TokenAgentAdded event |

### bindToken

```solidity
function bindToken(address _token) external nonpayable
```



*binds a token to the compliance contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | address of the token to bind  Emits a TokenBound event |

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

### isTokenAgent

```solidity
function isTokenAgent(address _agentAddress) external view returns (bool)
```



*Returns true if the Address is in the list of token agents*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agentAddress | address | address of this agent |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isTokenBound

```solidity
function isTokenBound(address _token) external view returns (bool)
```



*Returns true if the address given corresponds to a token that is bound with the Compliance contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | address of the token |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### removeTokenAgent

```solidity
function removeTokenAgent(address _agentAddress) external nonpayable
```



*remove Agent from the list of token agents*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _agentAddress | address | address of the agent to be removed (must be added first)  Emits a TokenAgentRemoved event |

### transferOwnershipOnComplianceContract

```solidity
function transferOwnershipOnComplianceContract(address newOwner) external nonpayable
```



*function used to transfer the ownership of the compliance contract  to a new owner, giving him access to the `OnlyOwner` functions implemented on the contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | The address of the new owner of the compliance contract  This function can only be called by the owner of the compliance contract  emits an `OwnershipTransferred` event |

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



*unbinds a token from the compliance contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | address of the token to unbind  Emits a TokenUnbound event |



## Events

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



