import { takeLatest, takeEvery } from 'redux-saga/effects';
import ACTIONS from '../constants/action';
import getRowsSaga from './getRowsSaga';
import addEditSaga from './addEditRowSaga';

export default function* rootSaga() {
  yield takeLatest(ACTIONS.GET_ROWS, getRowsSaga);
  yield takeEvery(ACTIONS.ADD_EDIT_ROW, addEditSaga);
}
