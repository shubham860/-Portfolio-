import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Skills from './components/Skills'
import adminPanel from './adminPanel/Dashboard/index.jsx'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Dashboard}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/adminPanel' component={adminPanel}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
