import { combineReducers } from 'redux';
import getRowsReducer from './getRowsReducer';


export default combineReducers({
  getRows: getRowsReducer,
});
