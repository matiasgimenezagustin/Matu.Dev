import { useState } from 'react';
import "./works.css"
import { useContextProvider} from '../../Context/ContextProvider';

import html5Icon from "../../img/icons-tools/html5-icon.svg"
import css3Icon from "../../img/icons-tools/css3-icon.svg"
import jsIcon from "../../img/icons-tools/js-icon.svg"
import reactIcon from "../../img/icons-tools/react-icon.svg"
function Works() {
    const {theme, lenguages} = useContextProvider({})
    const [work, setWork] = useState(0)
    const handleChangeWorkAdd = () =>{
        work === 2 ? setWork(2) : (setWork(work + 1))
    }
    const handleChangeWorkSubtract = () =>{
        work === 0 ? setWork(0) : (setWork(work - 1))
    }
    const WORK1 =
        <section className='workSection'>
            <h3 className='workTitle'>{lenguages ? "React E-Commerce Work" : "E-Commerce en React"}</h3>
            <p>{work === 0 ? "work en 0" : "work en 1"}</p>
            <button >click me</button>
        </section>;
    

    return (
        <div className='worksContainer'>
            <h2 className='subTitle subTitleW'>{lenguages ? "Works" : "Trabajos"}</h2>
            <section className='workSection'>
                <div className="workTitleContainer">
                    <h3 className='workTitle'>{lenguages ? "React E-Commerce: Chill Store" : "E-Commerce en React: Chill Store"}</h3>
                </div>
                <div className='ytIframeContainer'>

                    <button className='btnWork left' onClick={handleChangeWorkSubtract}>{"<"}</button>

                    <iframe src="https://www.youtube.com/embed/annerNjihdY" width="560" height="415"  title="YouTube video player" frameBorder="0" className='ytIframe' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                    <button className='btnWork rigth' onClick={handleChangeWorkAdd}>{">"}</button>

                </div>
                
                <div className='workDescription'>
                    <div className='toolsContainer'>
                        <h4 className='toolsSubtitle'>{lenguages ? "Tools: " : "Herramientas: "}</h4>
                        <span className='workIconContainer htmlIcon'>
                            <span>html5</span>
                            <img src={html5Icon} alt="" className='workIcon '/>
                        </span>
                        <span className='workIconContainer cssIcon'>
                            <span>css3</span>
                            <img src={css3Icon} alt="" className='workIcon '/>
                        </span>
                        <span className='workIconContainer reactIcon'>
                            <span>react JS</span>
                            <img src={reactIcon} alt="" className='workIcon '/>
                        </span>
                        <span className='workIconContainer jsIcon'>
                            <span>Js</span>
                            <img src={jsIcon} alt="" className='workIcon '/>
                        </span>
                    </div>
                </div>
                
            </section>
        </div>
        
    );
}

export default Works;