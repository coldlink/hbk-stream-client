import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'
import Camera from './Camera'
import Scoreboard from './Scoreboard'
import Tool from './Tool'
import './App.css'
// import logo from './logo.svg'

// class App extends Component {
//   render () {
//     return (
//       <div className='App'>
//         <header className='App-header'>
//           <img src={logo} className='App-logo' alt='logo' />
//           <h1 className='App-title'>Welcome to React</h1>
//         </header>
//         <p className='App-intro'>
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     )
//   }
// }

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
