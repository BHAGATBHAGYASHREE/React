import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import CreateProduct from './pages/create-product/CreateProduct'
import Products from './pages/products/Products'
import NotFound from './pages/not-found/NotFound'
import UpdateProduct from './pages/update-product/UpdateProduct'
import ShowProduct from './pages/show-product/ShowProduct'

function App() {


  return (
    <>

          <BrowserRouter>

              <Routes>
                  <Route path='' element={<Products/>}/>
                  <Route path="/products" element={<Products/>}/>
                  <Route path="/create" element={<CreateProduct/>}/>
                  <Route path='*' element={<NotFound/>}/>
                  <Route path='/update/:id' element={<UpdateProduct/>}/>
                  <Route path="/view/:id" element={<ShowProduct/>}/>
              </Routes>
          
          </BrowserRouter>


    </>
  )
}

export default App
