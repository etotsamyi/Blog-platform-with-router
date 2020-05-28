import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import * as actions from "../Actions";

const user = handleActions(
  {
    [actions.login](_state) {
      return "requested";
    },
    [actions.loginSuccess](_state, { payload: userData }) {
      return userData;
    },
    [actions.loginFailure](_state) {
      return "error";
    },
    [actions.logout](_state) {
      return {};
    },
  },
  {}
);

const registerStatus = handleActions(
  {
    [actions.register](_state) {
      return "requested";
    },
    [actions.registerSuccess](_state) {
      return "register-success";
    },
    [actions.registerFailure](_state) {
      return "register-error";
    },
  },
  {}
);

export default combineReducers({
  user,
  registerStatus,
});
