import React from 'react';
import "./mainContent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import { useContextProvider } from '../../Context/ContextProvider';
import { Animated } from 'react-animated-css';


import { Fade } from 'react-reveal';


const MainContent = () => {

    const {lenguages} = useContextProvider([]);

    

    return (
        <main className='mainContent'>
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <h1 className='title'>
                    Matias Agustin Gimenez
                </h1>
            </Animated>
            <FontAwesomeIcon icon={faCode} className="mainIcon" />
            <Fade right>
                <h2 className='subTitle'>{lenguages  ? "Desarrollador Front-End" : "Front-End Developer"}</h2>
            </Fade>
        </main>
    );
}

export default MainContent;