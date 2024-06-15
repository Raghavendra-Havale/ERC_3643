# CountryRestrictModule









## Methods

### addCountryRestriction

```solidity
function addCountryRestriction(uint16 _country) external nonpayable
```



*Adds country restriction.  Identities from those countries will be forbidden to manipulate Tokens linked to this Compliance.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _country | uint16 | Country to be restricted, should be expressed by following numeric ISO 3166-1 standard  Only the owner of the Compliance smart contract can call this function  emits an `AddedRestrictedCountry` event |

### batchRestrictCountries

```solidity
function batchRestrictCountries(uint16[] _countries) external nonpayable
```



*Adds countries restriction in batch.  Identities from those countries will be forbidden to manipulate Tokens linked to this Compliance.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _countries | uint16[] | Countries to be restricted, should be expressed by following numeric ISO 3166-1 standard  Can be called only for a compliance contract that is bound to the CountryRestrict Module  Only the owner of the Compliance smart contract can call this function  cannot restrict more than 195 countries in 1 batch  emits _countries.length `AddedRestrictedCountry` events |

### batchUnrestrictCountries

```solidity
function batchUnrestrictCountries(uint16[] _countries) external nonpayable
```



*Removes country restrictions in batch.  Identities from those countries will again be authorised to manipulate Tokens linked to this Compliance.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _countries | uint16[] | Countries to be unrestricted, should be expressed by following numeric ISO 3166-1 standard  Can be called only for a compliance contract that is bound to the CountryRestrict Module  cannot unrestrict more than 195 countries in 1 batch  Only the owner of the Compliance smart contract can call this function  emits _countries.length `RemovedRestrictedCountry` events |

### bindCompliance

```solidity
function bindCompliance(address _compliance) external nonpayable
```



*See {IModule-bindCompliance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |

### canComplianceBind

```solidity
function canComplianceBind(address) external view returns (bool)
```



*See {IModule-canComplianceBind}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### initialize

```solidity
function initialize() external nonpayable
```

This function should only be called once during the contract deployment.

*initializes the contract and sets the initial state.*


### isComplianceBound

```solidity
function isComplianceBound(address _compliance) external view returns (bool)
```



*See {IModule-isComplianceBound}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isCountryRestricted

```solidity
function isCountryRestricted(address _compliance, uint16 _country) external view returns (bool)
```



*Returns true if country is Restricted*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |
| _country | uint16 | , numeric ISO 3166-1 standard of the country to be checked |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isPlugAndPlay

```solidity
function isPlugAndPlay() external pure returns (bool)
```



*See {IModule-isPlugAndPlay}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### moduleBurnAction

```solidity
function moduleBurnAction(address _from, uint256 _value) external nonpayable
```



*See {IModule-moduleBurnAction}.  no burn action required in this module*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _value | uint256 | undefined |

### moduleCheck

```solidity
function moduleCheck(address, address _to, uint256, address _compliance) external view returns (bool)
```



*See {IModule-moduleCheck}.  checks if the country of address _to is not restricted for this _compliance  returns TRUE if the country of _to is not restricted for this _compliance  returns FALSE if the country of _to is restricted for this _compliance*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _to | address | undefined |
| _2 | uint256 | undefined |
| _compliance | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### moduleMintAction

```solidity
function moduleMintAction(address _to, uint256 _value) external nonpayable
```



*See {IModule-moduleMintAction}.  no mint action required in this module*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _value | uint256 | undefined |

### moduleTransferAction

```solidity
function moduleTransferAction(address _from, address _to, uint256 _value) external nonpayable
```



*See {IModule-moduleTransferAction}.  no transfer action required in this module*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _to | address | undefined |
| _value | uint256 | undefined |

### name

```solidity
function name() external pure returns (string _name)
```



*See {IModule-name}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _name | string | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### proxiableUUID

```solidity
function proxiableUUID() external view returns (bytes32)
```



*Implementation of the ERC1822 {proxiableUUID} function. This returns the storage slot used by the implementation. It is used to validate the implementation&#39;s compatibility when performing an upgrade. IMPORTANT: A proxy pointing at a proxiable contract should not be considered proxiable itself, because this risks bricking a proxy that upgrades to it, by delegating to itself until out of gas. Thus it is critical that this function revert if invoked through a proxy. This is guaranteed by the `notDelegated` modifier.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### removeCountryRestriction

```solidity
function removeCountryRestriction(uint16 _country) external nonpayable
```



*Removes country restriction.  Identities from those countries will again be authorised to manipulate Tokens linked to this Compliance.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _country | uint16 | Country to be unrestricted, should be expressed by following numeric ISO 3166-1 standard  Can be called only for a compliance contract that is bound to the CountryRestrict Module  Only the owner of the Compliance smart contract can call this function  emits an `RemovedRestrictedCountry` event |

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

### unbindCompliance

```solidity
function unbindCompliance(address _compliance) external nonpayable
```



*See {IModule-unbindCompliance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance | address | undefined |

### upgradeTo

```solidity
function upgradeTo(address newImplementation) external nonpayable
```



*Upgrade the implementation of the proxy to `newImplementation`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newImplementation | address | undefined |

### upgradeToAndCall

```solidity
function upgradeToAndCall(address newImplementation, bytes data) external payable
```



*Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call encoded in `data`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newImplementation | address | undefined |
| data | bytes | undefined |



## Events

### AddedRestrictedCountry

```solidity
event AddedRestrictedCountry(address indexed _compliance, uint16 _country)
```

this event is emitted whenever a Country has been restricted.  the event is emitted by &#39;addCountryRestriction&#39; and &#39;batchRestrictCountries&#39; functions.  `_country` is the numeric ISO 3166-1 of the restricted country.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance `indexed` | address | undefined |
| _country  | uint16 | undefined |

### AdminChanged

```solidity
event AdminChanged(address previousAdmin, address newAdmin)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousAdmin  | address | undefined |
| newAdmin  | address | undefined |

### BeaconUpgraded

```solidity
event BeaconUpgraded(address indexed beacon)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| beacon `indexed` | address | undefined |

### ComplianceBound

```solidity
event ComplianceBound(address indexed _compliance)
```

this event is emitted when the compliance contract is bound to the module.  the event is emitted by the bindCompliance function  `_compliance` is the address of the compliance contract being bound



#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance `indexed` | address | undefined |

### ComplianceUnbound

```solidity
event ComplianceUnbound(address indexed _compliance)
```

this event is emitted when the compliance contract is unbound from the module.  the event is emitted by the unbindCompliance function  `_compliance` is the address of the compliance contract being unbound



#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance `indexed` | address | undefined |

### Initialized

```solidity
event Initialized(uint8 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint8 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### RemovedRestrictedCountry

```solidity
event RemovedRestrictedCountry(address indexed _compliance, uint16 _country)
```

this event is emitted whenever a Country has been unrestricted.  the event is emitted by &#39;removeCountryRestriction&#39; and &#39;batchUnrestrictCountries&#39; functions.  `_country` is the numeric ISO 3166-1 of the unrestricted country.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _compliance `indexed` | address | undefined |
| _country  | uint16 | undefined |

### Upgraded

```solidity
event Upgraded(address indexed implementation)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| implementation `indexed` | address | undefined |



