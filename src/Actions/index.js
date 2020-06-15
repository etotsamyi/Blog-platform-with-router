import axios from "axios";
import { createAction } from "redux-actions";
import { message } from "antd";
import instance from "./api";

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
  console.log(values);
  // const valuesWithTags = {
  //   title: values.title,
  //   description: values.description,
  //   body: values.body,
  //   tagList: values.tagList ? values.tagList.split(" ") : "",
  // };
  // console.log(valuesWithTags);
  try {
    const response = await instance.post("/articles", values);
    console.log(response);
    if (response.status === 200) {
      message.success(`Успешно!`);
      dispatch(createArticleSuccess(response.data.article));
      getArticleList();
      setTimeout(() => window.history.back(), 1500);
    }
  } catch (error) {
    dispatch(createArticleFailure());
    console.log(error);
  }
};

export const getArticleList = () => async (dispatch) => {
  dispatch(getArticlesRequest());
  try {
    const response = await instance.get("/articles?limit=10");
    console.log(response.data.articles);
    if (response.status === 200) {
      dispatch(getArticlesSuccess(response.data.articles));
    }
  } catch (error) {
    dispatch(createArticleFailure());
  }
};
