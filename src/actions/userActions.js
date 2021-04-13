import { getUsers } from "../services/http/getUsers";
import { GET_ALL, LOADING, ERROR, HIDE_LOADING } from "../types/userTypes";

export const userGetAll = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const getUsersAxios = await getUsers();
    const { data } = getUsersAxios;

    dispatch({
      type: GET_ALL,
      payload: data,
    });
  } catch (error) {
    console.log("Error: " + error.message);
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  } finally {
    dispatch({
      type: HIDE_LOADING,
    });
  }
};
