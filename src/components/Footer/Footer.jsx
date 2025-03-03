import { Link } from "react-router-dom"
import "./footer.css"
const Footer = () => {
  return (
    <footer>
         <a href="/" className="logo">
            NETFLEX
         </a>
         <ul>
            <li><Link to={"/contact-us"} >Contact Us</Link></li>
            <li><Link to={"/terms-of-use"} >Terms of Use</Link></li>
            <li><Link to={"/privacy"} >Privacy</Link></li>
         </ul>
         <p>&copy; {new Date().getFullYear()} Netflex. All rights reserved.</p>
    </footer>
  )
}

export default Footer