import React from 'react'
import "./movie.css"
const Movie = ({movie}) => {
  return (
    <div className='card'>
        <img src={movie.img} alt="Movie"  />
        <h2>{movie.title}</h2>
        <h5>{movie.year}</h5>
    </div>
  )
}

export default Movie