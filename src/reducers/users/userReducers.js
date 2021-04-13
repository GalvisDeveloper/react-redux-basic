import { GET_ALL, LOADING, ERROR, HIDE_LOADING } from "../../types/userTypes";

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: "",
};

const userReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL:
      return { ...state, users: action.payload, loading: false };

    case LOADING:
      return { ...state, loading: true };

    case HIDE_LOADING:
      return { ...state, loading: false };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default userReducers;
