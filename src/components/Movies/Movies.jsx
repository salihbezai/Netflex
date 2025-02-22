import { useEffect, useState } from 'react'
import Movie from '../Movie/Movie'
import Navbar from '../Navbar/Navbar'
import { getPopulateMovies, searchMovies,  } from '../services/Api'
import "./movies.css"
import { Button } from '@mui/material'
 
const Movies = () => {

  const [movies , setMovies ]=useState([])
  const [error,setError] = useState(null)
  const [ loading, setLoading ]= useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  
  const fetchMovies=async()=>{

    try {
      const data = await getPopulateMovies();
      setMovies(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)   
      setError("Failed to load Movies...")   
    }
  }
  useEffect(() => {


    fetchMovies()
  }, [])


  useEffect(() => {

    if(!searchQuery)    fetchMovies()
    
  }, [searchQuery])
  

  const handleSearch=async(e)=>{
    e.preventDefault()
    if(!searchQuery.trim()) return;
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults)
    } catch (error) {
      
    }
  }

  return (

    <>
    <div className='search'>
      <form onSubmit={handleSearch}>
      <input onChange={(e)=>setSearchQuery(e.target.value)} type="text" placeholder='Search for movies...'/>
        <Button type='submit' sx={{padding:"12px 20px",backgroundColor:"#E50914"
                            ,marginLeft:"15px",color:"#fff",fontWeight:"bold"}}
                             className='btn-get-started'  variant="contained">
           Search</Button>
      </form>
   
    </div>
    {error && <div className='error-message'>{error}</div>}
    {movies.length === 0 && <p style={{textAlign:"center",color:"#fff"}}>No movies Found</p>}
     <div className='movies'>
    
     {
  loading ? (
    <p>Loading...</p>
  ) : movies &&  (
    movies.map((movie) => <Movie key={movie.id} movie={movie} />)
  )
}
      
     
     </div>
    </>

  )
}

export default Movies