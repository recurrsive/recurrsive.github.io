import React from 'react'
import MainPage from './mainpage/MainPage'
import NotFound from './common/NotFound'
import About from './about/AboutMePage'
import Resume from './resume/ResumePage'
import Projects from './projects/ProjectsPage'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/resume" component={Resume}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
      </Router>
  )
}

export default App
