import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomeLayout from './components/HomeLayout'
import Card from './components/Card'
import Categories from './components/Categories';

import Help from './components/Help';
import Footer from './components/Footer';



function App() {
 

  return (
    <><Router>
      <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeLayout/>} />
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/Help" element={<Help/>}/>

      </Routes>
      <Footer/>
      </div>
     
      </Router>

      
    </>
  )
}

export default App
