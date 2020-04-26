import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import appConfig from '../appConfig';
import { rowAddedEdited } from '../actionCreator';

export default function* addEditRowSaga({ payload }) {
  try {
    const { data } = yield call(payload.id ? axios.put : axios.post, `${appConfig.API_URL}/data`, payload);
    const { status, error, result } = data;
    yield put(rowAddedEdited({ error, result }));
    if (status) {
      // @TODO: Show notification
    } else {
      // @TODO: Show notification
    }
  } catch (e) {
    yield put(rowAddedEdited({ error: 'Server Error' }));
    // @TODO: Show notification
    console.error(e);
  }
}
