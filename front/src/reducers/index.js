import { combineReducers } from 'redux';
import getRows from './getRowsReducer';
import addEditRow from './addEditRowReducer';

export default combineReducers({
  getRows,
  addEditRow,
});
