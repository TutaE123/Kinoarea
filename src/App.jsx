import { useState } from 'react'
import './App.css'
import { Header } from './header/Header'
import { NowAtMovies } from './firstDisplay/NowAtMovies/NowAtMovies'
import { ButtonNovinki } from './firstDisplay/novinki/ButtonNovinki.jsx'
import { Trailers } from './trailers/Trailers'
import { PopularMovies } from './popularMovies/PopularMovies'
import { Person } from './person/Person'
import { ExpectedNevProducts } from './expectedNewProducts/ExpectedNevProducts'
import { News } from './news/News'
import { BoxReceipts } from './boxReceipts/BoxReceipts'
import { Email } from './e-mail/Email'


function App() {

  return (
    <>
      <div className='body'></div>
      <Header />
      <NowAtMovies />
      <ButtonNovinki />
      
      <Trailers />
      <PopularMovies />
      <Person />
      <News />
      <ExpectedNevProducts />
      <BoxReceipts />
      <Email />
      
    </>
  )
}

export default App
