import Movie from '../Movie/Movie'
import { movies_show } from '../utils/data'
import "./movies.css"
const Movies = () => {
  return (
    <div className='movies'>
        {
            movies_show && movies_show.map((movie)=>(
                <Movie movie={movie}/>
            ))
        }
    </div>
  )
}

export default Movies