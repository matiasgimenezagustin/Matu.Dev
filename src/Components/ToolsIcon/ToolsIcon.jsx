import React from 'react';
import html5Icon from "../../img/icons-tools/html5-icon.svg"
import css3Icon from "../../img/icons-tools/css3-icon.svg"
import jsIcon from "../../img/icons-tools/js-icon.svg"
import reactIcon from "../../img/icons-tools/react-icon.svg"
import bootstrapIcon from "../../img/icons-tools/bootstrap-icon.svg"
import "./toolsIcon.css"


const Tool = (props) => {

    let iconSelect;
    let txtSelect;

//recibe por props una opcion de Tool
    switch(props.tool){

        case "htmlIcon":
            iconSelect = html5Icon;
            txtSelect = "Html5";
            break;

        case "cssIcon":
            iconSelect = css3Icon;
            txtSelect = "Css3";
            break;

        case "reactIcon":
            iconSelect = reactIcon;
            txtSelect = "React JS";
            break;

        case "jsIcon":
            iconSelect = jsIcon;
            txtSelect = "Js";
            break;

        case "bootstrapIcon":
            iconSelect = bootstrapIcon;
            txtSelect = "Bootstrap";
            break;

    }
    
    return (
        <span className={`workIconContainer ${props.tool}` }>
            <span>{txtSelect}</span>
            <img src={iconSelect} alt="" className='workIcon' />
        </span>
    );
}

export default Tool;