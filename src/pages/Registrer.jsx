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
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className='flexear'>
                        <div className='label-input'>
                            <label htmlFor="name">Name:</label>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className='label-input'>
                            <label htmlFor="lastname">Last name:</label>
                            <input type="text" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div className='flexear'>
                        <div className='label-input'>
                            <label htmlFor="name">Password:</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>
                        <div className='label-input'>
                            <label htmlFor="name">Confirm Password:</label>
                            <input type="password" placeholder="Confirm Password" />
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
