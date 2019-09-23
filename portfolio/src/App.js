import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import Info from './components/Info'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Skills from './components/Skills'
import All from './components/All'
import ML from './components/ML'
import Frontend from './components/Frontend'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/' exact component={Dashboard}/>
        <Route path='/Resume' component={Resume}/>
        <Route path='/Portfolio' component={Portfolio}/>
        <Route path='/Skills' component={Skills}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/Portfolio/' component={All}/>
        <Route path='/Portfolio/Frontend' component={Frontend}/>
        <Route path='/Portfolio/ML' component={ML}/>
      </Switch>
    </div>
    </Router>
  );
}
export default App;
