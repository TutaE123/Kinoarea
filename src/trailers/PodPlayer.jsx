import React from 'react'
import './PodPlayer.css'
import mulan from '../assets/image4.png'

export const PodPlayer = () => {
  return (
    <div className='PodPlayer'>
        <div className="odinTrayler">
            <div className="trailerPicture">
                <img src={mulan} alt="" />
            </div>
            <h4>Мулан</h4>
        </div>
        <div className="odinTrayler">
            <div className="trailerPicture">
                <img src={mulan} alt="" />
            </div>
            <h4>Мулан</h4>
        </div>
        <div className="odinTrayler">
            <div className="trailerPicture">
                <img src={mulan} alt="" />
            </div>
            <h4>Мулан</h4>
        </div>
        <div className="odinTrayler">
            <div className="trailerPicture">
                <img src={mulan} alt="" />
            </div>
            <h4>Мулан</h4>
        </div>
    </div>
  )
}
