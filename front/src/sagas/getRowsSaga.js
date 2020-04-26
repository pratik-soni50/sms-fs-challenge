import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import appConfig from '../appConfig';
import { rowsReceived } from '../actionCreator';

export default function* getRowsSaga(action) {
  try {
    const { data } = yield call(axios.get, `${appConfig.API_URL}/data`, { params: action.payload });
    const { status, error, result } = data;
    yield put(rowsReceived({ error, result }));
    if (status) {
      // @TODO: Show notification
    } else {
      // @TODO: Show notification
    }
  } catch (e) {
    yield put(rowsReceived({ error: 'Server Error' }));
    // @TODO: Show notification
    console.error(e);
  }
}
