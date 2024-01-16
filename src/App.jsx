import React from 'react'
import Home from './pages/Shop'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './pages/Shop'
import Shopcategory from './pages/Shopcategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer/Footer'
import jordanbanner from './assets/imagenes/banners/jordanbanner.jpg'
import adidasbanner from './assets/imagenes/banners/adidbanner.jpg'
import nikebanner from './assets/imagenes/banners/nikebanner2.jpg'
import jordanicon from './assets/imagenes/jordanicon.png'
import nikeicon from './assets/imagenes/nikeicon.png'
import adidasicon from './assets/imagenes/adidasicon.png'

const App=()=> {
  return (
    <div>
<BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Jordan' element={<Shopcategory banner={jordanbanner} category='Jordan' image={jordanicon} />} />
        <Route path='/Nike' element={<Shopcategory  banner={nikebanner} category='Nike' image={nikeicon}/>}/>
        <Route path='/Adidas' element={<Shopcategory  banner={adidasbanner} category='Adidas' image={adidasicon}/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
</BrowserRouter>
    </div>
  )
}

export default App
