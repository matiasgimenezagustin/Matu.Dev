import "./emailForm.css"
import emailjs from "emailjs-com"
import {useState, useEffect} from 'react';
import { useContextProvider } from "../../Context/ContextProvider";
import { Fade } from "react-reveal";


const EmailForm = () => {
    const {lenguages} = useContextProvider();
    const [loader, setLoader] = useState(false)
    const sendEmail = (e) =>{
        e.preventDefault();
        setLoader(true)
        emailjs.sendForm(
        "service_y5p5ewc", "template_ko2kjbx", e.target, "hyqZ10YYgYsD6YprP"
            ).then(res =>{
                console.log(res)

            }).catch(err => console.log(err))
    }
    const formulario = 
        <form action=""  id="form" onSubmit={sendEmail} className="form">
            <label  for="name">{lenguages ? "Full name:" : "Nombre completo:"}</label>
            <input className="inputForm" type="text" name="name" />
            <label>{lenguages ? "Email:" : "Correo electronico:"}</label>
            <input className="inputForm" type="text" name="email" />
            <label>{lenguages ? "Message" : "Mensaje:"}</label>
            <textarea className="inputForm" name="message" id="" cols="30" rows="10"></textarea>
            {loader ? <p className="sent">{ lenguages ? "Sent✅" : "Enviado✅" }</p> : <input className="inputForm submit" type="submit" />}
        </form>;

    return (
        <div className="emailContainer">
            <Fade left>
                <h3 className="subTitle subTitleEmail">
                    {lenguages ? "Contact me" : "Contactame"}
                </h3>
                {formulario}
            </Fade>

        </div>
    );
}

export default EmailForm;