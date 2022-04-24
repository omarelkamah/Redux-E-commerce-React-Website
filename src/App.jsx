import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import LogIn from './pages/logIn/LogIn'
import ProductList from './pages/productList/ProductList'
import ProductPage from './pages/productPage/ProductPage'
import Register from './pages/register/Register'
import Toper from './components/toper/Toper'
import Navbar from './components/navbar/Navbar'
import CheckOut from './pages/checkOut/CheckOut'
import WishList from './pages/wishList/WishList'

function App () {
  const [user, setUser] = useState(false)

  return (
    <BrowserRouter>
      <Toper />
      <Navbar user={user} />
      <Routes>
        <Route path='/' exact element={<Home user={user} />} />
        <Route
          path='/login'
          element={<LogIn user={user} setUser={setUser} />}
        />
        <Route path='/register' element={<Register />} />
        <Route path='/productlist' element={<ProductList />} />
        <Route path='/productlist/:id' element={<ProductPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/wishlist' element={<WishList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
