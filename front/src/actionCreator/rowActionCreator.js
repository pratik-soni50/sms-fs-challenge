import ACTIONS from '../constants/action';

export const getRows = payload => ({
  type: ACTIONS.GET_ROWS,
  payload,
});

export const rowsReceived = payload => ({
  type: ACTIONS.ROWS_RECEIVED,
  payload,
});
