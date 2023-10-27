import React from 'react'
import './NowAtMovies.css'

export const NowAtMovies = () => {
  return (
    <section className='NowAtMovies'>
        <h1>Сейчас в кино</h1>
        <div className="line"></div>
        <nav className='nav'>
            <a className='activ' href="#">Все</a>
            <a href="#">Боевики</a>
            <a href="#">Приключения</a>
            <a href="#">Комедии</a>
            <a href="#">Фантастика</a>
            <a href="#">Триллеры</a>
            <a href="#">Драма</a>
        </nav>
    </section>
  )
}
