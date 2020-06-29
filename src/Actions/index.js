import axios from "axios";
import { createAction } from "redux-actions";
import { message } from "antd";
import instance from "../utilities/api";

export const login = createAction("LOGIN_REQUEST");
export const loginSuccess = createAction("LOGIN_SUCCESS");
export const loginFailure = createAction("LOGIN_FAILURE");
export const logout = createAction("LOGOUT");

export const register = createAction("REGISTER_REQUEST");
export const registerSuccess = createAction("REGISTER_SUCCESS");
export const registerFailure = createAction("REGISTER_FAILURE");

export const createArticleRequest = createAction("CREATE_REQUEST");
export const createArticleSuccess = createAction("CREATE_SUCCESS");
export const createArticleFailure = createAction("CREATE_FAILURE");

export const getArticlesRequest = createAction("GET_ARTICLES_REQUEST");
export const getArticlesSuccess = createAction("GET_ARTICLES_SUCCESS");
export const getArticlesFailure = createAction("GET_ARTICLES_FAILURE");

export const putFavoriteRequest = createAction("LIKE_REQUEST");
export const putFavoriteSuccess = createAction("LIKE_SUCCESS");
export const putFavoriteFailure = createAction("LIKE_FAILURE");
export const unPutFavoriteRequest = createAction("DISLIKE_REQUEST");
export const unPutFavoriteSuccess = createAction("DISLIKE_SUCCESS");
export const unPutFavoriteFailure = createAction("DISLIKE_FAILURE");

export const getTotalArticlesCount = createAction("GET_TOTAL_ARTICLES_COUNT");
export const switchPage = createAction("SWITCH_PAGE");

export const getSingleArticleRequest = createAction("GET_ARTICLE_REQUEST");
export const getSingleArticleSuccess = createAction("GET_ARTICLE_SUCCESS");
export const getSingleArticleFailure = createAction("GET_ARTICLE_FAILURE");
export const clearSingleArticle = createAction("CLEAR_ARTICLE");

export const expandText = createAction("EXPAND_COLLAPSE_TEXT");

export const startEditing = createAction("START_EDITING");
export const endEditing = createAction("END_EDITING");

export const editArticleRequest = createAction("EDIT_REQUEST");
export const editArticleSuccess = createAction("EDIT_SUCCESS");
export const editArticleFailure = createAction("EDIT_FAILURE");

export const loginWithJWT = () => async (dispatch) => {
  dispatch(login());
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "https://conduit.productionready.io/api/user",
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    if (response.status === 200) {
      const { username, token } = response.data.user;
      dispatch(
        loginSuccess({
          username: username,
          token: token,
        })
      );
    }
  } catch (error) {
    dispatch(loginFailure());
    throw error;
  }
};

export const loginUser = (values) => async (dispatch) => {
  dispatch(login());
  try {
    const response = await axios.post(
      "https://conduit.productionready.io/api/users/login",
      { user: values }
    );
    const { token, username } = response.data.user;
    if (response.status === 200) {
      message.success(`Добро пожаловать ${username}`);
      localStorage.setItem("token", token);
      dispatch(
        loginSuccess({
          username: username,
          token: token,
        })
      );
    }
  } catch (error) {
    message.error("Пара логин и пароль не найдена");
    dispatch(loginFailure());
    throw error;
  }
};

export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logout());
};

export const registerUser = (values) => async (dispatch) => {
  dispatch(register());
  try {
    const response = await axios.post(
      "https://conduit.productionready.io/api/users",
      { user: values }
    );
    if (response.status === 200) {
      message.success("Вы успешно зрегистрированы!");
      dispatch(registerSuccess());
    }
  } catch (error) {
    message.error("Email или имя пользователя уже зарегистрированы!");
    dispatch(registerFailure());
    throw error;
  }
};

export const createArticle = (values) => async (dispatch) => {
  dispatch(createArticleRequest());
  try {
    const response = await instance.post("/articles", { article: values });
    if (response.status === 200) {
      message.success("Успешно!");
      dispatch(createArticleSuccess(response.data.article));
      getArticleList(1);
      // setTimeout(() => window.history.back(), 1000);
    }
  } catch (error) {
    dispatch(createArticleFailure());
  }
};

export const getArticleList = (page) => async (dispatch) => {
  dispatch(getArticlesRequest());
  try {
    const offset = (page - 1) * 10;
    const response = await instance.get(`/articles?limit=10&offset=${offset}`);
    if (response.status === 200) {
      response.data.articles.map((article) => (article.expanded = false));
      dispatch(getArticlesSuccess(response.data.articles));
      dispatch(getTotalArticlesCount(response.data.articlesCount));
    }
  } catch (error) {
    dispatch(createArticleFailure());
  }
};

export const pushLike = (slug) => async (dispatch) => {
  dispatch(putFavoriteRequest());
  try {
    const response = await instance.post(`/articles/${slug}/favorite`);
    if (response.status === 200) {
      dispatch(putFavoriteSuccess({slug, article: response.data.article}))
    }
  } catch (error) {
    dispatch(putFavoriteFailure(error))
  }
}

export const pushUnlike = (slug) => async (dispatch) => {
  dispatch(unPutFavoriteRequest());
  try {
    const response = await instance.delete(`/articles/${slug}/favorite`);
    if (response.status === 200) {
      dispatch(unPutFavoriteSuccess({slug, article: response.data.article}))
    }
  } catch (error) {
    dispatch(unPutFavoriteFailure())
  }
}

export const getArticle = (slug) => async (dispatch) => {
  dispatch(getSingleArticleRequest());
  try {
    const response = await instance.get(`/articles/${slug}`);
    if (response.status === 200) {
      dispatch(getSingleArticleSuccess(response.data.article));
    }
  } catch (error) {
    dispatch(getSingleArticleFailure());
  }
};

export const editArticle = (values, slug) => async (dispatch) => {
  dispatch(editArticleRequest());
  try {
    const response = await instance.put(`/articles/${slug}`, {
      article: values,
    });
    if (response.status === 200) {
      message.success("Успешно!");
      dispatch(getSingleArticleSuccess(response.data.article));
      dispatch(editArticleSuccess());
    }
  } catch (error) {
    dispatch(editArticleFailure());
  }
};
