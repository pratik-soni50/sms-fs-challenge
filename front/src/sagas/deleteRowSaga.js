import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import appConfig from '../appConfig';
import { rowDeleted } from '../actionCreator';

export default function* deleteRowSaga({ payload }) {
  try {
    const { data } = yield call(axios.delete,
      `${appConfig.API_URL}/data/${payload}`,
      payload
    );
    const { status, error, result } = data;
    yield put(rowDeleted({ error, result }));
    if (status) {
      // @TODO: Show notification
    } else {
      // @TODO: Show notification
    }
  } catch (e) {
    yield put(rowDeleted({ error: 'Server Error' }));
    // @TODO: Show notification
    console.error(e);
  }
}
