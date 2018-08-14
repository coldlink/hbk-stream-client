import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render () {
    return (
      <ul>
        <li><Link to='/scoreboard'>Scoreboard</Link></li>
        <li><Link to='/camera'>Camera</Link></li>
        <li><Link to='/tool'>Tool</Link></li>
      </ul>
    )
  }
}

export default Home
