import React, { Component } from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/home/home.js';
import Login from './components/login/login.js';
import Nav from './components/nav/nav.js';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Nav/>
        <Route path="/" exact component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
      </Router>
    )
  }
}
