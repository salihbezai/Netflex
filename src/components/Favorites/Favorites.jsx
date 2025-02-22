import { useEffect, useState } from 'react'
import Movie from '../Movie/Movie'
import Navbar from '../Navbar/Navbar'
import { useMovieContext } from '../../contexts/MovieContext'
 
const Favorites = () => {
    const {favorites} = useMovieContext()
  
  const [error,setError] = useState(null)
  const [ loading, setLoading ]= useState(true)

  useEffect(()=>{
    if(favorites) setLoading(false)
  },[])

  
  return (

    <>
    <div className='search'>
    </div>
     <div className='movies'>
      {error && <div className='error-message'>{error}</div>}
     {
  loading ? (
    <p>Loading...</p>
  ) : favorites && favorites.length > 0 ? (
    favorites.map((movie) => <Movie key={movie.id} movie={movie} />)
  ) : (
    <p>No movies found!</p>
  )
}
      
     
     </div>
    </>

  )
}

export default Favorites