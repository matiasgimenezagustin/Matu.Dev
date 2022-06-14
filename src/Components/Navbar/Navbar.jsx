import { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faSun} from '@fortawesome/free-solid-svg-icons'; 

import "./navbar.css";
import App from '../../App.jsx';
import "../../App.css";


const Navbar = () => {

    const style = document.documentElement.style;


    const [color, setColor] = useState(false);
    const [lenguage, setLenguage] = useState(false);
    useEffect(() => {
    }, [color, lenguage]);

    let colorNegro = '#000000';
    let colorAmarillo = '#FFEE33';
    let urlNegro = 'url("../../img/bg-negro.svg")';
    let urlAmarillo = 'url("../../img/bg-amarillo.svg")';

    const switchTheme = (amarillo, negro, url) => {
        style.setProperty("--url", url)
        style.setProperty("--amarillo", amarillo);
        style.setProperty("--negro", negro);
    }
    const handleSwitchColor = () =>{
        color === false ? (switchTheme(colorNegro, colorAmarillo, urlNegro)||(setColor(true))) : (switchTheme(colorAmarillo,colorNegro, urlAmarillo)||(setColor(false)))
    }
    const handleSwitchLenguage = () =>{
        lenguage === false ? setLenguage(true) : setLenguage(false);
    }

    return (
        <nav>
            <FontAwesomeIcon icon={faLaptopCode} className="iconNavbar"/>
            <h2 className='titleNavbar'>Developer</h2>
            <ul className='linksNavbarContainer'> 
                <li>
                    <a>
                        Menu
                    </a>
                </li>
                <li>
                    <a>
                    {lenguage ? "Trabajos" : "Works"}
                    </a>
                </li>
                <li>
                    <a>
                    {lenguage ? "Contacto" : "Contact"}
                    </a>
                </li>
            </ul>
            <div className='buttons'>
                <label className='switch'>
                    <input type="checkbox" onClick={handleSwitchColor}/>
                    <span class="slider">
                        <span className='iconContainer'>
                            <FontAwesomeIcon icon={faSun}/>
                        </span>
                    </span>
                </label>
                <label className='switch'>
                    <input type="checkbox" onClick={handleSwitchLenguage}/>
                    <span class="slider">
                        <span className='iconContainer'>
                            {lenguage ? "Es" : "En"}
                        </span>
                    </span>
                </label>
            </div>
        </nav>
    );
}

export default Navbar;