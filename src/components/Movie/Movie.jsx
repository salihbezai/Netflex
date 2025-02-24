import React from 'react'
import "./movie.css"
import { useMovieContext } from '../../contexts/MovieContext'


const Movie = ({movie}) => {
  const { isFavorite,addToFavorites,removeFromFavorites } = useMovieContext()
  const favorite = isFavorite(movie.id)
  
  const favoriteClick =()=>{
    if(favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie)
  }
  
  return (
    <div className='card_movie'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}  />
        <div class="card-content">
          <div className='movie-overlay'>
            <button className={favorite?"active":""} onClick={favoriteClick}>♥</button>
          </div>
          <h2>{movie.title}</h2>
          <h5>{movie.release_date}</h5>
        </div>
    </div>
  )
}

export default Movie