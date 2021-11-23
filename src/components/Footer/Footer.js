import React from 'react'
import './footer.css'
import { Link } from 'react-scroll'

export const Footer = () => {
    return (
        <div className="footer">
            <Link to="video"  ><p className="footer-a">BUENAGUA</p></Link>
            <a href="https://www.instagram.com/buenaguachile/" target="_blank"><i class="fab fa-instagram"></i></a>
            <p><i class="fas fa-mobile-alt"></i>  +5491154816748</p>
        </div>
    )
}
