import ACTIONS from '../constants/action';

const initialState = {
  data: [],
  count: 0,
  error: null,
  loading: false,
};

const getRowsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.GET_ROWS:
      return {
        ...state,
        loading: true,
      };

    case ACTIONS.ROWS_RECEIVED:
      return {
        ...state,
        data: (payload && payload.result && payload.result.items) || [],
        count: (payload && payload.result && payload.result.count) || 0,
        loading: false,
        error: payload.error || null,
      };

    default:
      return state;
  }
};

export default getRowsReducer;
