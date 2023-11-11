import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from './header/Header'
import { CardFilm } from './movie/CardFilm'
import { Description } from './movie/Description'
import { Starring } from './movie/Starring'
import { StarringContent } from './movie/StarringContent'
import { Trailer } from './movie/Trailer'
import { Awards } from './movie/Awards'



export const Movie = () => {

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
    <div>
        
        <Header /> 
        <CardFilm /> 
        <Description /> 
        <Starring />
        <StarringContent />
        <Trailer /> 
        <Awards />
    </div>
  )
}
