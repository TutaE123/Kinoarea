import React from 'react'
import photo from '../assets/Фото.png'
import photo2 from '../assets/Фото(1).png'

export const PersonCard = () => {
  return (
    <div className="PersonCard">

        <div className="PersonOne">
            <img src={photo} />
            
            <div className="PersonMesto">
                <p className='mesto'>1 Место</p>
                <div className="PersonInfo">
                    <p className='Name_ru'>Квентин Тарантино</p>
                    <p className='Nane_en'>Quentin Tarantino</p>
                    <p className='age'>57 лет</p>

                </div>
            
            </div>
        </div>

        <div className="PersonOne">
            <img src={photo2} />
            <div className="PersonMesto">
                <p className='mesto'>2 Место</p>
                <div className="PersonInfo">
                    <p className='Name_ru'>Джейсон Стейтем</p>
                    <p className='Nane_en'>Quentin Tarantino</p>
                    <p className='age'>52 года</p>

                </div>
            
            </div>
        </div>
        <div className="blokPersonOne">
            <div className="reitingStr">
                <div className="columnOne">
                    <p className='Name_ru_mini'>Тинто Брасс</p>
                    <p className='Name_en_mini'>Tinto Brass</p>
                    <p className='age_mini'>87 лет</p>
                </div>
                <div className="columnToo">
                    <p>3-е место</p>
                </div>
            </div>
            <div className="Line"></div>
            <div className="reitingStr">
                <div className="columnOne">
                    <p className='Name_ru_mini'>Тинто Брасс</p>
                    <p className='Name_en_mini'>Tinto Brass</p>
                    <p className='age_mini'>87 лет</p>
                </div>
                <div className="columnToo">
                    <p>3-е место</p>
                </div>
            </div>
            <div className="Line"></div>
            <div className="reitingStr">
                <div className="columnOne">
                    <p className='Name_ru_mini'>Тинто Брасс</p>
                    <p className='Name_en_mini'>Tinto Brass</p>
                    <p className='age_mini'>87 лет</p>
                </div>
                <div className="columnToo">
                    <p>3-е место</p>
                </div>
            </div>
            
            <div className="Line"></div>
        </div>
    </div>
  )
}
