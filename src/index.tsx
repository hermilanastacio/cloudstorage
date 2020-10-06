import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Callback from './Callback';
import Dashboard from './Dashboard';
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename={process.env.REACT_PUBLIC_URL}>
    <Route exact path="/">
      <App />
    </Route>
    <Route path="/callback">
      <Callback />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
  </BrowserRouter>,
  document.getElementById('root')
);