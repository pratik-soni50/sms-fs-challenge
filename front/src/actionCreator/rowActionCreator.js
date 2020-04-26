import ACTIONS from '../constants/action';

export const getRows = payload => ({
  type: ACTIONS.GET_ROWS,
  payload,
});

export const rowsReceived = payload => ({
  type: ACTIONS.ROWS_RECEIVED,
  payload,
});

export const getSingleRow = payload => ({
  type: ACTIONS.GET_SINGLE_ROW,
  payload,
});

export const singleRowRecieved = payload => ({
  type: ACTIONS.SINGLE_ROW_RECEIVED,
  payload,
});

export const addEditRow = payload => ({
  type: ACTIONS.ADD_EDIT_ROW,
  payload,
});

export const rowAddedEdited = payload => ({
  type: ACTIONS.ROW_ADDED_EDITED,
  payload,
});

export const clearAddEditRow = payload => ({
  type: ACTIONS.CLEAR_ADD_EDIT_ROW,
  payload,
});
