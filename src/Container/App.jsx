import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import * as actions from "../Actions";
import { connect } from "react-redux";
import * as routes from "../routes.js";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Main from "../Components/Main";
import AddArticle from "../Components/AddArticle";

const mapStateToProps = (state) => {
  const props = {
    username: state.user.username,
    token: state.user.token,
    loginWithJWT: actions.loginWithJWT,
    userStatus: state.user,
    registerStatus: state.registerStatus,
  };

  return props;
};

const mapDispatchToProps = {
  loginWithJWT: actions.loginWithJWT,
};

function App(props) {
  const { loginWithJWT, token } = props;
  const localStoreToken = localStorage.getItem("token");

  const startTokenChecking = () => {
    if (!localStoreToken && !token) {
      return <Redirect to={routes.login} />;
    }
    if (localStoreToken && !token) {
      loginWithJWT(localStoreToken);
      return <Redirect to={routes.main} />;
    }
    return <Redirect to={routes.main} />;
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={routes.home}>
            {startTokenChecking()}
          </Route>
          <Route path={routes.login} exact component={Login}>
            {localStoreToken ? <Redirect to={routes.main} /> : null}
          </Route>
          <Route path={routes.register} exact component={Register}>
            {localStoreToken ? <Redirect to={routes.main} /> : null}
          </Route>
          <Route path={routes.main} exact component={Main}>
            {!localStoreToken ? <Redirect to={routes.login} /> : null}
          </Route>
          <Route path={routes.add_article} exact component={AddArticle}>
            {!localStoreToken ? <Redirect to={routes.login} /> : null}
          </Route>
          <Route path="*" component={() => "404 ТАКОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ!"} />
        </Switch>
      </div>
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
