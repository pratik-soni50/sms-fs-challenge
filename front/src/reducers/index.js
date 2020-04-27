import { combineReducers } from 'redux';
import getRows from './getRowsReducer';
import addEditRow from './addEditRowReducer';
import deleteRow from './deleteRowReducer';
import notification from './notificationReducer';

export default combineReducers({
  getRows,
  addEditRow,
  deleteRow,
  notification,
});
