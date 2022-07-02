import React from 'react';

function ContentComponent(props) {
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
                        Actualmente trabajo con tecnologias como React JS, HTML5, CSS, SCSS, Bootstrap 5, JS y figma para diseñar.
                    </p>}
                </div>
            </section>
            
    );
}

export default ContentComponent;