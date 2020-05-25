import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import * as actions from '../Actions';

const user = handleActions(
  {
    [actions.login](_state) {
      console.log('редьюсер')
      return 'requested';
    },
    [actions.loginSuccess](_state, { 
      payload: userData
    }) {
      return userData;
    },
    [actions.loginFailure](_state) {
      return 'error';
    }
  },
  {}
);

// const userLoginFetching = handleActions(
//   {
//     [actions.login]() {
//       return 'requested';
//     },
//     [actions.loginSuccess]() {
//       return 'finished';
//     },
//     [actions.loginFailure]() {
//       return 'failed';
//     },
//   },
//   'none'
// );

export default combineReducers({
  // loggedIn,
  user,
  // userLoginFetching,
});
