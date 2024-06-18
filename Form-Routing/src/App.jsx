import { useState } from 'react'
import './App.css'
import CreateProduct from './pages/CreateProduct'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About'
import ContactUs from './pages/ContactUs'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='form' element={<CreateProduct/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
