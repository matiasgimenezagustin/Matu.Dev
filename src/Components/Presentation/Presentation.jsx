import React from 'react';
import { useContextProvider } from '../../Context/ContextProvider';
import "./present.css"
import themeAmarilloImg from "../../img/theme-amarillo-presentation-img.svg"
import themeNegroImg from "../../img/theme-negro-presentation-img.svg"
import Fade from 'react-reveal/Fade';
import drFrontEnd from "../../img/DrFrontEnd.svg"

const Presentation = () => {
    const {lenguages,theme} = useContextProvider({});

    return (
        
        <div className='presentationContainer' >
            <h2 className='subTitle subtitlePresentation'>{lenguages ? "Menu" : "Inicio"}</h2>
            <div className='presentationAll1'>
                <Fade left>
                    <section className='presentation one'>
                        <div className='presentationInside'>
                            <h2 className='presentationInsideTitle' id="menu">
                                {
                                lenguages ?
                                "Acerca de mi :"
                                :
                                "About me :"
                                }
                            </h2>
                            {lenguages ? 
                            <p className='presentationContent'>
                                Que tal! 🖐 Soy un Desarrollador Front-End con experiencia en React JS, actualmente estoy estudiando en <a  className='linkC' href="https://www.coderhouse.com/">CoderHouse</a> el bootcamp de Backend con Node.js. Disfruto el desarrollo de cada proyecto dado a que me encanta poder encontrar soluciones y explotar mi creatividad.

                            </p> 
                            : 
                            <p className='presentationContent'>
                                Hi there! 🖐 I'm a Front-End Developer with experience in React JS, now I'm studying in <a className='linkC' href="https://www.coderhouse.com/">CoderHouse</a> Backend bootcamp with Node.js. I enjoy the development of each project that I have given that I love being able to find solutions and exploit my creativity.
                            </p>}
                        </div>

                    </section>
                </Fade>
                <Fade right>
                    <img className='drFront' src={drFrontEnd} alt="" />
                </Fade>
            </div>
                
            <Fade right>
                <div className='presentationAll2'>
                    {
                    theme ? <img src={themeNegroImg} alt="" className='imgPresentation'/> : <img src={themeAmarilloImg} alt="" className='imgPresentation'/>
                    }

                    <section className='presentation two'>
                        <div className='presentationInside'>
                            <h2 className='presentationInsideTitle'>
                                {
                                lenguages ?
                                "Educación :"
                                :
                                "Education :"
                                }
                            </h2>
                            {lenguages ? 
                            <p className='presentationContent'>
                                Estudie a lo largo de 6 meses para ser un desarrollador Frontend React en<a  className='linkC' href="https://www.coderhouse.com/">CoderHouse</a> y FreeCodeCamp En este momento, me encuentro estudiando Backend Node.JS en <a  className='linkC' href="https://www.coderhouse.com/">CoderHouse</a> y tambien soy miembro de <a  className='linkC' href="https://www.argentina.gob.ar/produccion/transformacion-digital-y-economia-del-conocimiento/argentina-programa">"Argentina Programa"</a> donde estoy aprendiendo el lenguaje Ruby.
                            </p> 
                            : 
                            <p className='presentationContent'>
                                I studied for 6 months to be a Frontend React developer at <a  className='linkC' href="https://www.coderhouse.com/">CoderHouse</a> and FreeCodeCamp Right now, I am studying Backend Node.JS at CoderHouse and I am also a member of <a  className='linkC' href="https://www.argentina.gob.ar/produccion/transformacion-digital-y-economia-del-conocimiento/argentina-programa">"Argentina Programa"</a> where I am learning the Ruby language.
                            </p>}
                        </div>
                    </section>
                    
                </div>
            </Fade>
            <Fade left>
                <section className='presentation three'>
                    <div className='presentationInside'>
                        <h2 className='presentationInsideTitle'>
                            {
                            lenguages ?
                            "Herramientas de Desarrollo :"
                            :
                            "Development Tools :"
                            }
                        </h2>
                        {lenguages ? 
                        <p className='presentationContent'>
                            Actualmente me desempeño como desarrollador React JS y poseo experiencia en las librerias React Router Dom, Firebase, React-FontAwesome. Ademas tengo solidos conocimientos de Javascript ES6 (JS moderno), Fetch API, POO (Programacion orientada a objetos) CSS3, Prepocesador SCSS, Bootstrap 5, HTML5, GIT, la liberia Axios y Sweet Alert 2. Tambien poseo conocimientos sobre Diseño Web, Ruby y tengo experiencia en el diseño (web y mobible) en Figma, <a className='linkC' href="https://www.figma.com/file/sHRTBq0F9MI2t0taqBImTh/Freelance-Proyect?node-id=0%3A1">link a un proyecto en Figma</a>.
                        </p> 
                        : 
                        <p className='presentationContent'>
                            Currently, I'm React JS developer and I have experience in the React Router Dom, Firebase, React-FontAwesome libraries. I also have solid knowledge of Javascript ES6 (modern JS), Fetch API, OOP (Object Oriented Programming) CSS3, SCSS Preprocessor, Bootstrap 5, HTML5, GIT, Axios and Sweet Alert 2 liberia. I also have knowledge of Web Design, Ruby and I have design experience (web and mobible) in Figma, <a className='linkC' href="https://www.figma.com/file/sHRTBq0F9MI2t0taqBImTh/Freelance-Proyect?node-id=0%3A1">link to proyect in Figma</a>.
                        </p>}
                    </div>
                </section>
            </Fade>
        </div>
    );
}

export default Presentation;