import React from 'react'
import StoreNavbar from './Comonents/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/CartPage'

const App = () => {
  return (
    <div style={{overflow:"hidden"}}>

      <Routes>
        <Route path='/ReactEcommerce' element= {< Home />} />
        <Route path='/ReactEcommerce/product/:id' element= {< Product />} />
        <Route path='/ReactEcommerce/cart' element= {< Cart />} />
      </Routes>
    </div>
  )
}

export default App