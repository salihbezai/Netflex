import { Link } from "react-router-dom"
import "./footer.css"
const Footer = () => {
  return (
    <footer>
         <a href="/" className="logo">
            NETFLEX
         </a>
         <ul>
            <li><Link to={"/"} >Contact Us</Link></li>
            <li><Link to={"/"} >Terms of Use</Link></li>
            <li><Link to={"/"} >Privacy</Link></li>
         </ul>
         <p>&copy; 2025 Netflex. All rights reserved.</p>
    </footer>
  )
}

export default Footer