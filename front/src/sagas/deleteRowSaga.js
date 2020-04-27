import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import appConfig from '../appConfig';
import { rowDeleted, errorNotification, sucessNotification } from '../actionCreator';
import parseMessage from '../utils/parseMessage';

export default function* deleteRowSaga({ payload }) {
  try {
    const { data } = yield call(axios.delete,
      `${appConfig.API_URL}/data/${payload}`,
      payload
    );
    const { status, error, result } = data;
    yield put(rowDeleted({ error, result }));
    if (error) {
      yield put(errorNotification(parseMessage(error)));
    } else if (status) {
      yield put(sucessNotification('Item deleted successfully'));
    } else {
      yield put(errorNotification('Somthing went wrong, Please try again'));
    }
  } catch (e) {
    yield put(rowDeleted({ error: 'Server Error' }));
    yield put(errorNotification('Server Error'));
    console.error(e);
  }
}
