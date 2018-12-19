import React from 'react'
import CreatableSelect from 'react-select/lib/Creatable'

class Tool extends React.Component {
  constructor (props) {
    super(props)
    // placeholder
    this.state = {
      scoreboard: {
        p1n: 'Player 1',
        p2n: 'Player 2',
        p1s: 0,
        p2s: 0,
        tl: 'HBK',
        tr: '#00',
        bl: 'Brewdog',
        br: 'Brighton'
      },
      camera: {
        hbk: 'Habrewken #00',
        brewdog: 'Brewdog Brighton',
        fgc: 'Brighton FGC',
        date: new Date().toLocaleDateString(),
        facebook: 'fightlabbrighton',
        twitter: 'fight_lab',
        web: 'hbk.gg',
        game: 'GAME NAME'
      },
      curl: '',
      participants: []
    }

    this.handleChangePlayer1 = this.handleChangePlayer1.bind(this)
    this.handleChangePlayer2 = this.handleChangePlayer2.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeCamera = this.handleChangeCamera.bind(this)
    this.handleChangeChallonge = this.handleChangeChallonge.bind(this)
    this.handleCreatePlayer = this.handleCreatePlayer.bind(this)
    this.updateParticipants = this.updateParticipants.bind(this)
    this.swapNamesScores = this.swapNamesScores.bind(this)
    this.swapNames = this.swapNames.bind(this)
    this.swapScores = this.swapScores.bind(this)
    this.resetNames = this.resetNames.bind(this)
    this.resetScores = this.resetScores.bind(this)
    this.saveScoreboard = this.saveScoreboard.bind(this)
    this.saveCamera = this.saveCamera.bind(this)
    this.getPlayer1 = this.getPlayer1.bind(this)
    this.getPlayer2 = this.getPlayer2.bind(this)
  }

  componentWillMount () {
    const { scoreboard, camera } = this.state
    window.socket.emit('scoreboard-get')
    window.socket.emit('camera-get')
    window.socket.emit('participants-get')
    window.socket.on('scoreboard', ({
      p1n = scoreboard.p1n,
      p2n = scoreboard.p2n,
      p1s = scoreboard.p1s,
      p2s = scoreboard.p2s,
      tl = scoreboard.tl,
      tr = scoreboard.tr,
      bl = scoreboard.bl,
      br = scoreboard.br
    }) => this.setState({
      scoreboard: {
        p1n,
        p2n,
        p1s,
        p2s,
        tl,
        tr,
        bl,
        br
      }
    }))
    window.socket.on('camera', ({
      hbk = camera.hbk,
      brewdog = camera.brewdog,
      fgc = camera.fgc,
      date = camera.date,
      facebook = camera.facebook,
      twitter = camera.twitter,
      game = camera.game,
      web = camera.web
    }) => this.setState({
      camera: {
        hbk,
        brewdog,
        fgc,
        date,
        facebook,
        twitter,
        web,
        game
      }
    }))

    window.socket.on('challonge-participants-res', participants => {
      this.setState({
        participants
      })
    })

    window.socket.on('participants', ({ curl = '', participants = [] }) => {
      this.setState({
        curl,
        participants
      })
    })
  }

  handleChange (event) {
    const { scoreboard } = this.state
    scoreboard[event.target.name] = event.target.value
    this.setState({ scoreboard })
  }

  handleChangeChallonge (event) {
    this.setState({ curl: event.target.value })
  }

  handleChangeCamera (event) {
    const { camera } = this.state
    camera[event.target.name] = event.target.value
    this.setState({ camera })
  }

  swapNamesScores () {
    this.swapNames()
    this.swapScores()
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
    scoreboard.p1n = 'Player 1'
    scoreboard.p2n = 'Player 2'
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
    window.socket.emit('scoreboard-update', scoreboard)
  }

  saveCamera () {
    const { camera } = this.state
    window.socket.emit('camera-update', camera)
  }

  updateParticipants () {
    const { curl } = this.state
    window.socket.emit('challonge-participants-req', curl)
  }

  handleChangePlayer1 (newValue) {
    if (newValue) {
      const { scoreboard } = this.state
      scoreboard.p1n = newValue.value
      this.setState({ scoreboard })
    }
  }

