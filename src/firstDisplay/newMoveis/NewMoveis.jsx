import React, { useEffect, useState } from 'react'
import './NewMoveis.css'
import cartinka from './3c4939dd468791c3fad34baa6c2c0bf8.png'
import { Link } from 'react-router-dom'


export const NewMoveis = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch("http://192.168.144.66:8081/api/movies")
        .then(data => data.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
}, [])

  return (
    
        <>
            {
                data.map((elem) => {
                    return <div className="card">
                        <Link to={`/movie/${elem.id}`}>
                            <div className="reiting">
                                <p>{elem.averageRating}</p>
                            </div>
                        <div className="image">
                            <img src={elem.urlIcon} alt={cartinka} />
                        </div>
                        <div className="text">
                            <h4>{elem.localName}</h4>
                            <p>{elem.genres}</p>
                        </div></Link>
                    </div> 
                })
            }
        </>    
              
        
  )
}
