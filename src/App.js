import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Camera from './Camera'
import Scoreboard from './Scoreboard'
import Tool from './Tool'
import './App.css'

const App = () => (
  <Router>
    <div className='root'>
      <Route exact path='/' component={Home} />
      <Route path='/camera' component={Camera} />
      <Route path='/scoreboard' component={Scoreboard} />
      <Route path='/tool' component={Tool} />
    </div>
  </Router>
)

export default App