  handleChangePlayer2 (newValue) {
    if (newValue) {
      const { scoreboard } = this.state
      scoreboard.p2n = newValue.value
      this.setState({ scoreboard })
    }
  }

  handleCreatePlayer (inputValue) {
    const { participants } = this.state
    console.log(inputValue)
    this.setState({
      participants: [...participants, { challongeUsername: '', displayName: inputValue }]
    })
  }

  getPlayer1 () {
    const { scoreboard: { p1n = '' }, participants = [] } = this.state

    const { displayName = '', challongeUsername = '' } = participants.find(p => p.displayName === p1n) || {}

    return { value: displayName, label: `${challongeUsername} | ${displayName}`, username: challongeUsername }
  }

  getPlayer2 () {
    const { scoreboard: { p2n = '' }, participants = [] } = this.state

    const { displayName = '', challongeUsername = '' } = participants.find(p => p.displayName === p2n) || {}

    return { value: displayName, label: `${challongeUsername} | ${displayName}`, username: challongeUsername }
  }

  render () {
    const { scoreboard, camera, curl } = this.state
    let { participants } = this.state
    participants = participants.map(p => ({ value: p.displayName, label: `${p.challongeUsername} | ${p.displayName}`, username: p.challongeUsername }))
    return (
      <div>
        <div>
          <h2>Scoreboard</h2>
          <div>
            <label>P1 Name </label>
            {/* <input type='text' name='p1n' value={scoreboard.p1n} onChange={this.handleChange} />
            <select name='p1n' value={scoreboard.p1n} onChange={this.handleChange}>
              {
                participants.map(p => <option key={p.displayName} value={p.displayName}>{`${p.challongeUsername} | ${p.displayName}`}</option>)
              }
            </select> */}
            <CreatableSelect
              className='select-players'
              isClearable
              onChange={this.handleChangePlayer1}
              onCreateOption={this.handleCreatePlayer}
              options={participants}
              value={this.getPlayer1()}
            />

            <span>&nbsp;</span>
            <label>P2 Name </label>
            {/* <input type='text' name='p2n' value={scoreboard.p2n} onChange={this.handleChange} />
            <select name='p2n' value={scoreboard.p2n} onChange={this.handleChange}>
              {
                participants.map(p => <option key={p.displayName} value={p.displayName}>{`${p.challongeUsername} | ${p.displayName}`}</option>)
              }
            </select> */}
            <CreatableSelect
              className='select-players'
              isClearable
              onChange={this.handleChangePlayer2}
              onCreateOption={this.handleCreatePlayer}
              options={participants}
              value={this.getPlayer2()}
            />
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
            <button onClick={this.swapNamesScores}>Swap Both</button>
            <span>&nbsp;</span>
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
            <label>Bottom - Right (White)</label>
            <input type='text' name='br' value={scoreboard.br} onChange={this.handleChange} />
          </div>
          <br />
          <div>
            <label>Challonge URL</label>
            <input type='text' name='curl' value={curl} onChange={this.handleChangeChallonge} />
            <button onClick={this.updateParticipants}>Update Participants</button>
          </div>
          <br />
          <button onClick={this.saveScoreboard}>Save / Update Scoreboard</button>
        </div>
        <div>
          <h2>Camera</h2>
          <div>
            <input type='text' name='hbk' value={camera.hbk} onChange={this.handleChangeCamera} />
            <span>&nbsp;</span>
            <input type='text' name='game' value={camera.game} onChange={this.handleChangeCamera} />
          </div>
          <div>
            <input type='text' name='brewdog' value={camera.brewdog} onChange={this.handleChangeCamera} />
          </div>
          <br />
          <div>
            <input type='text' name='fgc' value={camera.fgc} onChange={this.handleChangeCamera} />
            <input type='text' name='date' value={camera.date} onChange={this.handleChangeCamera} />
          </div>
          <br />
          <div>
            <input type='text' name='facebook' value={camera.facebook} onChange={this.handleChangeCamera} />
            <input type='text' name='twitter' value={camera.twitter} onChange={this.handleChangeCamera} />
            <input type='text' name='web' value={camera.web} onChange={this.handleChangeCamera} />
          </div>
          <br />
          <button onClick={this.saveCamera}>Save / Update Camaera</button>
        </div>
      </div>
    )
  }
}

export default Tool
