import React from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>

        <Route exact path="/dashboard" component={Dashboard} />

      </Switch>
    </Router>

  );
}

export default App;
