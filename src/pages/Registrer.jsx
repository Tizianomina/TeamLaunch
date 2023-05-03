import React from 'react';
import '../style/register.css';

export const Registrer = () => {
    return (
        <>
            <form className='formulario' action="">
                <h1 className='titulo'>User Registration</h1>
                <div className='contenedor-info'>
                    <div className='label-input'>
                        <label htmlFor="email">E-mail:</label>
                        <input id='email' type="email" placeholder="Enter your email" />
                    </div>
                    <div className='flexear'>
                        <div className='label-input'>
                            <label htmlFor="name">Name:</label>
                            <input id="name" type="text" placeholder="Enter your name" />
                        </div>
                        <div className='label-input'>
                            <label htmlFor="lastname">Last name:</label>
                            <input id="lastname" type="text" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div className='flexear'>
                        <div className='label-input'>
                            <label htmlFor="password">Password:</label>
                            <input id="password" type="password" placeholder="Enter your password" />
                        </div>
                        <div className='label-input'>
                            <label htmlFor="cpassword">Confirm Password:</label>
                            <input id="cpassword" type="password" placeholder="Confirm Password" />
                        </div>
                    </div>
                    <div className='consultas'>
                        <input className='registrar' type="submit" value='Register' />
                        <a className='iniciar' href="#">Already have an account? Sign In</a>
                    </div>
                </div>
            </form>
        </>
    )
}
