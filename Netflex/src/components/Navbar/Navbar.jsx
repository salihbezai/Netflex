import { Link } from "react-router-dom"
import "./navbar.css"
const Navbar = () => {
  return (
    <nav>
      
      <a href="/" className="logo">
       NETFLEX
      </a>
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