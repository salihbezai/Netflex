import {  BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";

import "./App.css"
import Movies from "./components/Movies/Movies";
import { MovieProvider } from "./contexts/MovieContext";
import Favorites from "./components/Favorites/Favorites";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
const App =()=>{
  return (
    <MovieProvider>
    <Router>
    <Navbar/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/movies" element={<Movies />} />
     <Route path="/favorites" element={<Favorites />} />
     </Routes>
     <Footer/>
    </Router>
    </MovieProvider>
  )
}

export default App;