import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import appConfig from '../appConfig';
import { rowAddedEdited, errorNotification, sucessNotification } from '../actionCreator';
import parseMessage from '../utils/parseMessage';

export default function* addEditRowSaga({ payload }) {
  try {
    const { data } = yield call(
      payload.id ? axios.put : axios.post,
      `${appConfig.API_URL}/data/${payload.id || ''}`,
      payload
    );
    const { status, error, result } = data;
    yield put(rowAddedEdited({ error, result }));
    if (error) {
      yield put(errorNotification(parseMessage(error)));
    } else if (status) {
      yield put(sucessNotification(`Data submited successfully`));
    } else {
      yield put(errorNotification('Somthing went wrong, Please try again'));
    }
  } catch (e) {
    yield put(rowAddedEdited({ error: 'Server Error' }));
    yield put(errorNotification('Server Error'));
    console.error(e);
  }
}
