import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Callback from './Callback';
import Dashboard from './Dashboard';
import { HashRouter, Route } from "react-router-dom";

ReactDOM.render(
  <HashRouter basename="/">
    <Route exact path="/">
      <App />
    </Route>
    <Route path="/callback">
      <Callback />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
  </HashRouter>,
  document.getElementById('root')
);