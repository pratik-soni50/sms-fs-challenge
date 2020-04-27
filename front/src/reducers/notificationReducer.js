import ACTIONS from '../constants/action';

const defaultState = {
  list: [],
};

const notificationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.ENQUEUE_NOTIFICATION:
      return {
        ...state,
        list: [...state.list, { ...action.list }],
      };

    case ACTIONS.REMOVE_NOTIFICATION:
      return {
        ...state,
        list: state.list.filter(
          notification => notification.key !== action.key,
        ),
      };

    default:
      return state;
  }
};

export default notificationReducer;
