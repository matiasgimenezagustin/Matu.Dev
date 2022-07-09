import React from 'react';
import "./footer.css";
import wspIcon from "../../img/social/whatsappIcon.svg";
import lkIcon from "../../img/social/linkedinIcon.svg";
import gmailIcon from "../../img/social/gmailIcon.svg";
import freeCampIcon from "../../img/social/freeCampIcon.svg";

const Footer = (props) => {
    return (
        <footer className='footer'>
            <a href="https://wa.me/5491122491671?text=¡hi!"><img src={wspIcon} alt="whatsapp icon" /></a>
            <a href="https://www.linkedin.com/in/matias-agustin-gimenez-2515091b7/"><img src={lkIcon} alt="linkedin icon" /></a>
            <a href="https://www.freecodecamp.org/Matudev"><img src={freeCampIcon} alt="free code camp icon" /></a>
            <h4>Matu.Dev</h4>
        </footer>
    );
}

export default Footer;