import {  BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";

import "./App.css"
import Movies from "./components/Movies/Movies";
import { MovieProvider } from "./contexts/MovieContext";
import Favorites from "./components/Favorites/Favorites";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contactus from "./components/ContactUs/Contactus";
import Terms from "./components/TermsOfUse/Terms";
import Privacy from "./components/Privacy/Privacy";
const App =()=>{
  return (
    <MovieProvider>
    <Router>
    <Navbar/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/movies" element={<Movies />} />
     <Route path="/favorites" element={<Favorites />} />
     <Route path="/contact-us" element={<Contactus/>}/>
     <Route path="/terms-of-use" element={<Terms/>}/>
     <Route path="/privacy" element={<Privacy/>}/>
     </Routes>
     <Footer/>
    </Router>
    </MovieProvider>
  )
}

export default App;