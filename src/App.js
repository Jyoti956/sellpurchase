import React from 'react';
import './App.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch,Redirect, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Login}/>
        <Redirect from='/' to='/dashboard'/> 
        
        <Route path='/dashboard' component={Dashboard}/>
          
        
      </Switch>
    </Router>
  );
}

export default App;
