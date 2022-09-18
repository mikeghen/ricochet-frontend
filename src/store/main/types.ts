import Web3 from 'web3';
import { Coin } from '../../constants/coins';

export type MainState = {
	web3: Web3;
	readWeb3: Web3;
	address: string;
	balances?: { [key: string]: string };
	coingeckoPrices?: { [key: string]: number };
	hasUsdcApprove?: boolean;
	hasDaiApprove?: boolean;
	hasMkrApprove?: boolean;
	hasWethApprove?: boolean;
	hasWbtcApprove?: boolean;
	hasMaticApprove?: boolean;
	hasSushiApprove?: boolean;
	hasIdleApprove?: boolean;
	hasIbAlluoUSDApprove?: boolean;
	hasIbAlluoETHApprove?: boolean;
	apy?: number;
	rewardsApy?: number;
	feesApy?: number;
	usdcRicFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	usdcSlpEthFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	usdcWethFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	daiMkrFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	mkrDaiFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	usdcMkrFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	mkrUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	daiMaticFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	maticDaiFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	usdcMaticFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	maticUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	daiEthFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	ethDaiFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	usdcWbtcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	wethUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	wbtcUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	usdcIdleFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWayusdcWethFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWaywethUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWaywbtcUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWayusdcWbtcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWayDaiWethFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWayWethDaiFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWayRicUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWayUsdcRicFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWayMaticUsdcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWayUsdcMaticFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWayMaticDaiFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWayDaiMaticFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWayWbtcDaiFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWayDaiWbtcFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWayIbUsdIbEthFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	twoWayIbEthIbUsdFlowQuery?: {
		flowKey: string;
		flowsReceived: number;
		flowsOwned: string;
		totalFlows: number;
		placeholder: string;
		subsidyRate: { perso: number; total: number; endDate: string };
		streamedSoFar?: number;
		streamedSoFarTimestamp?: number;
		receivedSoFar?: number;
		receivedSoFarTimestamp?: number;
	};
	isLoadingDowngrade: boolean;
	isLoadingUpgrade: boolean;
	isLoading: boolean;
	selectedDowngradeCoin: Coin;
	selectedUpgradeCoin: Coin;
	coinType: Coin;
	isReadOnly: boolean;
	referralId?: string;
};
