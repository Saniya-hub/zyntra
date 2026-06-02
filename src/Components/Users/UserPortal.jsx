import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Navbarr from '../Navbarr'
import Footer from '../Footer'
import About from '../Pages/About'
import ViewMore from '../Pages/ViewMore'
// import AddProducts from './AddProducts'
// import AddUsers from './AddUsers'
import UsersDetails from '../Pages/UsersDetails'
import CartItems from './CartItems'

const UserPortal = () => {
  return (
    <>
    <Navbarr/>
    <Routes>     
      <Route element ={<Home/>} path='/'/>
      <Route element={<Products/>} path='/products'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<ViewMore/>} path='/viewmore/:id'/>
      {/* <Route element={<AddProducts/>} path='/addproducts'/> */}
      <Route element={<Products/>} path='/products/:category'/>
      {/* <Route element={<AddUsers/>} path='/addusers'/> */}
      {/* <Route element={<UsersDetails/>} path='/userdetails'/> */}
      <Route element={<CartItems/>} path='/cartitems'/>
    </Routes>
    <Footer/>
    </>
  )
}

export default UserPortal
