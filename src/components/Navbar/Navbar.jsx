import React,  { useContext } from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/imagenes/icon.png'
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

function Navbar() {

  const[menu,setMenu]=useState('shop')
const {getTotalCartItems}=useContext(ShopContext)

  return (
    <div className='navbar-container'>
      <div className='nav-logo-container'>
<img src={logo} alt="" className='navlogo' />
      </div>
      <ul className='nav-menu'>
      <li className='links' onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'none',color:'white'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('Jordan')}}><Link style={{textDecoration:'none',color:'white'}} to='/Jordan'>Jordan</Link>{menu==='Jordan'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('Nike')}}><Link  style={{textDecoration:'none',color:'white'}}to='/Nike'>Nike</Link>{menu==='Nike'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('Adidas')}}><Link style={{textDecoration:'none',color:'white'}} to='/Adidas'>Adidas</Link>{menu==='Adidas'?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
      <Link to='/login'>  <button>Login</button></Link>
      <Link to='/cart'> <FaShoppingCart /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
