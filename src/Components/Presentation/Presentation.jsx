import React from 'react';
import { useContextProvider } from '../../Context/ContextProvider';
import "./presentation.css";

const Presentation = () => {
    const {lenguages} = useContextProvider();
    return (
        <section className='presentation'>
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
                    Hi there! 🖐 I'm a Front-End Developer with experience in React JS, now I'm studying in <a href="https://www.coderhouse.com/">CoderHouse</a> Backend bootcamp with Node.js. I enjoy the development of each project that I have given that I love being able to find solutions and exploit my creativity.
                </p> 
                : 
                <p className='presentationContent'>
                    Que tal! 🖐 Soy un Desarrollador Front-End con experiencia en React JS, actualmente estoy estudiando en <a href="https://www.coderhouse.com/">CoderHouse</a> el bootcamp de Backend con Node.js. Disfruto el desarrollo de cada proyecto que tengo dado a que me encanta poder encontrar soluciones y explotar mi creatividad.
                </p>}
                {
                /* <p className='presentationContent'>
                
                </p>} */
                /* {<p>
                    
                </p>} */}
                
            </div>
        </section>
    );
}

export default Presentation;