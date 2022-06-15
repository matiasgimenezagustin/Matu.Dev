import React from 'react';
import "./mainContent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import { useContextProvider } from '../../Context/ContextProvider';



const MainContent = () => {

    const {lenguages} = useContextProvider();


    return (
        <main className='mainContent'>
            <h1 className='title'>
                Matias Agustin Gimenez
            </h1>
            <FontAwesomeIcon icon={faCode} className="mainIcon" />
            <h2 className='subTitle'>Front-End Developer</h2>
        </main>
    );
}

export default MainContent;