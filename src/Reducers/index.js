import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import * as actions from '../Actions';

const user = handleActions(
  {
    [actions.login](state, { payload: { user: userData } }) {
      console.log('работает')
      return userData;
    },
    [actions.loginSuccess](state, { payload: { user: userData } }) {
      return userData;
    },
    [actions.loginFailure](state, { payload: { errors } }) {
      return { errors };
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
