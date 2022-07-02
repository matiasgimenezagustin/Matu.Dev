import "./emailForm.css"
import React from 'react';
import { useContextProvider } from "../../Context/ContextProvider";

const EmailForm = () => {
    const {lenguages} = useContextProvider();

    return (
        <div>
            <form action="" id="form" className="form">
                <h3>
                {lenguages ? "Contact me" : "Contactame"}
                </h3>
                <label for="name">{lenguages ? "Full name" : "Nombre completo"}</label>
                <input type="text" />
                <label>{lenguages ? "Email" : "Correo electronico"}</label>
                <input type="text" />
                <label>{lenguages ? "Message" : "Mensaje"}</label>
                <input type="text" />
            </form>
        </div>
    );
}

export default EmailForm;