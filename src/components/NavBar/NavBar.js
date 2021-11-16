import React from 'react'
import './barra.css'
import { Link } from 'react-scroll'

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
                    <Link className=" lista-a" aria-current="page" >BUENAGUA</Link>
                </li>
                <li className="nav-item">
                    <Link to="ubicacion" className=" lista-a" aria-current="page" >UBICACION</Link>
                </li>
                <li className="nav-item">
                    <Link to="contacto" className=" lista-a" aria-current="page" >CONTACTOS</Link>
                </li>

            </ul>
            {/* </div> */}

        </nav>
    )
}
