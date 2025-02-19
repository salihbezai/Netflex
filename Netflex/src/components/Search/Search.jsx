import { Button } from '@mui/material'
import "./search.css"

const Search = () => {
  return (
    <div className='search'>
        <input type="text" placeholder='Search for movies...'/>
        <Button sx={{padding:"12px 20px",backgroundColor:"#E50914"
                            ,marginLeft:"15px",color:"#fff",fontWeight:"bold"}} className='btn-get-started'  variant="contained">
                                 Search</Button>
    </div>
  )
}

export default Search