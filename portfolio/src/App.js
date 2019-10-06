import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Skills from './components/Skills'
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
        </Switch>
      </div>
    </Router>
  );
}
export default App;
