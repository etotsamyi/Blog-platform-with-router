import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Main from "../Components/Main";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
  const props = {
    userName: state.user.userName,
    token: state.user.token,
  };

  return props;
};

const localTokenChecking = () => {
  const localStoreToken = localStorage.getItem("token");
  return localStoreToken ? "/main" : "/login";
};

function App(props) {
  const { userName, token } = props;
  console.log(userName, token, "ПРОПСЫ в APP");

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to={localTokenChecking()} />
          </Route>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Register} />
          <Route path="/main" exact component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default connect(mapStateToProps)(App);
