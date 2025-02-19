import { Button } from "@mui/material"
import Navbar from "../Navbar/Navbar"
import "./header.css"
const Header = () => {
  return (
    <section className='header'>
                <div class="navbar-overlay"></div>
        <Navbar/>
        <section className='hero-section'>
            <div className='hero-text'>
                <h1>Unlimited movies, TV shows, and more</h1>
                <p>Starts at USD 3.99. Cancel anytime.</p>
            </div>
            <div className="element"></div>
            <div>
                <form>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div>
                        <input type="text" placeholder="Email" />
                        <Button sx={{padding:"12px",backgroundColor:"#E50914",marginLeft:"15px"}} className='btn-get-started'  variant="contained">Get Started</Button>
                    </div>
                </form>
            </div>
        </section>
    </section>
  )
}

export default Header