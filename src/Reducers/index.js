import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import * as actions from "../Actions";

const user = handleActions(
  {
    [actions.login](state) {
      return "requested";
    },
    [actions.loginSuccess](state, { payload: userData }) {
      return userData;
    },
    [actions.loginFailure](state) {
      return "error";
    },
    [actions.logout](state) {
      return {};
    },
  },
  {}
);

const registerStatus = handleActions(
  {
    [actions.register](state) {
      return "requested";
    },
    [actions.registerSuccess](state) {
      return "register-success";
    },
    [actions.registerFailure](state) {
      return "register-error";
    },
  },
  {}
);

const createArticle = handleActions(
  {
    [actions.createArticleRequest](state) {
      return "create-requested";
    },
    [actions.createArticleSuccess](state) {
      return "create-succes";
    },
    [actions.createArticleFailure](state) {
      return "create-error";
    },
  },
  {}
);

const articleList = handleActions(
  {
    [actions.getArticlesRequest](state) {
      return "getting-requested";
    },
    [actions.getArticlesSuccess](state, { payload: articles }) {
      return [...articles];
    },
    [actions.getArticlesFailure](state) {
      return "getting-error";
    },
    [actions.expandText](state, { payload: slug }) {
      const newState = state.map((article) => {
        if (article.slug === slug) {
          article.expanded = !article.expanded;
          return article;
        }
        return article;
      });
      return newState;
    },
    [actions.putFavoriteSuccess](state, { payload: data }) {
      const { slug, article } = data;
      const newState = state.map((el) => {
        if (el.slug === slug) {
          return article;
        }
        return el;
      });
      return newState;
    },
    [actions.unPutFavoriteSuccess](state, { payload: data }) {
      const { slug, article } = data;
      const newState = state.map((el) => {
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
    [actions.getTotalArticlesCount](state, { payload: totalCount }) {
      return totalCount;
    },
  },
  0
);

const favoriteFetch = handleActions(
  {
    [actions.putFavoriteRequest](state) {
      return "putting-requested";
    },
    [actions.putFavoriteSuccess](state) {
      return "putting-success";
    },
    [actions.putFavoriteFailure](state, { payload: error }) {
      return error;
    },
    [actions.unPutFavoriteRequest](state) {
      return "unputting-requested";
    },
    [actions.unPutFavoriteSuccess](state) {
      return "unputting-success";
    },
    [actions.unPutFavoriteFailure](state) {
      return "unputting-error";
    },
  },
  ""
);

const currentPage = handleActions(
  {
    [actions.switchPage](state, { payload: page }) {
      return page;
    },
  },
  1
);

const singleArticle = handleActions(
  {
    [actions.getSingleArticleRequest](state) {
      return "getting-requested";
    },
    [actions.getSingleArticleSuccess](state, { payload: article }) {
      return article;
    },
    [actions.getSingleArticleFailure](state) {
      return "getting-error";
    },
    [actions.clearSingleArticle](state) {
      return "";
    },
    [actions.putFavoriteSuccess](state, { payload: data }) {
      const { article } = data;
      return article;
    },
    [actions.unPutFavoriteSuccess](state, { payload: data }) {
      const { article } = data;
      return article;
    },
  },
  ""
);

const isEditing = handleActions(
  {
    [actions.startEditing](state) {
      return true;
    },
    [actions.endEditing](state) {
      return false;
    },
  },
  false
);

const editFetch = handleActions(
  {
    [actions.editArticleRequest](state) {
      return "edit-requested";
    },
    [actions.editArticleSuccess](state) {
      return "edit-success";
    },
    [actions.editArticleFailure](state) {
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
