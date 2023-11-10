import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



export const Movie = () => {

    const { id } = useParams()
    const [data, setData] = useState({})


    useEffect(() => {
        fetch("http://192.168.144.66:8081/movie/" + id)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
}, [])

    

  return (
    <div>
        <h1>h {data.localName}</h1>
    </div>
  )
}
