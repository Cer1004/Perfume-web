import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navigationbar from './Components/Navbar';
import Home from './Pages/Home';
import Recommendation from './Pages/Recommendation';
import LastLong from './Pages/LastLong.jsx';
import PerfumeTypes from './Pages/PerfumeTypes';
import './App.css';


function App() {

  return (
      <BrowserRouter>
      <Navigationbar />

      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path= "/recommendation" element={<Recommendation/>} />
        <Route path= "/lastlong" element={<LastLong/>} />
        <Route path= "/perfumetypes" element={<PerfumeTypes/>} />


      </Routes>

      </BrowserRouter>
    
  )
}

export default App
