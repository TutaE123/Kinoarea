import React from 'react'
import rec1 from '../assets/БританскаяАкадемия.png'
import rec2 from '../assets/ЗолотойГлобус.png'
import rec3 from '../assets/Оскар.png'
import rec4 from '../assets/ПремияГильдии.png'
import './CardFilm.css'

export const Awards = () => {
  return (
    <div>
        <div className='TitleNews'> 
        <h1>Награды</h1>
        <div className="allNews">
            <p>Все награды</p>
            <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.2929L20.3431 0.928934C19.9526 0.53841 19.3195 0.538409 18.9289 0.928934C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM-8.74228e-08 9L26 9L26 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white"/>
            </svg>
        </div>
    </div>
    <div className="flexbox">
        <img src={rec1} />
        <img src={rec2} />
        <img src={rec3} />
        <img src={rec4} />
    </div>
    </div>
  )
}
