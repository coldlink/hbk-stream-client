import React from 'react'
import './camera.css'
import hbkCamera from './hbk_camera.png'

class Camera extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hbk: 'Habrewken #00',
      brewdog: 'Brewdog Brighton',
      fgc: 'Brighton Fighting Game Community',
      date: 'Wednesday Xth MONTH 20XX',
      facebook: 'fightlabbrighton',
      twitter: 'fight_lab',
      web: 'hbk.gg'
    }
  }

  componentWillMount () {
    const state = this.state
    window.socket.on('camera', ({
      hbk = state.hbk,
      brewdog = state.brewdog,
      fgc = state.fgc,
      date = state.date,
      facebook = state.facebook,
      twitter = state.twitter,
      web = state.web
    }) => this.setState({
      hbk,
      brewdog,
      fgc,
      date,
      facebook,
      twitter,
      web
    }))
  }

  render () {
    const { hbk, brewdog, fgc, date, facebook, twitter, web } = this.state
    return (
      <div className='root'>
        <span className='raleway-bold white Camera-text-hbk'>{hbk}</span>
        <span className='raleway-bold white Camera-text-brewdog'>{brewdog}</span>
        <span className='cabin orange Camera-text-fgc'>{fgc}</span>
        <span className='cabin orange Camera-text-date'>{date}</span>
        <img src={hbkCamera} className='Camera-main' alt='camera' />
        <span className='cabin white Camera-text-facebook'>{facebook}</span>
        <span className='cabin white Camera-text-twitter'>{twitter}</span>
        <span className='cabin white Camera-text-web'>{web}</span>
        <i className='fab fa-facebook orange Camera-icon-facebook' />
        <i className='fab fa-twitter orange Camera-icon-twitter' />
        <i className='fas fa-globe-africa orange Camera-icon-web' />
      </div>
    )
  }
}

export default Camera
