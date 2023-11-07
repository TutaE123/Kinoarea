import React from 'react'
import imgNews from '../assets/image3News.png'

export const ContentNews = () => {
  return (
    <div className='ContentNews'>
        <div className="mainNews">
            <div className="mainNewsImg">
                <img src={imgNews} />
            </div>
            <div className="contentMainNews">
                <h4>Не время умирать. Перенос релиза фильма  </h4>
                <p>Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.</p>
            </div>
        </div>
        <div className="noMainNews">
            <div className="odinCardNews">
                <div className="mainNewsImg">
                    <img src={imgNews} />
                </div>
            </div>
            <div className="odinCardNews">
                <div className="mainNewsImg">
                    <img src={imgNews} />
                </div>
            </div>
            <div className="odinCardNews">
                <div className="mainNewsImg">
                    <img src={imgNews} />
                </div>
            </div>
            <div className="odinCardNews">
                <div className="mainNewsImg">
                    <img src={imgNews} />
                </div>
            </div>
        </div>
    </div>
  )
}
