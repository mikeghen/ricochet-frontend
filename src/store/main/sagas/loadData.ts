import { put, call, all } from 'redux-saga/effects';
import { Unwrap } from 'types/unwrap';
import { checkAvailable } from 'utils/checkAvailable';
import { getAddress } from 'utils/getAddress';
import { mainSetState } from '../actionCreators';
import { checkIfApproveDai, checkIfApproveWeth } from './checkIfApprove';
import { getBalances } from './getBalances';
import { sweepQueryFlow } from './sweepQueryFlow';

export function* loadData() {
  try {
    yield put(mainSetState({ disabled: true }));
    
    const disabled: Unwrap<typeof checkAvailable> = yield call(checkAvailable);
    if (disabled) {
      yield put(mainSetState({ disabled: true }));
      throw new Error('Metamask is not connected');
    }
    const address: Unwrap<typeof getAddress> = yield call(getAddress);
    
    yield all([
      call(getBalances, address),
      call(checkIfApproveDai),
      call(checkIfApproveWeth),
      call(sweepQueryFlow),
    ]);

    yield put(mainSetState({ address, disabled: false })); 
  } catch (e) {
    yield put(mainSetState({ disabled: true }));
  } 
} 
