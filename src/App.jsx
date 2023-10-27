import { useState } from 'react'
import './App.css'
import { Header } from './header/Header'
import { NowAtMovies } from './firstDisplay/NowAtMovies/NowAtMovies'
import { NewMoveis } from './firstDisplay/newMoveis/NewMoveis'
import { ButtonNovinki } from './firstDisplay/novinki/ButtonNovinki.jsx'

function App() {
  

  return (
    <>
      <Header />
      <NowAtMovies />
      <NewMoveis />
      <ButtonNovinki />
    </>
  )
}

export default App
