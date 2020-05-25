import axios from "axios";
import { createAction } from "redux-actions";

export const login = createAction("LOGIN_REQUEST");
export const loginSuccess = createAction("LOGIN_SUCCESS");
export const loginFailure = createAction("LOGIN_FAILURE");

export const loginUser = (values) => async (dispatch) => {
  console.log("экшен");
  dispatch(login(values));
  try {
    const response = await axios.post(
      "https://conduit.productionready.io/api/users/login",
      { user: values }
    );
    if (response.status === 200) {
      const token = response.data.user.token;
      const userName = response.data.user.username;
      console.log('response', response);
      dispatch(loginSuccess({
        userName: userName,
        token: token,
      }));
      localStorage.setItem("user", userName);
      localStorage.setItem("token", token);
      console.log(localStorage.getItem("token"), localStorage.getItem("user"), 'localstorage');
    }
  } catch (error) {
    console.log(error);
    dispatch(loginFailure());
    throw error;
  }
};
