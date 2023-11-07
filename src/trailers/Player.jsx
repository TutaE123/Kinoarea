import React from 'react'
import player from '../assets/image3.png'
import './Player.css'
import like from '../assets/Лайк.png'
import dis from '../assets/Дисайк.png'

export const Player = () => {
  return (
    <div>
    <div className='player'>
        <img src={player} alt="трейлер" />
    </div>
    <div className="strokaPlayer">
        <h3>Форсаж 9</h3>
        <div className="likeDis">
        <div className="like">
            <img src={like} alt="Like" />
            <p>2345</p>
        </div>
        <div className="like">
            <img src={dis} alt="Like" />
            <p>2345</p>
        </div>
        </div>
    </div>
    
    </div>
  )
}
