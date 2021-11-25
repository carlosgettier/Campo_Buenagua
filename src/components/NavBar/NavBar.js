import React from 'react'
import './barra.css'
import { Link } from 'react-scroll'
import pdf from '../../assets/ficha.pdf'

export const NavBar = () => {
    return (
        <nav className="barra-color" >

            {/* <Link to="video" className="navbar-brand buenagua lista-a" >BUENAGUA</Link> */}


            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
            {/* <div className="collapse navbar-collapse contenedor-barra  " id="navbarNav"> */}
            <ul className=" lista">
                <li className="nav-item">
                    <a href={pdf} target="_blank" className=" lista-a" aria-current="page" >BUENAGUA EN VENTA</a>
                </li>
                <li className="nav-item">
                    <Link to="ubicacion" className=" lista-a" aria-current="page" >UBICACIÓN</Link>
                </li>
                <li className="nav-item">
                    <Link to="contacto" className=" lista-a" aria-current="page" >CONTACTOS</Link>
                </li>

            </ul>
            {/* </div> */}

        </nav>
    )
}
