# ITREXGateway









## Methods

### addDeployer

```solidity
function addDeployer(address deployer) external nonpayable
```

Adds an address to the list of approved deployers.

*Only an admin (owner or agent) can call this method. If the provided `deployer` address is already an approved deployer, the function will revert. Emits a `DeployerAdded` event upon successful addition.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployer | address | Address to be added to the list of approved deployers. emits DeployerAdded Indicates that a new deployer address has been successfully added. |

### applyFeeDiscount

```solidity
function applyFeeDiscount(address deployer, uint16 discount) external nonpayable
```

Applies a fee discount to a specific deployer&#39;s address.

*Only an admin (owner or agent) can call this method. The fee discount is expressed per 10,000 (10000 = 100%, 1000 = 10%, etc.). If the discount exceeds 10000, the function will revert. Emits a `FeeDiscountApplied` event upon successful application.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployer | address | Address of the deployer to which the discount will be applied. |
| discount | uint16 | The discount rate, expressed per 10,000. emits FeeDiscountApplied Indicates that a fee discount has been successfully applied to a deployer. |

### batchAddDeployer

```solidity
function batchAddDeployer(address[] deployers) external nonpayable
```

Adds multiple addresses to the list of approved deployers in a single transaction.

*This function allows batch addition of deployers. It can only be called by an admin (owner or agent). The function will revert if the length of the `deployers` array is more than 500 to prevent excessive gas consumption. It will also revert if any address in the `deployers` array is already an approved deployer. Emits a `DeployerAdded` event for each successfully added deployer.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployers | address[] | An array of addresses to be added to the list of approved deployers. |

### batchApplyFeeDiscount

```solidity
function batchApplyFeeDiscount(address[] deployers, uint16[] discounts) external nonpayable
```

Applies fee discounts to multiple deployers in a single transaction.

*Allows batch application of fee discounts. Can only be called by an admin (owner or agent). The function will revert if the length of the `deployers` array exceeds 500, to prevent excessive gas consumption. Each discount in the `discounts` array is expressed per 10,000 (10000 = 100%, 1000 = 10%, etc.). The function will also revert if any discount in the `discounts` array exceeds 10000. Emits a `FeeDiscountApplied` event for each successfully applied discount.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployers | address[] | An array of deployer addresses to which the discounts will be applied. |
| discounts | uint16[] | An array of discount rates, each corresponding to a deployer in the `deployers` array, expressed per 10,000. |

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

Removes multiple addresses from the list of approved deployers in a single transaction.

*This function allows batch removal of deployers. It can only be called by an admin (owner or agent). The function will revert if the length of the `deployers` array is more than 500 to prevent excessive gas consumption. It will also revert if any address in the `deployers` array is not an approved deployer. Emits a `DeployerRemoved` event for each successfully removed deployer.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployers | address[] | An array of addresses to be removed from the list of approved deployers. |

### calculateFee

```solidity
function calculateFee(address deployer) external view returns (uint256)
```

Calculates the deployment fee for a given deployer after accounting for any discounts.

*The fee discount, if any, is expressed per 10,000 (e.g., 10000 = 100%, 1000 = 10%, etc.). The final fee is derived by subtracting the discount amount from the original fee.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployer | address | Address of the deployer for which the fee will be calculated. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The calculated fee after accounting for potential discounts. |

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

Toggles the deployment fee status for TREX contracts.

*Enables or disables the deployment fees. If the function call doesn&#39;t change the current status, it will revert. Only the owner can call this method. Emits a `DeploymentFeeEnabled` event upon successful execution. Reverts with `DeploymentFeesAlreadyEnabled` if trying to enable when already enabled. Reverts with `DeploymentFeesAlreadyDisabled` if trying to disable when already disabled.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _isEnabled | bool | Determines if deployment fees are enabled (`true`) or disabled (`false`). emits DeploymentFeeEnabled When the new deployment fee status is set. |

### getDeploymentFee

```solidity
function getDeploymentFee() external view returns (struct ITREXGateway.Fee)
```

Retrieves the current deployment fee details.

