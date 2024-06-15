# TREXGateway









## Methods

### addAgent

```solidity
function addAgent(address _agent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _agent | address | undefined |

### addDeployer

```solidity
function addDeployer(address deployer) external nonpayable
```



*See {ITREXGateway-addDeployer}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployer | address | undefined |

### applyFeeDiscount

```solidity
function applyFeeDiscount(address deployer, uint16 discount) external nonpayable
```



*See {ITREXGateway-applyFeeDiscount}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployer | address | undefined |
| discount | uint16 | undefined |

### batchAddDeployer

```solidity
function batchAddDeployer(address[] deployers) external nonpayable
```



*See {ITREXGateway-batchAddDeployer}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployers | address[] | undefined |

### batchApplyFeeDiscount

```solidity
function batchApplyFeeDiscount(address[] deployers, uint16[] discounts) external nonpayable
```



*See {ITREXGateway-batchApplyFeeDiscount}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployers | address[] | undefined |
| discounts | uint16[] | undefined |

### batchDeployTREXSuite

```solidity
function batchDeployTREXSuite(ITREXFactory.TokenDetails[] _tokenDetails, ITREXFactory.ClaimDetails[] _claimDetails) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenDetails | ITREXFactory.TokenDetails[] | undefined |
| _claimDetails | ITREXFactory.ClaimDetails[] | undefined |

### batchRemoveDeployer

```solidity
function batchRemoveDeployer(address[] deployers) external nonpayable
```



*See {ITREXGateway-batchRemoveDeployer}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployers | address[] | undefined |

### calculateFee

```solidity
function calculateFee(address deployer) external view returns (uint256)
```



*See {ITREXGateway-calculateFee}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployer | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### deployTREXSuite

