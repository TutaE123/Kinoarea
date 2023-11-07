import React from 'react'
import './ButtonNovinki.css'
import { NewMoveis } from '../newMoveis/NewMoveis'


export const ButtonNovinki = () => {
  return (

    <section>
      <div className="NowMovies">
        <NewMoveis />
        <NewMoveis />
        <NewMoveis />
        <NewMoveis />
        <NewMoveis />
        <NewMoveis />
        <NewMoveis />
        <NewMoveis />
      </div>
      <div className='buttonNovinki'>
          <button className='novinki'>Все новинки</button>
      </div>
    </section>

  )
}