*This function provides details about the deployment fee, including the amount, token type, and the collector address.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | ITREXGateway.Fee | Fee struct containing:   - `fee`: The amount to be paid as the deployment fee.   - `feeToken`: Address of the token used for the deployment fee.   - `feeCollector`: Address that collects the deployment fees. |

### getFactory

```solidity
function getFactory() external view returns (address)
```

Retrieves the address of the current Factory contract.

*The Factory contract is responsible for deploying TREX contracts. This function allows querying its address.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | Address of the current Factory contract. |

### getPublicDeploymentStatus

```solidity
function getPublicDeploymentStatus() external view returns (bool)
```

Retrieves the current public deployment status.

*Indicates whether public deployments of TREX contracts are currently allowed.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | A boolean value representing the public deployment status: `true` if public deployments are allowed, `false` otherwise. |

### isDeployer

```solidity
function isDeployer(address deployer) external view returns (bool)
```

Checks if the provided address is an approved deployer.

*Determines if a specific address has permissions to deploy TREX contracts.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployer | address | Address to be checked for deployer permissions. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | A boolean value indicating whether the provided address is an approved deployer (`true`) or not (`false`). |

### isDeploymentFeeEnabled

```solidity
function isDeploymentFeeEnabled() external view returns (bool)
```

Checks if the deployment fee is currently enabled.

*Provides a way to determine if deployers are currently required to pay a fee when deploying TREX contracts.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | A boolean value indicating whether the deployment fee is enabled (`true`) or disabled (`false`). |

### removeDeployer

```solidity
function removeDeployer(address deployer) external nonpayable
```

Removes an address from the list of approved deployers.

*Only an admin (owner or agent) can call this method. If the provided `deployer` address is not an approved deployer, the function will revert. Emits a `DeployerRemoved` event upon successful removal.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| deployer | address | Address to be removed from the list of approved deployers. emits DeployerRemoved Indicates that a deployer address has been successfully removed. |

### setDeploymentFee

```solidity
function setDeploymentFee(uint256 _fee, address _feeToken, address _feeCollector) external nonpayable
```

Sets the deployment fee details for TREX contracts.

*Only the owner can call this method. The function establishes the amount, token type, and collector address for the deployment fee. Reverts if either the provided `_feeToken` or `_feeCollector` address is zero. Emits a `DeploymentFeeSet` event upon successful execution.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _fee | uint256 | The amount to be set as the deployment fee. |
| _feeToken | address | Address of the token used for the deployment fee. |
| _feeCollector | address | Address that will collect the deployment fees. emits DeploymentFeeSet Indicates that the deployment fee details have been successfully set. |

### setFactory

```solidity
function setFactory(address factory) external nonpayable
```

Sets the factory contract address used for deploying TREX smart contracts.

*Only the owner can call this method. Emits a `FactorySet` event upon successful execution. Reverts if the provided factory address is zero.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| factory | address | The address of the new factory contract. emits FactorySet When the new factory address is set. |

### setPublicDeploymentStatus

```solidity
function setPublicDeploymentStatus(bool _isEnabled) external nonpayable
```

Sets the status for public deployments of TREX contracts.

*Enables or disables public deployments. If the function call doesn&#39;t change the current status, it will revert. Only the owner can call this method. Emits a `PublicDeploymentStatusSet` event upon successful execution. Reverts with `PublicDeploymentAlreadyEnabled` if trying to enable when already enabled. Reverts with `PublicDeploymentAlreadyDisabled` if trying to disable when already disabled.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _isEnabled | bool | Determines if public deployments are enabled (`true`) or disabled (`false`). emits PublicDeploymentStatusSet When the new public deployment status is set. |

### transferFactoryOwnership

```solidity
function transferFactoryOwnership(address _newOwner) external nonpayable
```

Transfers the ownership of the Factory contract.

*Only the owner can call this method. Utilizes the `transferOwnership` function of the Ownable pattern.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newOwner | address | Address of the new owner for the Factory contract. |



## Events

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

### PublicDeploymentStatusSet

```solidity
event PublicDeploymentStatusSet(bool indexed publicDeploymentStatus)
```

event emitted when the public deployment status is set/modified



#### Parameters

| Name | Type | Description |
|---|---|---|
| publicDeploymentStatus `indexed` | bool | undefined |



