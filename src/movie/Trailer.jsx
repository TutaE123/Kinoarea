import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CardFilm.css'
import like from '../assets/Лайк.png'
import dis from '../assets/Дисайк.png'
import { SocialMedia } from '../footer/SocialMedia'

export const Trailer = () => {

    const { id } = useParams()
    const [data, setData] = useState({})


    useEffect(() => {
        fetch("http://192.168.144.66:8081/api/movie/" + id)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
}, [])

  return (
    <section className='trailers'>
      <div className='NowAtMovies'>
          <h1>Новые трейлеры</h1>
          <div className="line"></div>
              <a className='activ' href="#">Все трейлеры</a>
              <a href="#">
              <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.2929L20.3431 0.928934C19.9526 0.53841 19.3195 0.538409 18.9289 0.928934C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM-8.74228e-08 9L26 9L26 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white"/>
              </svg>
              </a>
      </div>

      <div className='player'>
        <img src={data.urlIcon} alt="трейлер" />
    </div>
    <div className="strokaPlayer">
        <div className='flex'>
        <h3>{data.localName}</h3>
        <SocialMedia />
        </div>
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


    </section>
  )
}
