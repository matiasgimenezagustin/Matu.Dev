import { useState, useEffect} from 'react';
import { useContextProvider } from '../../Context/ContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faSun} from '@fortawesome/free-solid-svg-icons'; 

import "./navbar.css";
import App from '../../App.jsx';
import "../../App.css";


const Navbar = () => {
    const style = document.documentElement.style;
    const burger = document.querySelector(".burger");
    const navMenu = document.querySelector(".navMenu");


    const [color, setColor] = useState(false);
    const [lenguage, setLenguage] = useState(false);
    const [onDown, setOnDown] = useState(false);
    const {switchLenguage} = useContextProvider();
    const {switchThemes} = useContextProvider();



    useEffect(() => {
    }, [color, lenguage, onDown]);

    let colorNegro = '#000000';
    let colorAmarillo = '#FFEE33';
    let urlNegro = 'url(../../img/bg-negro.svg)';
    let urlAmarillo = 'url(../../img/bg-amarillo.svg)';

    const droppdownMenu = () => {
        burger.classList.toggle("active");
        navMenu.classList.toggle("active");
        onDown === false ? setOnDown(true) : setOnDown(false);
    }


    const switchTheme = (amarillo, negro, url) => {
        style.setProperty("--url", url)
        style.setProperty("--amarillo", amarillo);
        style.setProperty("--negro", negro);
    }
    const handleSwitchColor = () =>{
        color === false ? (switchTheme(colorNegro, colorAmarillo, urlNegro)||(setColor(true))||(switchThemes(true))) : (switchTheme(colorAmarillo,colorNegro, urlAmarillo)||(setColor(false)||(switchThemes(false))))
    }
    const handleSwitchLenguage = () =>{
        lenguage === false ? setLenguage(true) : setLenguage(false);
        switchLenguage(lenguage)
    }

    return (

   
        <nav className='navbar'>
            <FontAwesomeIcon icon={faLaptopCode} className="iconNavbar"/>
            <h2 className='titleNavbar navBranding'>Developer</h2>
            <ul className='linksNavbarContainer navMenu'> 
                <li className='navItem'>
                    <a className='navLink'>
                        Menu
                    </a>
                </li>
                <li className='navItem'>
                    <a className='navLink'>
                    {lenguage ? "Trabajos" : "Works"}
                    </a>
                </li>
                <li className='navItem'>
                    <a className='navLink'>
                    {lenguage ? "Contacto" : "Contact"}
                    </a>
                </li>
            </ul>
            <div className='buttons'>
                <label className='switch'>
                    <input type="checkbox" onClick={handleSwitchColor}/>
                    <span className="slider">
                        <span className='iconContainer'>
                            <FontAwesomeIcon icon={faSun} className="iconBtn"/>
                        </span>
                    </span>
                </label>
                <label className='switch'>
                    <input type="checkbox" onClick={handleSwitchLenguage}/>
                    <span className='slider'>
                        <span className='iconContainer'>
                            {lenguage ? "Es" : "En"}
                        </span>
                    </span>
                </label>
            </div>
            <div className="burger" onClick={droppdownMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
}

export default Navbar;
