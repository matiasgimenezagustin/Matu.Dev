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
            <h4 className="titleEmailForm">{lenguages ? "Contactame por Email" : "Send me a Email"}</h4>
            <label className="labelForm"  for="name">{lenguages ? "Nombre completo:" : "Full name:"}</label>
            <input className="inputForm" type="text" name="name" required/>
            <label className="labelForm">{lenguages ? "Correo electronico:" : "Email:"}</label>
            <input className="inputForm" type="text" name="email" required/>
            <label className="labelForm">{lenguages ? "Message" : "Mensaje:"}</label>
            <textarea className="inputForm" name="message" id="" cols="30" rows="10" required></textarea>
            {loader ? <p className="sent">{ lenguages ? "Enviado✅" :  "Sent✅"}</p> : <input className="inputForm submit" type="submit" value={lenguages ? "Enviar" : "Submit"} />}
        </form>;

    return (
        <div className="emailContainer">
            <Fade left>
                <h3 className="subTitle subTitleEmail" id="contact">
                    {lenguages ? "Contactame" : "Contact me"}
                </h3>
                {formulario}
            </Fade>

        </div>
    );
}

export default EmailForm;