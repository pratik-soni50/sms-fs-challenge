import ACTIONS from '../constants/action';

const initialState = {
  result: null,
  error: null,
  loading: false,
};

const addEditRowReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_EDIT_ROW:
      return {
        ...state,
        loading: true,
      };

    case ACTIONS.ROW_ADDED_EDITED:
      return {
        ...state,
        result: (payload && payload.result) || null,
        loading: false,
        error: (payload && payload.error) || null,
      };

    case ACTIONS.CLEAR_ADD_EDIT_ROW:
      return initialState;

    default:
      return state;
  }
};

export default addEditRowReducer;
