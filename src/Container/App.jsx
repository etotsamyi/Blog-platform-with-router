import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import * as actions from "../Actions";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Main from "../Components/Main";
import { connect } from "react-redux";
import * as routes from "../routes.js"
// import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
  const props = {
    username: state.user.username,
    token: state.user.token,
    loginWithJWT: actions.loginWithJWT,
  };

  return props;
};

const mapDispatchToProps = {
  loginWithJWT: actions.loginWithJWT,
};

function App(props) {
  const { loginWithJWT, token } = props;

  const localTokenChecking = () => {
    const localStoreToken = localStorage.getItem("token");
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
            {localTokenChecking()}
          </Route>
          <Route path={routes.login} exact component={Login} />
          <Route path={routes.register} exact component={Register} />
          <Route path={routes.main} exact component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
