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
    [actions.createArticleSuccess](_state) {
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
    [actions.expandText](_state, { payload: slug }) {
      const newState = _state.map((article) => {
        if (article.slug === slug) {
          article.expanded = !article.expanded;
          return article;
        }
        return article;
      });
      return newState;
    },
    [actions.putFavoriteSuccess](_state, { payload: data }) {
      const { slug, article } = data;
      const newState = _state.map((el) => {
        if (el.slug === slug) {
          return article;
        }
        return el;
      });
      return newState;
    },
    [actions.unPutFavoriteSuccess](_state, { payload: data }) {
      const { slug, article } = data;
      const newState = _state.map((el) => {
        if (el.slug === slug) {
          return article;
        }
        return el;
      });
      return newState;
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

const favoriteFetch = handleActions(
  {
    [actions.putFavoriteRequest](_state) {
      return "putting-requested";
    },
    [actions.putFavoriteSuccess](_state) {
      return "putting-success";
    },
    [actions.putFavoriteFailure](_state, { payload: error }) {
      return error;
    },
    [actions.unPutFavoriteRequest](_state) {
      return "unputting-requested";
    },
    [actions.unPutFavoriteSuccess](_state) {
      return "unputting-success";
    },
    [actions.unPutFavoriteFailure](_state) {
      return "unputting-error";
    },
  },
  ""
);

const currentPage = handleActions(
  {
    [actions.switchPage](_state, { payload: page }) {
      return page;
    },
  },
  1
);

const singleArticle = handleActions(
  {
    [actions.getSingleArticleRequest](_state) {
      return "getting-requested";
    },
    [actions.getSingleArticleSuccess](_state, { payload: article }) {
      return article;
    },
    [actions.getSingleArticleFailure](_state) {
      return "getting-error";
    },
    [actions.clearSingleArticle](_state) {
      return "";
    },
    [actions.putFavoriteSuccess](_state, { payload: data }) {
      const { article } = data;
      return article;
    },
    [actions.unPutFavoriteSuccess](_state, { payload: data }) {
      const { article } = data;
      return article;
    },
  },
  ""
);

const isEditing = handleActions(
  {
    [actions.startEditing](_state) {
      return true;
    },
    [actions.endEditing](_state) {
      return false;
    },
  },
  false
);

const editFetch = handleActions(
  {
    [actions.editArticleRequest](_state) {
      return "edit-requested";
    },
    [actions.editArticleSuccess](_state) {
      return "edit-success";
    },
    [actions.editArticleFailure](_state) {
      return "edit-error";
    },
  },
  {}
);

export default combineReducers({
  user,
  registerStatus,
  createArticle,
  articleList,
  articlesCount,
  currentPage,
  singleArticle,
  isEditing,
  editFetch,
  favoriteFetch,
});
