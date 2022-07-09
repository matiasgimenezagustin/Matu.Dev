import { useState } from 'react';
import "./works.css"
import { useContextProvider} from '../../Context/ContextProvider';
import Tool from '../ToolsIcon/ToolsIcon';
import Fade from 'react-reveal/Fade';
function Works() {
    const { lenguages} = useContextProvider({})
    const [work, setWork] = useState(0)
    const handleChangeWorkAdd = () =>{
        work === 2 ? setWork(2) : (setWork(work + 1))
    }
    const handleChangeWorkSubtract = () =>{
        work === 0 ? setWork(0) : (setWork(work - 1))
    }





    const WORK0 =
        <section className='workSection'>
            <div className="workTitleContainer">
                <h3 className='workTitle'>{lenguages ? "E-Commerce en React: Chill Store" : "React E-Commerce: Chill Store"}</h3>
            </div>
            <div className='ytIframeContainer'>
                <button className='btnWork left' onClick={handleChangeWorkSubtract}>{"<"}</button>
                <iframe src="https://www.youtube.com/embed/annerNjihdY" width="560" height="415"  title="YouTube video player" frameBorder="0" className='ytIframe' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <button className='btnWork rigth' onClick={handleChangeWorkAdd}>{">"}</button>
            </div>
            <div className='workDescription'>
                <div className='toolsContainer'>
                    <h4 className='toolsSubtitle'>{lenguages ? "Herramientas: " : "Tools:"}</h4>
                    <Tool tool="htmlIcon"/>
                    <Tool tool="cssIcon"/>
                    <Tool tool="reactIcon"/>
                    <Tool tool="jsIcon"/>
                </div>
            </div>
        </section>;

    const WORK1 =
        <section className='workSection'>
            <div className="workTitleContainer">
                <h3 className='workTitle'>{lenguages ? "Proyecto Freelance" : "Freelance Proyect"}</h3>
            </div>
            <div className='ytIframeContainer'>
                <button className='btnWork left' onClick={handleChangeWorkSubtract}>{"<"}</button>
                <iframe width="560" height="415" className='ytIframe' src="https://www.youtube.com/embed/pf8zcBXixSw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <button className='btnWork rigth' onClick={handleChangeWorkAdd}>{">"}</button>
            </div>
            <div className='toolsContainer'>
                <h4 className='toolsSubtitle'>{lenguages ? "Herramientas: " : "Tools:"}</h4>
                <Tool tool="htmlIcon"/>
                <Tool tool="cssIcon"/>
                <Tool tool="bootstrapIcon"/>
            </div>
        </section>;
    const WORK2 = 
        <section className='workSection'>
            <div className="workTitleContainer">
                <h3 className='workTitle'>{lenguages ? "Proyecto de diseño web: Flow Royale" : "Web Desing proyect: Flow Royale"}</h3>
            </div>
            <div className='ytIframeContainer'>
                <button className='btnWork left' onClick={handleChangeWorkSubtract}>{"<"}</button>
                <iframe width="560" height="415" className='ytIframe' src="https://www.youtube.com/embed/uZpUw16BWfQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <button className='btnWork rigth' onClick={handleChangeWorkAdd}>{">"}</button>
            </div>
            <div className='toolsContainer'>
                <h4 className='toolsSubtitle'>{lenguages ? "Herramientas: " : "Tools:"}</h4>
                <Tool tool="htmlIcon"/>
                <Tool tool="cssIcon"/>
                <Tool tool="bootstrapIcon"/>
            </div>
        </section>;

    return (
        <Fade right>
            <div className='worksContainer' id="work">
                <h2 className='subTitle subTitleW'>{lenguages ? "Trabajos" : "Works"}</h2>
                {
                    work === 0 ? WORK0 : (work === 1 ?  WORK1 : WORK2)
                }
            </div>
        </Fade>
    );
}

export default Works;