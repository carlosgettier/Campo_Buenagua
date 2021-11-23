import React from 'react'
import video from '../../video/buenagua.mp4'
import captura from '../../assets/Captura.png'
import './video.css'

export const Video = () => {
    return (
        <div id="video">
            <video src={video} controls autoPlay muted loop poster={captura}></video>
        </div>
    )
}
