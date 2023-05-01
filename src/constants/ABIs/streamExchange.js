export const streamExchangeABI = [
	{
		inputs: [],
		name: 'lastDistributedAt',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint32', name: '', type: 'uint32' }],
		name: 'outputPools',
		outputs: [
			{ internalType: 'contract ISuperToken', name: 'token', type: 'address' },
			{ internalType: 'uint128', name: 'feeRate', type: 'uint128' },
			{ internalType: 'uint256', name: 'emissionRate', type: 'uint256' },
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'shareScaler',
		outputs: [{ internalType: 'uint128', name: '', type: 'uint128' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: '_owner', type: 'address' },
			{ internalType: 'contract ISuperfluid', name: '_host', type: 'address' },
			{ internalType: 'contract IConstantFlowAgreementV1', name: '_cfa', type: 'address' },
			{ internalType: 'contract IInstantDistributionAgreementV1', name: '_ida', type: 'address' },
			{ internalType: 'string', name: '_registrationKey', type: 'string' },
			{ internalType: 'contract IREXReferral', name: '_rexReferral', type: 'address' },
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'uint256', name: 'totalAmount', type: 'uint256' },
			{ indexed: false, internalType: 'uint256', name: 'feeCollected', type: 'uint256' },
			{ indexed: false, internalType: 'address', name: 'token', type: 'address' },
		],
		name: 'Distribution',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		inputs: [
			{ internalType: 'contract ISuperToken', name: '_token', type: 'address' },
			{ internalType: 'uint128', name: '_feeRate', type: 'uint128' },
			{ internalType: 'uint256', name: '_emissionRate', type: 'uint256' },
			{ internalType: 'uint256', name: '_requestId', type: 'uint256' },
			{ internalType: 'uint128', name: '_shareScaler', type: 'uint128' },
		],
		name: 'addOutputPool',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'contract ISuperToken', name: '_superToken', type: 'address' },
			{ internalType: 'address', name: '_agreementClass', type: 'address' },
			{ internalType: 'bytes32', name: '', type: 'bytes32' },
			{ internalType: 'bytes', name: '_agreementData', type: 'bytes' },
			{ internalType: 'bytes', name: '', type: 'bytes' },
			{ internalType: 'bytes', name: '_ctx', type: 'bytes' },
		],
		name: 'afterAgreementCreated',
		outputs: [{ internalType: 'bytes', name: '_newCtx', type: 'bytes' }],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'contract ISuperToken', name: '_superToken', type: 'address' },
			{ internalType: 'address', name: '_agreementClass', type: 'address' },
			{ internalType: 'bytes32', name: '', type: 'bytes32' },
			{ internalType: 'bytes', name: '_agreementData', type: 'bytes' },
			{ internalType: 'bytes', name: '_cbdata', type: 'bytes' },
			{ internalType: 'bytes', name: '_ctx', type: 'bytes' },
		],
		name: 'afterAgreementTerminated',
		outputs: [{ internalType: 'bytes', name: '_newCtx', type: 'bytes' }],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'contract ISuperToken', name: '_superToken', type: 'address' },
			{ internalType: 'address', name: '_agreementClass', type: 'address' },
			{ internalType: 'bytes32', name: '', type: 'bytes32' },
			{ internalType: 'bytes', name: '_agreementData', type: 'bytes' },
			{ internalType: 'bytes', name: '_cbdata', type: 'bytes' },
			{ internalType: 'bytes', name: '_ctx', type: 'bytes' },
		],
		name: 'afterAgreementUpdated',
		outputs: [{ internalType: 'bytes', name: '_newCtx', type: 'bytes' }],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'contract ISuperToken', name: '_superToken', type: 'address' },
			{ internalType: 'address', name: '_agreementClass', type: 'address' },
			{ internalType: 'bytes32', name: '', type: 'bytes32' },
			{ internalType: 'bytes', name: '_agreementData', type: 'bytes' },
			{ internalType: 'bytes', name: '', type: 'bytes' },
		],
		name: 'beforeAgreementCreated',
		outputs: [{ internalType: 'bytes', name: '_cbdata', type: 'bytes' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'contract ISuperToken', name: '_superToken', type: 'address' },
			{ internalType: 'address', name: '_agreementClass', type: 'address' },
			{ internalType: 'bytes32', name: '', type: 'bytes32' },
			{ internalType: 'bytes', name: '_agreementData', type: 'bytes' },
			{ internalType: 'bytes', name: '', type: 'bytes' },
		],
		name: 'beforeAgreementTerminated',
		outputs: [{ internalType: 'bytes', name: '_cbdata', type: 'bytes' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'contract ISuperToken', name: '_superToken', type: 'address' },
			{ internalType: 'address', name: '_agreementClass', type: 'address' },
			{ internalType: 'bytes32', name: '', type: 'bytes32' },
			{ internalType: 'bytes', name: '_agreementData', type: 'bytes' },
			{ internalType: 'bytes', name: '_ctx', type: 'bytes' },
		],
		name: 'beforeAgreementUpdated',
		outputs: [{ internalType: 'bytes', name: '_cbdata', type: 'bytes' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'bytes', name: 'ctx', type: 'bytes' }],
		name: 'distribute',
		outputs: [{ internalType: 'bytes', name: 'newCtx', type: 'bytes' }],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'address', name: 'streamer', type: 'address' }],
		name: 'emergencyCloseStream',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{ inputs: [], name: 'emergencyDrain', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: '_requestId', type: 'uint256' }],
		name: 'getCurrentValue',
		outputs: [
			{ internalType: 'bool', name: '_ifRetrieve', type: 'bool' },
			{ internalType: 'uint256', name: '_value', type: 'uint256' },
			{ internalType: 'uint256', name: '_timestampRetrieved', type: 'uint256' },
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint32', name: '_index', type: 'uint32' }],
		name: 'getEmissionRate',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint32', name: '_index', type: 'uint32' }],
		name: 'getFeeRate',
		outputs: [{ internalType: 'uint128', name: '', type: 'uint128' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint32', name: '_index', type: 'uint32' },
			{ internalType: 'address', name: '_streamer', type: 'address' },
		],
		name: 'getIDAShares',
		outputs: [
			{ internalType: 'bool', name: '_exist', type: 'bool' },
			{ internalType: 'bool', name: '_approved', type: 'bool' },
			{ internalType: 'uint128', name: '_units', type: 'uint128' },
			{ internalType: 'uint256', name: '_pendingDistribution', type: 'uint256' },
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getInputToken',
		outputs: [{ internalType: 'contract ISuperToken', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getLastDistributionAt',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'contract ISuperToken', name: 'token', type: 'address' }],
		name: 'getOracleInfo',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'requestId', type: 'uint256' },
					{ internalType: 'uint256', name: 'usdPrice', type: 'uint256' },
					{ internalType: 'uint256', name: 'lastUpdatedAt', type: 'uint256' },
				],
				internalType: 'struct REXMarket.OracleInfo',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint32', name: '_index', type: 'uint32' }],
		name: 'outputPool',
		outputs: [
			{
				components: [
					{ internalType: 'contract ISuperToken', name: 'token', type: 'address' },
					{ internalType: 'uint128', name: 'feeRate', type: 'uint128' },
					{ internalType: 'uint256', name: 'emissionRate', type: 'uint256' },
					{ internalType: 'uint128', name: 'shareScaler', type: 'uint128' },
				],
				internalType: 'struct REXMarket.OutputPool',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getRateTolerance',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: '_streamer', type: 'address' },
			{ internalType: 'contract ISuperToken', name: '_token', type: 'address' },
		],
		name: 'getStreamRate',
		outputs: [{ internalType: 'int96', name: '_requesterFlowRate', type: 'int96' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getTellorOracle',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getTotalInflow',
		outputs: [{ internalType: 'int96', name: '', type: 'int96' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'contract ISuperToken', name: '_inputToken', type: 'address' },
			{ internalType: 'uint256', name: '_rateTolerance', type: 'uint256' },
			{ internalType: 'contract ITellor', name: '_tellor', type: 'address' },
			{ internalType: 'uint256', name: '_inputTokenRequestId', type: 'uint256' },
			{ internalType: 'uint128', name: '_affiliateFee', type: 'uint128' },
			{ internalType: 'uint128', name: '_feeRate', type: 'uint128' },
		],
		name: 'initializeMarket',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '_emissionRate', type: 'uint256' }],
		name: 'initializeSubsidies',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'contract ISuperToken', name: '_inputTokenA', type: 'address' },
			{ internalType: 'uint256', name: '_inputTokenARequestId', type: 'uint256' },
			{ internalType: 'uint128', name: '_inputTokenAShareScaler', type: 'uint128' },
			{ internalType: 'contract ISuperToken', name: '_inputTokenB', type: 'address' },
			{ internalType: 'uint256', name: '_inputTokenBRequestId', type: 'uint256' },
			{ internalType: 'uint128', name: '_inputTokenBShareScaler', type: 'uint128' },
			{ internalType: 'uint128', name: '_feeRate', type: 'uint128' },
			{ internalType: 'uint256', name: '_rateTolerance', type: 'uint256' },
		],
		name: 'initializeTwoWayMarket',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'isAppJailed',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{ inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [],
		name: 'ric',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint32', name: '_index', type: 'uint32' },
			{ internalType: 'uint128', name: '_emissionRate', type: 'uint128' },
		],
		name: 'setEmissionRate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint32', name: '_index', type: 'uint32' },
			{ internalType: 'uint128', name: '_feeRate', type: 'uint128' },
		],
		name: 'setFeeRate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '_rate', type: 'uint256' }],
		name: 'setRateTolerance',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'contract ISuperToken', name: '_token', type: 'address' }],
		name: 'updateTokenPrice',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{ inputs: [], name: 'updateTokenPrices', outputs: [], stateMutability: 'nonpayable', type: 'function' },
];
