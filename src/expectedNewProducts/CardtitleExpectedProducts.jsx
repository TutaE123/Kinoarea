import React from 'react'
import './ExpectedNevProducts.css'
import cartinka from '../assets/image1.png'

export const CardtitleExpectedProducts = () => {
  return (
    <div className="card">
            <div className="image">
                <img src={cartinka} alt="Фото фильма" />
            </div>
            <div className="text">
                <h4>Джокер</h4>
                <p>Триллер, драма, криминал</p>
            </div>
    </div>
  )
}

