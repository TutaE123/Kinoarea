import React from 'react'
import './Person.css'

export const PersonTitle = () => {
  return (
    <section className='PersonTitle'>
        <h1>Популярныеперсоны</h1>
        <nav className='nav'>
            <a className='activ' href="#">За год</a>
            <a href="#">За месяц</a>
            <a href="#">За неделю</a>
        </nav>
    </section>
  )
}
