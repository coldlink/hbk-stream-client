import React from 'react'

class Tool extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      scoreboard: {
        p1n: '',
        p2n: '',
        p1s: 0,
        p2s: 0,
        tl: 'HBK',
        tr: '#00',
        bl: 'BREWDOG',
        br: 'BRIGHTON'
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.swapNames = this.swapNames.bind(this)
    this.swapScores = this.swapScores.bind(this)
    this.resetNames = this.resetNames.bind(this)
    this.resetScores = this.resetScores.bind(this)
    this.saveScoreboard = this.saveScoreboard.bind(this)
  }

  handleChange (event) {
    const { scoreboard } = this.state
    scoreboard[event.target.name] = event.target.value
    this.setState({ scoreboard })
  }

  swapNames () {
    const { scoreboard } = this.state
    const tp1n = scoreboard.p1n
    scoreboard.p1n = scoreboard.p2n
    scoreboard.p2n = tp1n
    this.setState({ scoreboard })
  }

  swapScores () {
    const { scoreboard } = this.state
    const tp12 = scoreboard.p1s
    scoreboard.p1s = scoreboard.p2s
    scoreboard.p2s = tp12
    this.setState({ scoreboard })
  }

  resetNames () {
    const { scoreboard } = this.state
    scoreboard.p1n = ''
    scoreboard.p2n = ''
    this.setState({ scoreboard })
  }

  resetScores () {
    const { scoreboard } = this.state
    scoreboard.p1s = 0
    scoreboard.p2s = 0
    this.setState({ scoreboard })
  }

  saveScoreboard () {
    const { scoreboard } = this.state
    console.log(scoreboard)
  }

  render () {
    const { scoreboard } = this.state
    return (
      <div>
        <h2>Scoreboard</h2>
        <div>
          <label>P1 Name </label>
          <input type='text' name='p1n' value={scoreboard.p1n} onChange={this.handleChange} />
          <span>&nbsp;</span>
          <label>P2 Name </label>
          <input type='text' name='p2n' value={scoreboard.p2n} onChange={this.handleChange} />
        </div>
        <br />
        <div>
          <label>P1 Score </label>
          <input type='number' name='p1s' value={scoreboard.p1s} onChange={this.handleChange} />
          <span>&nbsp;</span>
          <label>P2 Score </label>
          <input type='number' name='p2s' value={scoreboard.p2s} onChange={this.handleChange} />
        </div>
        <br />
        <div>
          <button onClick={this.swapNames}>Swap Names</button>
          <span>&nbsp;</span>
          <button onClick={this.swapScores}>Swap Scores</button>
          <span>&nbsp;</span>
          <button onClick={this.resetNames}>Reset Names</button>
          <span>&nbsp;</span>
          <button onClick={this.resetScores}>Reset Scores</button>
        </div>
        <br />
        <div>
          <label>Top - Left (White)</label>
          <input type='text' name='tl' value={scoreboard.tl} onChange={this.handleChange} />
          <label>Top - Right (Orange)</label>
          <input type='text' name='tr' value={scoreboard.tr} onChange={this.handleChange} />
        </div>
        <br />
        <div>
          <label>Bottom - Left (Orange)</label>
          <input type='text' name='bl' value={scoreboard.bl} onChange={this.handleChange} />
          <label>Bottom - Right (While)</label>
          <input type='text' name='br' value={scoreboard.br} onChange={this.handleChange} />
        </div>
        <br />
        <button onClick={this.saveScoreboard}>Save / Update</button>
      </div>
    )
  }
}

export default Tool
