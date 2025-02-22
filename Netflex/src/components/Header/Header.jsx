import { Button } from "@mui/material"
import Navbar from "../Navbar/Navbar"
import "./header.css"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <section className='header'>
                <div class="navbar-overlay"></div>
        <section className='hero-section'>
            <div className='hero-text'>
            <h1>Discover Your Next Favorite Movie</h1>
            <p>Unlimited access to movies, TV shows, and more.</p>
            </div>
            <div className="element"></div>
            <div>
                <form>
                <h3>Ready for a movie night?</h3>                   
                 <div>
                  <Link to={"/movies"}>
                  <Button 
                  sx={{padding:"12px 20px",
                  backgroundColor:"#E50914"
                            ,marginLeft:"15px",color:"#fff",fontWeight:"bold"}} className='btn-get-started' 
                             variant="contained">

                                 Discover Now !</Button>
                  </Link>
                       
                    </div>
                </form>
            </div>
        </section>
    </section>
  )
}

export default Header