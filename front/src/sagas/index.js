import { takeLatest, takeEvery } from 'redux-saga/effects';
import ACTIONS from '../constants/action';
import getRowsSaga from './getRowsSaga';

export default function* rootSaga() {
  yield takeLatest(ACTIONS.GET_ROWS, getRowsSaga);

}