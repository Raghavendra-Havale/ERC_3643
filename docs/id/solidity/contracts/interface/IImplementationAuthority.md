# IImplementationAuthority









## Methods

### getImplementation

```solidity
function getImplementation() external view returns (address)
```



*returns the address of the implementation*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### updateImplementation

```solidity
function updateImplementation(address _newImplementation) external nonpayable
```



*updates the address used as implementation by the proxies linked to this ImplementationAuthority contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newImplementation | address | the address of the new implementation contract only Owner can call |



## Events

### UpdatedImplementation

```solidity
event UpdatedImplementation(address newAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newAddress  | address | undefined |



