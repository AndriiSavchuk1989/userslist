import {
  FETCH_ALL_USERS_START,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_ERROR
} from "../actions/actions_types";

const initialState = {
  users: []
};

const users = (state = initialState, action) => {
  switch (action) {
    case FETCH_ALL_USERS_START: {
      return { ...state };
    }
    case FETCH_ALL_USERS_SUCCESS: {
      return {
        ...state,
        users: [...state.users, ...action.payload]
      };
    }
    case FETCH_ALL_USERS_ERROR: {
      return;
    }
    default:
      return state;
  }
};

export default users;
