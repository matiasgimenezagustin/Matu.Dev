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
                                "About me :"
                                :
                                "Acerca de mi :"
                                }
                            </h2>
                            {lenguages ? 
                            <p className='presentationContent'>
                                Hi there! 🖐 I'm a Front-End Developer with experience in React JS, now I'm studying in <a className='linkC' href="https://www.coderhouse.com/">CoderHouse</a> Backend bootcamp with Node.js. I enjoy the development of each project that I have given that I love being able to find solutions and exploit my creativity.
                            </p> 
                            : 
                            <p className='presentationContent'>
                                Que tal! 🖐 Soy un Desarrollador Front-End con experiencia en React JS, actualmente estoy estudiando en <a  className='linkC' href="https://www.coderhouse.com/">CoderHouse</a> el bootcamp de Backend con Node.js. Disfruto el desarrollo de cada proyecto que tengo dado a que me encanta poder encontrar soluciones y explotar mi creatividad.
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
                                "Development tools :"
                                :
                                "Herramientas de desarrollo :"
                                }
                            </h2>
                            {lenguages ? 
                            <p className='presentationContent'>
                                Hi there! 🖐 I'm a Front-End Developer with experience in React JS, now I'm studying in <a className='linkC' href="https://www.coderhouse.com/">CoderHouse</a> Backend bootcamp with Node.js. I enjoy the development of each project that I have given that I love being able to find solutions and exploit my creativity.
                            </p> 
                            : 
                            <p className='presentationContent'>
                                Actualmente uso en mi dia a dia el framework "React JS".
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
                            "Development tools :"
                            :
                            "Herramientas de desarrollo :"
                            }
                        </h2>
                        {lenguages ? 
                        <p className='presentationContent'>
                            Hi there! 🖐 I'm a Front-End Developer with experience in React JS, now I'm studying in <a className='linkC' href="https://www.coderhouse.com/">CoderHouse</a> Backend bootcamp with Node.js. I enjoy the development of each project that I have given that I love being able to find solutions and exploit my creativity.
                        </p> 
                        : 
                        <p className='presentationContent'>
                            Actualmente me desempeño como desarrollador React JS y poseo experiencia en las librerias React Router Dom, Firebase, React-FontAwesome. Ademas tengo solidos conocimientos de Javascript ES6 (JS moderno), Fetch API, POO (Programacion orientada a objetos) CSS3, Prepocesador SCSS, Bootstrap 5, HTML5, GIT, la liberia Axios y Sweet Alert 2. Tambien poseo conocimientos sobre Diseño Web y tengo experiencia en el diseño (web y mobible) en Figma, <a className='linkC' href="https://www.figma.com/file/sHRTBq0F9MI2t0taqBImTh/Freelance-Proyect?node-id=0%3A1">link a un proyecto en Figma</a>.

                        </p>}
                    </div>
                </section>
            </Fade>
        </div>
    );
}

export default Presentation;