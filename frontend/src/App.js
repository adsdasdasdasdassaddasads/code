// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreateToken from './pages/CreateToken';
import Features from './pages/Features';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create-token" component={CreateToken} />
          <Route path="/features" component={Features} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;