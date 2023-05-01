import React from 'react';
import '../style/login.css'

export const Login = () => {
  return (
    <section>
      <form className='formulario' action="">
        <h1 className='titulo'>User Login</h1>
        <div className='contenedor-info'>
          <div className='label-input'>
            <label htmlFor="email">E-mail:</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className='label-input'>
            <label htmlFor="email">Password:</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className='consultas'>
            <input className='registrar' type="submit" value='Login' />
            <button className='olvide' value='Login'>I forgot my password</button>
          </div>
        </div>
      </form>
      <a className='no-registrado' href="#">Don't have an account? Register</a>
    </section>
  )
}