import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclussive Offers on your email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
      <input type="email" placeholder='Email' />
      <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
