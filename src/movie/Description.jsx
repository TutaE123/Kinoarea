import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CardFilm.css'

export const Description = () => {

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
    <div className='grid'>
        <div className="odin">
            <p>Год</p>
            <p>Страна</p>
            <p>Слоган</p>
            <p>Режисёр</p>
            <p>Сценарист</p>
            <p>Продюсер</p>
            <p>Оператор</p>
            <p>Композитор</p>
        </div>
        <div className="dva">
            <p>{data.createdAt}</p>
            <p>{data.countries}</p>
            <p>{data.slogan}</p>
            <p>{data.producers}</p>
            <p>{data.screenwriters}</p>
            <p>{data.producers}</p>
            <p>{data.operators}</p>
            <p>{data.composers}</p>
        </div>
        <div className="tri">
            <p>Художник</p>
            <p>Монтаж</p>
            <p>Жанр</p>
            <p>Сборы</p>
            <p>Премьера (мир)</p>
            <p>Премьера (РФ)</p>
            <p>Возраст</p>
            <p>Время</p>
        </div>
        <div className="chetire">
            <p>{data.designers}</p>
            <p>{data.editors}</p>
            <p>{data.genres}</p>
            <p>{data.worldwideGross}</p>
            <p>{data.worldPremiereDate}</p>
            <p>{data.localPremiereDate} (РФ)</p>
            <p>{data.ageCategory}</p>
            <p>{data.durationByMin}</p>
        </div>
    </div>
  )
}
