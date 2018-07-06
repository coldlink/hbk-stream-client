import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      date: new Date().getTime()
    }
  }

  componentWillMount () {
    window.socket.on('date', data => this.setState({date: data}))
  }

  render () {
    const { date } = this.state
    return (
      <ul>
        <li><Link to='/scoreboard'>Scoreboard</Link></li>
        <li><Link to='/camera'>Camera</Link></li>
        <li><Link to='/tool'>Tool</Link></li>
        <li>{date}</li>
      </ul>
    )
  }
}

export default Home
