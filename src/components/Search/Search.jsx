import { Button } from '@mui/material'
import "./search.css"
import { useState } from 'react'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const handleSearch=(e)=>{
    e.preventDefault()
    if(!searchQuery.trim()) return;
  }
  return (
    <div className='search'>
      <form onSubmit={handleSearch}>
      <input onChange={(e)=>setSearchQuery(e.target.value)} type="text" placeholder='Search for movies...'/>
        <Button type='submit' sx={{padding:"12px 20px",backgroundColor:"#E50914"
                            ,marginLeft:"15px",color:"#fff",fontWeight:"bold"}}
                             className='btn-get-started'  variant="contained">
           Search</Button>
      </form>
   
    </div>
  )
}

export default Search