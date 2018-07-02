import React from 'react'

import './scoreboard.css'
import hbkScoreboard from './hbk_scoreboard.png'

const Scoreboard = () => (
  <div className='root'>
    <span className='rawline-bold white Scoreboard-text-hbk'>HBK<span className='orange'>#13</span></span>
    <span className='raleway-bold white Scoreboard-text-brewdog'><span className='orange'>BREWDOG</span> BRIGHTON</span>
    <span className='raleway-bold white Scoreboard-text-p1s'>3</span>
    <span className='raleway-bold white Scoreboard-text-p2s'>3</span>
    <span className='rawline-bold white Scoreboard-text-p1n'>The quick Brown Fox</span>
    <span className='rawline-bold white Scoreboard-text-p2n'>ColdLink Sensei</span>
    <img src={hbkScoreboard} className='Scoreboard-main' alt='camera' />
  </div>
)

export default Scoreboard
