import React from 'react'
import'./LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text"placeholder='YOUR NAME' />
          <input type="email"placeholder='Email' />
          <input type="passsword"placeholder='password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree the terms and use of private policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
