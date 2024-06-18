import { useState } from 'react'
import './App.css'
import Home from './assets/pages/home/Home'
import Services from './assets/pages/Services/Services'
import About from './assets/pages/about/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      
      <BrowserRouter>

              <Routes>
                  <Route path='' element={<Home/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/service" element={<Services/>}/>
                  <Route path='/about' element={<About/>}/>

              </Routes>
          
          </BrowserRouter>
    </>
  )
}

export default App
