import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './auth/Signup';
import Dashboard from './Dashboard';

const App = () => (
  <div>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/signup" component={Signup} />
  </div>
);

export default App;
