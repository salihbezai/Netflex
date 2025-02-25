import { Link } from "react-router-dom"
import "./navbar.css"
const Navbar = () => {

  const toggleHamburger=()=>{
    const hamburger = document.getElementById("hamburger");
    const listItems = document.getElementsByClassName('list-items')[0]
    hamburger.classList.toggle("active")
    listItems.classList.toggle("active")
  }
  return (
    <nav>
      
      <a href="/" className="logo">
       NETFLEX
      </a>
      <div onClick={toggleHamburger} class="hamburger" id="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
      <ul className="list-items">
        <li className="item">
        <Link to={"/"} >Home</Link>
        </li>
        <li className="item">
        <Link to={"/movies"} >Movies</Link>
        </li>
        <li className="item">
        <Link to={"/favorites"} >Favorites</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar