import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Portfolio</h1>
        <Router>
          <p><Link to="/">Home</Link></p>
          <p><Link to='/AboutMe'>About Me</Link></p>
          <p><Link to='/ContactMe'>Contact Me</Link></p>
          <p><Link to='/Skills'>Skills</Link></p>
          <p><Link to='/Projects'>Projects</Link></p>

          <Switch>
            <Route path='/AboutMe' component={AboutMe} />
            <Route path='/ContactMe' component={ContactMe} />
            <Route path='/Skills' component={Skills} />
            <Route path='/Projects' component={Projects} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
