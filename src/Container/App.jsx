import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Main from '../Components/Main';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Register} />
          <Route path="/main" exact component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
