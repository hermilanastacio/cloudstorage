import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Callback from './pages/Callback';
import Login from './pages/Login';

ReactDOM.render(
  <HashRouter basename={process.env.REACT_PUBLIC_URL}>
    <Route exact path="/">
      <Callback />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
  </HashRouter>,
  document.getElementById('root')
);