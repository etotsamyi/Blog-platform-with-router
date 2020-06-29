import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import * as routes from '../routes.js';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Main from '../Components/Main';
import AddArticle from '../Components/AddArticle';
import SingleArticle from '../Components/SingleArticle';

const mapStateToProps = (state) => {
  const props = {
    username: state.user.username,
    token: state.user.token,
    userStatus: state.user,
    isEditing: state.isEditing,
    registerStatus: state.registerStatus,
  };

  return props;
};

const mapDispatchToProps = {
  loginWithJWT: actions.loginWithJWT,
};

function App(props) {
  const { loginWithJWT, token, isEditing } = props;
  const localStoreToken = localStorage.getItem('token');

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
          <Route
            path={`${routes.main}/:slug`}
            exact
            component={SingleArticle}
          />
          <Route
            path={`${routes.main}/:slug/edit`}
            exact
            component={AddArticle}
          >
            {!isEditing ? <Redirect to={routes.main} /> : null}
          </Route>
          <Route
            path="*"
            component={() => '404 ТАКОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ!'}
          />
          <Route exact path={routes.home}>
            {startTokenChecking()}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
