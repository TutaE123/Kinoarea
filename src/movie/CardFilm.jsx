import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './CardFilm.css'
import Reiting from '../assets/Kinoarea.png'
import { SocialMedia } from '../footer/SocialMedia'

export const CardFilm = () => {

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
    <div className='CardFilm'>
        <div className="fotoCardFilm">
            <img src={data.urlIcon} alt={data.localName} />
        </div>
        <div className="opisanieMain">
            <p>Главная   {'>'}  Фильмы  {'>'}  {data.localName} </p>
            <h2>{data.localName}</h2>
            <p>{data.originalName}</p>
            <img src={Reiting} alt={data.averageRating} />
            <p>{data.description}</p>
            <div className='flex'>
                <button> {'>'} Смотреть трейлер</button>
                <SocialMedia />
            </div>

        </div>
    </div>
  )
}
