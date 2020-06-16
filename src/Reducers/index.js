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

const createArticle = handleActions(
  {
    [actions.createArticleRequest](_state) {
      return "create-requested";
    },
    [actions.createArticleSuccess](_state, { payload: article }) {
      return "create-succes";
    },
    [actions.createArticleFailure](_state) {
      return "create-error";
    },
  },
  {}
);

const articleList = handleActions(
  {
    [actions.getArticlesRequest](_state) {
      return "getting-requested";
    },
    [actions.getArticlesSuccess](_state, { payload: articles }) {
      return [...articles];
    },
    [actions.getArticlesFailure](_state) {
      return "getting-error";
    },
  },
  []
);

const articlesCount = handleActions(
  {
    [actions.getTotalArticlesCount](_state, { payload: totalCount }) {
      return totalCount;
    },
  },
  0
);

const currentPage = handleActions(
  {
    [actions.switchPage](_state, { payload: page }) {
      return page;
    },
  },
  1
);

export default combineReducers({
  user,
  registerStatus,
  createArticle,
  articleList,
  articlesCount,
  currentPage,
});
