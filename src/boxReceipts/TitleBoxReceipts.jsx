import React from 'react'

export const TitleBoxReceipts = () => {
  return (
    <div className='TitleBoxReceipts'>
        <div className="titleBoxOffcet">
            <h1>Кассовые сборы</h1>
            <p>13 марта — 15 марта</p>
        </div>
        <div className="line"></div>
        <nav className='nav'>
            <a href="#">Россия</a>
            <a className='activniy' href="#">Весь мир</a>
            <a href="#">США и Канада</a>
        </nav>
    </div>
  )
}
