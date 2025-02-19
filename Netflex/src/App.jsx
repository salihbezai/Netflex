import {  BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";

import "./App.css"
import Movies from "./components/Movies/Movies";
const App =()=>{
  return (
    <Router>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/movies" element={<Movies />} />
     </Routes>
    </Router>
  )
}

export default App;