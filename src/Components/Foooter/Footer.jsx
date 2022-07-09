import React from 'react';
import "./footer.css";
import wspIcon from "../../img/social/whatsappIcon.svg";
import lkIcon from "../../img/social/linkedinIcon.svg";
import gmailIcon from "../../img/social/gmailIcon.svg";
import freeCampIcon from "../../img/social/freeCampIcon.svg";

const Footer = (props) => {
    return (
        <footer className='footer'>
            <img src={wspIcon} alt="" />
            <img src={gmailIcon} alt="" />
            <h4>Matu.Dev</h4>
            <img src={lkIcon} alt="" />
            <img src={freeCampIcon} alt="" />
        </footer>
    );
}

export default Footer;