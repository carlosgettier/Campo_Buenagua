import React from 'react'
import './contacto.css'
// import imagen from '../../asset/images/OIP.jpg'
import * as emailjs from "emailjs-com";
import { useState } from 'react'

export const Contacto = () => {

    const [mensaje, setmensaje] = useState({
        email: "",
        nombre: "",
        mensaje: "",
        sending: false,
        successModal: false,
        errorModal: false,
    })
    const handleInput = (e) => {
        setmensaje({

            ...mensaje,
            [e.target.name]: e.target.value
        });

    }
    const enviarMen = (e) => {
        e.preventDefault()

        var template_params = {
            name: mensaje.name,
            email: mensaje.email,
            mensaje: mensaje.mensaje,
        };
        // YOUR EMAIL.JS API KEY IN FORMAT user_xxxxxxxxxxxxxxxxxx
        let API_KEY = "user_DOlD15FvTqQobcVOJFVeO";
        // YOUR EMAIL.JS TEMPLATE ID
        let TEMPLATE_ID = "template_yf2aclj";

        emailjs.send("default_service", TEMPLATE_ID, template_params, API_KEY).then(
            function (response) {
                if (response.status === 200) {
                    showSuccessModal();
                    alert("se envio el mail con exito")
                } else {
                    // showErrorModal();
                    alert(" No se envio el mail con exito")
                }
            },
            function (error) {
                // showErrorModal();
                alert("hubo un error")
            }
        );

    }
    // // SUCCESS MODAL
    const showSuccessModal = () => {
        setmensaje({ successModal: true, sending: false });
        resetForm();
    };
    // // ERROR MODAL
    // showErrorModal = () => {
    //     this.setState({ errorModal: true, sending: false });
    //     this.resetForm();
    // };
    // // RESET CONTACT FORM
    const resetForm = () => {
        setmensaje({ name: "", email: "", message: "" });
    }
    // // CLOSE ALL MODALS
    // closeModal = () => {
    //     this.setState({ successModal: false, errorModal: false });
    // };

    //resetForm = () => {
    //    this.setState({ name: "", email: "", message: "" });
    //};

    return (
        <div className="contacto" id="Contacto">
            <h1>CONTACTO</h1>
            <div className="contenedor">
                <form onSubmit={enviarMen}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            onChange={handleInput}
                            name="email" />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"
                            onChange={handleInput}
                            name="nombre" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Mensaje</label>
                        <textarea type="text" className="form-control" id="exampleInputPassword1"
                            onChange={handleInput}
                            name="mensaje" />
                    </div>

                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
                {/* <img src={imagen} /> */}
            </div>
            {/* <div className="contenedor2">
                <a><i class="fab fa-facebook-f"></i></a>
                <a><i class="fab fa-linkedin-in"></i></a>
                <a><i class="fab fa-github"></i></a>
            </div> */}

        </div>
    )
}
