import ACTIONS from '../constants/action';

const initialState = {
  result: null,
  error: null,
  loading: false,
};

const deleteRowReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.DELETE_ROW:
      return {
        ...state,
        loading: true,
      };

    case ACTIONS.ROW_DELETED:
      return {
        ...state,
        result: (payload && payload.result) || null,
        loading: false,
        error: (payload && payload.error) || null,
      };


    case ACTIONS.CLEAR_DELETE_ROW:
      return initialState;

    default:
      return state;
  }
};

export default deleteRowReducer;
