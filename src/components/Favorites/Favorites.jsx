import { useEffect, useState } from 'react'
import Movie from '../Movie/Movie'
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
    {error && <div className='error-message'>{error}</div>}
    {favorites.length === 0 && <p style={{textAlign:"center",color:"#fff"}}>No movies Found</p>}
     <div className='movies'>
     {
  loading ? (
    <p>Loading...</p>
  ) : favorites &&  (
    favorites.map((movie) => <Movie key={movie.id} movie={movie} />)
  ) 
}
      
     
     </div>
    </>

  )
}

export default Favorites