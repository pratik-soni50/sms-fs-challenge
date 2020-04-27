import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import appConfig from '../appConfig';
import { rowDeleted, errorNotification, sucessNotification } from '../actionCreator';

export default function* deleteRowSaga({ payload }) {
  try {
    const { data } = yield call(axios.delete,
      `${appConfig.API_URL}/data/${payload}`,
      payload
    );
    const { status, error, result } = data;
    yield put(rowDeleted({ error, result }));
    if (status) {
      yield put(sucessNotification('Item deleted successfully'));
    } else {
      yield put(errorNotification('Some issues in deleting data'));
    }
  } catch (e) {
    yield put(rowDeleted({ error: 'Server Error' }));
    yield put(errorNotification('Server Error'));
    console.error(e);
  }
}
