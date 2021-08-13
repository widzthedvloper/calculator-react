import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';
import Quote from './Quote';
import Navbar from './Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" component={Home}>
        <Route path="/home" component={Home} />
        <Route path="/calculator" component={App} />
        <Route path="/quote" component={Quote} />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
