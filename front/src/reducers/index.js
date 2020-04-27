import { combineReducers } from 'redux';
import getRows from './getRowsReducer';
import addEditRow from './addEditRowReducer';
import deleteRow from './deleteRowReducer';

export default combineReducers({
  getRows,
  addEditRow,
  deleteRow,
});
