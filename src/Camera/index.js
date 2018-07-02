import React from 'react'
import './camera.css'
import hbkCamera from './hbk_camera.png'

const Camera = () => (
  <div className='root'>
    <span className='raleway-bold white Camera-text-hbk'>Habrewken #13</span>
    <span className='raleway-bold white Camera-text-brewdog'>Brewdog Brighton</span>
    <span className='cabin orange Camera-text-fgc'>Brighton Fighting Game Community</span>
    <span className='cabin orange Camera-text-date'>Wednesday 11th July 2018</span>
    <img src={hbkCamera} className='Camera-main' alt='camera' />
    <span className='cabin white Camera-text-facebook'>fightlabbrighton</span>
    <span className='cabin white Camera-text-twitter'>fight_lab</span>
    <span className='cabin white Camera-text-web'>hbk.gg</span>
    <i className='fab fa-facebook orange Camera-icon-facebook' />
    <i className='fab fa-twitter orange Camera-icon-twitter' />
    <i className='fas fa-globe-africa orange Camera-icon-web' />
  </div>
)

export default Camera
