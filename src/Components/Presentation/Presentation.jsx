import React from 'react';
import { useContextProvider } from '../../Context/ContextProvider';
import "./presentation.css";
import themeAmarilloImg from "../../img/theme-amarillo-presentation-img.svg"
import themeNegroImg from "../../img/theme-negro-presentation-img.svg"

const Presentation = () => {
    const {lenguages,theme} = useContextProvider({});

    return (
        <div className='sectionContainer'>
            <h2 className='subTitleP subTitle'>{lenguages ? "Menu" : "Inicio"}</h2>
            <section className='presentation one'>
                <div className='presentationInside'>
                    <h2 className='presentationSubTitle'>
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
                <div className='imgContainerPresentation'>
                    {
                    theme ? <img src={themeNegroImg} alt="" className='imgPresentation'/> : <img src={themeAmarilloImg} alt="" className='imgPresentation'/>
                    }
                </div>
            <section className='presentation two'>
                <div className='presentationInside'>
                    <h2 className='presentationSubTitle'>
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
                        Actualmente trabajo con tecnologias como React JS, HTML5, CSS, SCSS, Bootstrap 5, JS y figma para diseñar.
                    </p>}
                </div>
            </section>
            <section className='presentation three'>
                <div className='presentationInside'>
                    <h2 className='presentationSubTitle'>
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
                        Actualmente trabajo con tecnologias como React JS, HTML5, CSS, SCSS, Bootstrap 5, JS y figma para diseñar.
                    </p>}
                </div>
            </section>
        </div>
    );
}

export default Presentation;