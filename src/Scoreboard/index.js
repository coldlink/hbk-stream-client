import React from 'react'

import './scoreboard.css'
// import SFV from './SFV.png'

class Scoreboard extends React.Component {
  constructor (props) {
    super(props)

    // placeholder
    this.state = {
      p1n: 'Player 1',
      p2n: 'Player 2',
      p1s: 0,
      p2s: 0,
      tl: 'HBK',
      tr: '#00',
      bl: 'Brewdog',
      br: 'Brighton'
    }
  }

  componentWillMount () {
    const state = this.state
    window.socket.emit('scoreboard-get')
    window.socket.on('scoreboard', ({
      p1n = state.p1n,
      p2n = state.p2n,
      p1s = state.p1s,
      p2s = state.p2s,
      tl = state.tl,
      tr = state.tr,
      bl = state.bl,
      br = state.br
    }) => this.setState({
      p1n,
      p2n,
      p1s,
      p2s,
      tl,
      tr,
      bl,
      br
    }))
  }

  render () {
    const { p1n, p2n, p1s, p2s, tl, tr, bl, br } = this.state
    return (
      <div className='root'>
        <span className='rawline-bold white Scoreboard-text-hbk'>{tl}<span className='orange'>{tr}</span></span>
        <span className='raleway-bold white Scoreboard-text-brewdog'><span className='orange'>{bl}</span> {br}</span>
        <span className='rawline-bold white Scoreboard-text-p1s'>{p1s}</span>
        <span className='rawline-bold white Scoreboard-text-p2s'>{p2s}</span>
        <span className='rawline-bold white Scoreboard-text-p1n'>{p1n}</span>
        <span className='rawline-bold white Scoreboard-text-p2n'>{p2n}</span>
        {/* <img src={SFV} className='Scoreboard-main' alt='camera' /> */}
      </div>
    )
  }
}

export default Scoreboard
