import React from 'react'
import video from '../../video/buenagua.mp4'
import captura from '../../assets/Captura.png'
import pdf from '../../assets/ficha.pdf'
import './video.css'

export const Video = () => {
    return (
        <div id="video">
            <video src={video} controls autoPlay muted loop poster={captura}></video>
            <a href={pdf} target="_blank"><p><i className="fas fa-globe-americas"></i> Ficha técnica Buenagua</p></a>

        </div>
    )
}
