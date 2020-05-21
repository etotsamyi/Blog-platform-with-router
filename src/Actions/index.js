import axios from "axios";
import { createAction } from "redux-actions";

export const login = createAction("LOGIN_REQUEST");
export const loginSuccess = createAction("LOGIN_SUCCESS");
export const loginFailure = createAction("LOGIN_FAILURE");

export const loginUser = (values) => async (dispatch) => {
  console.log('работает')
  dispatch(login());
  try {
    const response = await axios.post('https://conduit.productionready.io/api/users/login', { 'user': values });
    dispatch(loginSuccess(response));
    console.log(response);
  } catch (error) {
    console.log(error);
    dispatch(loginFailure());
  }
};