```solidity
function deployTREXSuite(ITREXFactory.TokenDetails _tokenDetails, ITREXFactory.ClaimDetails _claimDetails) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenDetails | ITREXFactory.TokenDetails | undefined |
| _claimDetails | ITREXFactory.ClaimDetails | undefined |

### enableDeploymentFee

```solidity
function enableDeploymentFee(bool _isEnabled) external nonpayable
```



*See {ITREXGateway-enableDeploymentFee}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _isEnabled | bool | undefined |

### getDeploymentFee

```solidity
function getDeploymentFee() external view returns (struct ITREXGateway.Fee)
```



*See {ITREXGateway-getDeploymentFee}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | ITREXGateway.Fee | undefined |

### getFactory

```solidity
function getFactory() external view returns (address)
```



*See {ITREXGateway-getFactory}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getPublicDeploymentStatus

```solidity
function getPublicDeploymentStatus() external view returns (bool)
```



*See {ITREXGateway-getPublicDeploymentStatus}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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

### isDeployer

```solidity
function isDeployer(address deployer) external view returns (bool)
```



*See {ITREXGateway-isDeployer}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployer | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isDeploymentFeeEnabled

```solidity
function isDeploymentFeeEnabled() external view returns (bool)
```



*See {ITREXGateway-isDeploymentFeeEnabled}.*


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

### removeDeployer

```solidity
function removeDeployer(address deployer) external nonpayable
```



*See {ITREXGateway-removeDeployer}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployer | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


### setDeploymentFee

```solidity
function setDeploymentFee(uint256 _fee, address _feeToken, address _feeCollector) external nonpayable
```



*See {ITREXGateway-setDeploymentFee}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _fee | uint256 | undefined |
| _feeToken | address | undefined |
| _feeCollector | address | undefined |

### setFactory

```solidity
function setFactory(address factory) external nonpayable
```



*See {ITREXGateway-setFactory}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| factory | address | undefined |

### setPublicDeploymentStatus

```solidity
function setPublicDeploymentStatus(bool _isEnabled) external nonpayable
```



*See {ITREXGateway-setPublicDeploymentStatus}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _isEnabled | bool | undefined |

### transferFactoryOwnership

```solidity
function transferFactoryOwnership(address _newOwner) external nonpayable
```



*See {ITREXGateway-transferFactoryOwnership}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newOwner | address | undefined |

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

### DeployerAdded

```solidity
event DeployerAdded(address indexed deployer)
```

event emitted when an address is flagged as a deployer



#### Parameters

| Name | Type | Description |
|---|---|---|
| deployer `indexed` | address | undefined |

### DeployerRemoved

```solidity
event DeployerRemoved(address indexed deployer)
```

event emitted when a deployer address loses deployment privileges



#### Parameters

| Name | Type | Description |
|---|---|---|
| deployer `indexed` | address | undefined |

### DeploymentFeeEnabled

```solidity
event DeploymentFeeEnabled(bool indexed isEnabled)
```

event emitted when the deployment fees are enabled/disabled



#### Parameters

| Name | Type | Description |
|---|---|---|
| isEnabled `indexed` | bool | undefined |

### DeploymentFeeSet

```solidity
event DeploymentFeeSet(uint256 indexed fee, address indexed feeToken, address indexed feeCollector)
```

event emitted when the deployment fees details are set/modified



#### Parameters

| Name | Type | Description |
|---|---|---|
| fee `indexed` | uint256 | undefined |
| feeToken `indexed` | address | undefined |
| feeCollector `indexed` | address | undefined |

### FactorySet

```solidity
event FactorySet(address indexed factory)
```

event emitted when the _factory variable is set/modified



#### Parameters

| Name | Type | Description |
|---|---|---|
| factory `indexed` | address | undefined |

### FeeDiscountApplied

```solidity
event FeeDiscountApplied(address indexed deployer, uint16 discount)
```

event emitted when a discount on deployment fees is granted for an address



#### Parameters

| Name | Type | Description |
|---|---|---|
| deployer `indexed` | address | undefined |
| discount  | uint16 | undefined |

### GatewaySuiteDeploymentProcessed

```solidity
event GatewaySuiteDeploymentProcessed(address indexed requester, address intendedOwner, uint256 feeApplied)
```

event emitted whenever a TREX token has been deployed by the TREX factory through the use of the Gateway



#### Parameters

| Name | Type | Description |
|---|---|---|
| requester `indexed` | address | undefined |
| intendedOwner  | address | undefined |
| feeApplied  | uint256 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### PublicDeploymentStatusSet

```solidity
event PublicDeploymentStatusSet(bool indexed publicDeploymentStatus)
```

event emitted when the public deployment status is set/modified



#### Parameters

| Name | Type | Description |
|---|---|---|
| publicDeploymentStatus `indexed` | bool | undefined |



## Errors

### BatchMaxLengthExceeded

```solidity
error BatchMaxLengthExceeded(uint16 lengthLimit)
```

Batch Size is too big, could run out of gas



#### Parameters

| Name | Type | Description |
|---|---|---|
| lengthLimit | uint16 | undefined |

### DeployerAlreadyExists

```solidity
error DeployerAlreadyExists(address deployer)
```

The address is already a deployer



#### Parameters

| Name | Type | Description |
|---|---|---|
| deployer | address | undefined |

### DeployerDoesNotExist

```solidity
error DeployerDoesNotExist(address deployer)
```

The address is not a deployer



#### Parameters

| Name | Type | Description |
|---|---|---|
| deployer | address | undefined |

### DeploymentFeesAlreadyDisabled

```solidity
error DeploymentFeesAlreadyDisabled()
```

The Deployment fees are already disabled




### DeploymentFeesAlreadyEnabled

```solidity
error DeploymentFeesAlreadyEnabled()
```

The Deployment fees are already enabled




### DiscountOutOfRange

```solidity
error DiscountOutOfRange()
```

Discount cannot be bigger than 10000 (100%)




### OnlyAdminCall

```solidity
error OnlyAdminCall()
```

Only Owner or Agent can call




### PublicCannotDeployOnBehalf

```solidity
error PublicCannotDeployOnBehalf()
```

Public deployers can only deploy for themselves




### PublicDeploymentAlreadyDisabled

```solidity
error PublicDeploymentAlreadyDisabled()
```

The Public Deployment Status is already set properly




### PublicDeploymentAlreadyEnabled

```solidity
error PublicDeploymentAlreadyEnabled()
```

The Public Deployment Status is already set properly




### PublicDeploymentsNotAllowed

```solidity
error PublicDeploymentsNotAllowed()
```

Cannot deploy if not deployer when public deployment disabled




### ZeroAddress

```solidity
error ZeroAddress()
```

A required parameter was set to the Zero address.





