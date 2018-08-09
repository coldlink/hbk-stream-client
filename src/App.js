import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import io from 'socket.io-client'

import Home from './Home'
import Camera from './Camera'
import Scoreboard from './Scoreboard'
import Tool from './Tool'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      endpoint: process.env.REACT_APP_SOCKET_URI || 'http://localhost:3000'
    }
  }

  componentWillMount () {
    const { endpoint } = this.state
    window.socket = io(endpoint)
  }

  render () {
    return <Router>
      <div className='root'>
        <Route exact path='/' component={Home} />
        <Route path='/camera' component={Camera} />
        <Route path='/scoreboard' component={Scoreboard} />
        <Route path='/tool' component={Tool} />
      </div>
    </Router>
  }
}

export default App
