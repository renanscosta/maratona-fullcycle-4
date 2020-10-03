import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Help from './Help';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/users" exact={true} component={App} />
        <Route path="/" exact={true} component={Help} />
      </Switch>
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

