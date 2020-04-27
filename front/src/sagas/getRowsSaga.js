import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import appConfig from '../appConfig';
import { rowsReceived, errorNotification } from '../actionCreator';
import parseMessage from '../utils/parseMessage';

export default function* getRowsSaga(action) {
  try {
    const { data } = yield call(axios.get, `${appConfig.API_URL}/data`, { params: action.payload });
    const { status, error, result } = data;
    yield put(rowsReceived({ error, result }));
    if (error) {
      yield put(errorNotification(parseMessage(error)));
    } else if (!status) {
      yield put(errorNotification('Somthing went wrong, Please try again'));
    }
  } catch (e) {
    yield put(rowsReceived({ error: 'Server Error' }));
    yield put(errorNotification('Server Error'));
    console.error(e);
  }
}
