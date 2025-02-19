import React from 'react'
import "./movie.css"
const Movie = ({movie}) => {
  return (
    <div className='card_movie'>
        <img src={movie.img} alt="Movie"  />
        <div class="card-content">
          <h2>{movie.title}</h2>
          <h5>{movie.year}</h5>
        </div>
    </div>
  )
}

export default Movie