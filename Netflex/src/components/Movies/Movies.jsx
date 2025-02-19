import Movie from '../Movie/Movie'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import { movies_show } from '../utils/data'
import "./movies.css"
const Movies = () => {
  return (
    <>
    <Navbar/>
      <Search/>
     <div className='movies'>
      
        {
            movies_show && movies_show.map((movie)=>(
                <Movie movie={movie}/>
            ))
        }
     </div>
    </>

  )
}

export default Movies