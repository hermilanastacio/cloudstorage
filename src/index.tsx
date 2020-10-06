import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Callback from './Callback';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <App />
    </Route>
    <Route path="/callback">
      <Callback />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
  </Router>,
  document.getElementById('root')
);