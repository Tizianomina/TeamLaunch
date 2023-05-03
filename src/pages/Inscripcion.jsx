import React from 'react'
import { NavBar } from '../components/NavBar';
import "../style/inscripcion.css"
export const Inscripcion = () => {
    return (
        <div>
            <NavBar />
            <form action="" >
                <div className='inscripcion-contenedor-todo'>

                
                <div className='inscripcion-contenedor'>
                    <label htmlFor="nombre">Enter your nickname</label>
                    <input id="nombre" type="text" placeholder='Example: Joako' />
                    <label htmlFor="sector">Choose the sector to work in</label>
                    <select name="sector" id="sector">
                        <option value="" selected disabled>-- Seleccionar --</option>
                        <option value="backend">Backend</option>
                        <option value="frontend">Frontend</option>
                        <option value="fullstack">FullStack</option>
                        <option value="bd">Base de datos</option>
                    </select>
                    <label htmlFor="tecnologias">Choose the technology to use in the project</label>
                    <select name="tecnologias" id="tecnologias">
                        <option value="" selected disabled>-- Seleccionar --</option>
                        <option value="react">ReactJS</option>
                        <option value="node">Node</option>
                        <option value="html">HTML Maquetación</option>
                        <option value="css">CSS Diseño</option>
                    </select>
                    
                </div>
                </div>
                <input className='inscripcion-inscribirme' type="submit" value="Inscribirme"/>

            </form>
        </div>
    )
}
