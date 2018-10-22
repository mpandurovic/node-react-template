import React from 'react';
import { Route } from 'react-router-dom';
import Signup from './auth/Signup';
import Dashboard from './Dashboard';

import './App.scss';

const App = () => (
  <div className="container">
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/signup" component={Signup} />
  </div>
);

export default App;
