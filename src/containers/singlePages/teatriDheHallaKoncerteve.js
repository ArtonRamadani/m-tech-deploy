import React from 'react'
import "./singlepage.scss"
import ProjectIMG from "../../images/dashboard-images/Central-Concert-Hall-Astana-scaled.png"
const TeatriDheHallaKoncerteve = () => {
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
        </div>
    )
}
export default TeatriDheHallaKoncerteve; 