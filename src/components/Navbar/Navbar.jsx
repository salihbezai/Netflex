import { Link } from "react-router-dom"
import "./navbar.css"
import { useEffect, useState } from "react"
const Navbar = () => {
  const [open, setOpen] = useState(false)


  const toggleHamburger=()=>{
    setOpen(!open)
   
    const hamburger = document.getElementById("hamburger");
    const listItems = document.getElementsByClassName('list-items')[0]
    const nav = document.getElementById('nav')
    hamburger.classList.toggle("active")
    listItems.classList.toggle("active")
  }

  useEffect(() => {
    if(open){
      document.body.classList.add("no-scroll");
    }else{
      document.body.classList.remove("no-scroll");
    }
  }, [open])
  


  return (
    <nav id="nav">
      <div id="overlay" className={open ? "overlay active":"overlay"}></div>

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