# ITREXFactory









## Methods

### deployTREXSuite

```solidity
function deployTREXSuite(string _salt, ITREXFactory.TokenDetails _tokenDetails, ITREXFactory.ClaimDetails _claimDetails) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _salt | string | undefined |
| _tokenDetails | ITREXFactory.TokenDetails | undefined |
| _claimDetails | ITREXFactory.ClaimDetails | undefined |

### getIdFactory

```solidity
function getIdFactory() external view returns (address)
```



*getter for identity factory address*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getImplementationAuthority

```solidity
function getImplementationAuthority() external view returns (address)
```



*getter for implementation authority address*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getToken

```solidity
function getToken(string _salt) external view returns (address)
```



*getter for token address corresponding to salt string*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _salt | string | The salt string that was used to deploy the token |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### recoverContractOwnership

```solidity
function recoverContractOwnership(address _contract, address _newOwner) external nonpayable
```



*function that can be used to recover the ownership of contracts owned by the factory  typically used for IRS contracts owned by the factory (ownership of IRS is mandatory to call bind function)*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _contract | address | The smart contract address |
| _newOwner | address | The address to transfer ownership to  Only owner can call. |

### setIdFactory

```solidity
function setIdFactory(address _idFactory) external nonpayable
```



*setter for identity factory contract address  the identity factory contract is used by the TREX Factory to deploy the ONCHAINID  of the token in case the ONCHAINID is not specified  Only owner can call.  emits `IdFactorySet` event*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _idFactory | address | The address of the identity factory contract |

### setImplementationAuthority

```solidity
function setImplementationAuthority(address _implementationAuthority) external nonpayable
```



*setter for implementation authority contract address  the implementation authority contract contains the addresses of all implementation contracts  the proxies created by the factory will use the different implementations available  in the implementation authority contract  Only owner can call.  emits `ImplementationAuthoritySet` event*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _implementationAuthority | address | The address of the implementation authority smart contract |



## Events

### Deployed

```solidity
event Deployed(address indexed _addr)
```

event emitted whenever a single contract is deployed by the factory



#### Parameters

| Name | Type | Description |
|---|---|---|
| _addr `indexed` | address | undefined |

### IdFactorySet

```solidity
event IdFactorySet(address _idFactory)
```

event emitted when the Identity Factory is set



#### Parameters

| Name | Type | Description |
|---|---|---|
| _idFactory  | address | undefined |

### ImplementationAuthoritySet

```solidity
event ImplementationAuthoritySet(address _implementationAuthority)
```

event emitted when the implementation authority of the factory contract is set



#### Parameters

| Name | Type | Description |
|---|---|---|
| _implementationAuthority  | address | undefined |

### TREXSuiteDeployed

```solidity
event TREXSuiteDeployed(address indexed _token, address _ir, address _irs, address _tir, address _ctr, address _mc, string indexed _salt)
```

event emitted by the factory when a full suite of T-REX contracts is deployed



#### Parameters

| Name | Type | Description |
|---|---|---|
| _token `indexed` | address | undefined |
| _ir  | address | undefined |
| _irs  | address | undefined |
| _tir  | address | undefined |
| _ctr  | address | undefined |
| _mc  | address | undefined |
| _salt `indexed` | string | undefined |



