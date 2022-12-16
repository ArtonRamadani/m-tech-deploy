import React from 'react';
import "./singlepage.scss";
import ProjectIMG from "../../images/dashboard-images/Central-Concert-Hall-Astana-scaled.png";
import singlePageData from "./singlePageData";
import { useParams } from 'react-router-dom';
import testImg from "./3.png";

const SinglePageData = () => {
    let type = useParams('type')
    console.log("data", singlePageData);
    console.log("filter", singlePageData?.filter((el) => { return el?.lloji_biznesit }));
    return (
        <div className='SinglePage'>
            <div className="col-md-6 fotografiaProjektit"
                style={{ backgroundImage: `url(../../images/dashboard-images/Central-Concert-Hall-Astana-scaled.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: "100vh", width: "100%" }}
            >
                <h5 className="emriProjektit">Teatri dhe halla e koncerteve</h5>
                <p className="lokacioniProjektit mb-3">
                    <i className="fas fa-map-marker-alt mb-5" aria-hidden="true" /> &nbsp;Astana
                </p>
            </div>
            <div className=" pershkrimiProjektit">

                <div className="vija" />
                <div className="col-3 statuset">
                    <p className='emriPershkrimit'>LLOJI I BIZNESIT</p>
                    <p className='statusiNgaJSON'>rezidencial</p>
                </div>

                <div className="vija" />
                <div className="col-3 statuset">
                    <p className='emriPershkrimit'>OBIJEKTI</p>
                    <p className='statusiNgaJSON'>rezidencial</p>
                </div>

                <div className="vija" />
                <div className="col-3 statuset">
                    <p className='emriPershkrimit'>STATUS</p>
                    <p className='statusiNgaJSON'>rezidencial</p>
                </div>

                <div className="vija" />
                <div className="col-3 statuset">
                    <p className='emriPershkrimit'>ARCHITECT</p>
                    <p className='statusiNgaJSON'>rezidencial</p>
                </div>
            </div>
            <div className="container kontentiProjektit">
                <div className="row mt-5 mb-5 rreshtimi">
                    <div className="col-md-6 imazhi">
                        <img src={testImg} alt="" />
                    </div>
                    <div className="col-md-6 pershkrimiImazhit">
                        <div className="detajetEprojektit">
                            <h1 className='titulli'>Detajet e projektit</h1>
                            <p className='tekstiSinglepage'>Teatri mbulon një sipërfaqe prej 64,000 metrash katrorë. Një nga teatrot më të mira në botë, me një sintezë të përsosur e stilit klasik dhe teknologjisë së përparuar, e ndërtuar me vëmendje të madhe me detaje dhe materiale me cilësi të lartë.
                            </p>
                        </div>
                        <div className="materialet">
                            <h1 className='titulli'>Materialet</h1>
                            <ul className='listimiUL'>
                                <li>PVC</li>
                                <li>Glass façade</li>
                                <li>Aluminum façade</li>
                                <li>Continual façade</li>
                                <li>Skylight</li>
                                <li>Window+Door with remote control</li>
                                <li>Window+Door</li>
                                <li>Interior</li>
                                <li> Winder garden</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="galleria">
                
            </div>
        </div>
    )
}
export default SinglePageData; 