const INITIAL_STATE = {
  users: [],
};

const userReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "getUsers":
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default userReducers;
