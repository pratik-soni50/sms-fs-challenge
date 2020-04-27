import { takeLatest, takeEvery } from 'redux-saga/effects';
import ACTIONS from '../constants/action';
import getRowsSaga from './getRowsSaga';
import addEditSaga from './addEditRowSaga';
import deleteRowSaga from './deleteRowSaga';

export default function* rootSaga() {
  yield takeLatest(ACTIONS.GET_ROWS, getRowsSaga);
  yield takeEvery(ACTIONS.ADD_EDIT_ROW, addEditSaga);
  yield takeEvery(ACTIONS.DELETE_ROW, deleteRowSaga);
}
