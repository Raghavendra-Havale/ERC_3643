# IIAFactory









## Methods

### deployIA

```solidity
function deployIA(address _token) external nonpayable returns (address)
```



*deploy a new TREXImplementationAuthority smart contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | the token for which the new IA will be used  function called by the `changeImplementationAuthority` function  can be called only by the reference TREXImplementationAuthority contract  the new contract deployed will contain all the versions from reference IA  the new contract will be set on the same version as the reference IA  ownership of the new IA is transferred to the Owner of the token  emits a `ImplementationAuthorityDeployed` event  returns the address of the IA contract deployed |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### deployedByFactory

```solidity
function deployedByFactory(address _ia) external view returns (bool)
```



*function used to know if an IA contract was deployed by the factory or not*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _ia | address | the address of TREXImplementationAuthority contract |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |



## Events

### ImplementationAuthorityDeployed

```solidity
event ImplementationAuthorityDeployed(address indexed _ia)
```

event emitted when a new TREXImplementationAuthority is deployed



#### Parameters

| Name | Type | Description |
|---|---|---|
| _ia `indexed` | address | undefined |



