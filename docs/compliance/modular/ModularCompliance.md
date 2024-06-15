# ModularCompliance









## Methods

### addModule

```solidity
function addModule(address _module) external nonpayable
```



*See {IModularCompliance-addModule}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _module | address | undefined |

### bindToken

```solidity
function bindToken(address _token) external nonpayable
```



*See {IModularCompliance-bindToken}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | undefined |

### callModuleFunction

```solidity
function callModuleFunction(bytes callData, address _module) external nonpayable
```



*see {IModularCompliance-callModuleFunction}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| callData | bytes | undefined |
| _module | address | undefined |

### canTransfer

```solidity
function canTransfer(address _from, address _to, uint256 _value) external view returns (bool)
```



*See {IModularCompliance-canTransfer}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _to | address | undefined |
| _value | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### created

```solidity
function created(address _to, uint256 _value) external nonpayable
```



*See {IModularCompliance-created}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _value | uint256 | undefined |

### destroyed

```solidity
function destroyed(address _from, uint256 _value) external nonpayable
```



*See {IModularCompliance-destroyed}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _value | uint256 | undefined |

### getModules

```solidity
function getModules() external view returns (address[])
```



*See {IModularCompliance-getModules}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | undefined |

### getTokenBound

```solidity
function getTokenBound() external view returns (address)
```



*See {IModularCompliance-getTokenBound}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### init

```solidity
function init() external nonpayable
```






### isModuleBound

```solidity
function isModuleBound(address _module) external view returns (bool)
```



*See {IModularCompliance-isModuleBound}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _module | address | undefined |

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

### removeModule

```solidity
function removeModule(address _module) external nonpayable
```



*See {IModularCompliance-removeModule}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _module | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


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
function transferred(address _from, address _to, uint256 _value) external nonpayable
```



*See {IModularCompliance-transferred}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _to | address | undefined |
| _value | uint256 | undefined |

### unbindToken

```solidity
function unbindToken(address _token) external nonpayable
```



*See {IModularCompliance-unbindToken}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | undefined |



## Events

### Initialized

```solidity
event Initialized(uint8 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint8 | undefined |

### ModuleAdded

```solidity
event ModuleAdded(address indexed _module)
```

this event is emitted when a module has been added to the list of modules bound to the compliance contract  the event is emitted by the addModule function  `_module` is the address of the compliance module



#### Parameters

| Name | Type | Description |
|---|---|---|
| _module `indexed` | address | undefined |

### ModuleInteraction

```solidity
event ModuleInteraction(address indexed target, bytes4 selector)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| target `indexed` | address | undefined |
| selector  | bytes4 | undefined |

### ModuleRemoved

```solidity
event ModuleRemoved(address indexed _module)
```

this event is emitted when a module has been removed from the list of modules bound to the compliance contract  the event is emitted by the removeModule function  `_module` is the address of the compliance module



#### Parameters

| Name | Type | Description |
|---|---|---|
| _module `indexed` | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

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



