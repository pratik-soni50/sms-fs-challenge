import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import appConfig from '../appConfig';
import { rowsReceived, errorNotification, sucessNotification } from '../actionCreator';

export default function* getRowsSaga(action) {
  try {
    const { data } = yield call(axios.get, `${appConfig.API_URL}/data`, { params: action.payload });
    const { status, error, result } = data;
    yield put(rowsReceived({ error, result }));
    if (status) {
      yield put(sucessNotification('Data recieved Successfully'));
    } else {
      yield put(errorNotification('Found some issues in recieving data'));
    }
  } catch (e) {
    yield put(rowsReceived({ error: 'Server Error' }));
    yield put(errorNotification('Server Error'));
    console.error(e);
  }
}
