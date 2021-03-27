import { getUsers } from "../services/http/getUsers";

export const userActions = () => async (dispatch) => {
  const getUsersAxios = await getUsers();
  const { data } = getUsersAxios;
  dispatch({
    type: "getUsers",
    payload: data,
  });
};

// export default userActions;
