import React from 'react'
import { CardpPopMovies } from './CardPopMovies'

export const PopularMovies = () => {
  return (
    <section>
    <div className='NowAtMovies'>
        <h1>Сейчас в кино</h1>
        <div className="line"></div>
        <nav className='nav'>
            <a className='activ' href="#">Всё время</a>
            <a href="#">2023</a>
            <a href="#">2022</a>
            <a href="#">2021</a>
            <a href="#">2020</a>
            <a href="#">2019</a>
            <a href="#">2018</a>
        </nav>
        
    </div>
    <div className='NowAtMovies'>
        <CardpPopMovies />
        <CardpPopMovies />
        <CardpPopMovies />
        <CardpPopMovies />
    </div>
    </section>
  )
}
