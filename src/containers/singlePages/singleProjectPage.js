import React from 'react';
import "./singlepage.scss";
import ProjectIMG from "../../images/dashboard-images/Central-Concert-Hall-Astana-scaled.png";
import singlePageData from "../../DB/singlePageData.json";
import { useParams } from 'react-router-dom';
import testImg from "./3.png";
import testImgGallery from "./4.png";
import { Carousel } from '3d-react-carousal';
import ourPartners from "../../DB/partneret.json"

const SinglePageData = () => {
    let type = useParams('type')
    const pageData = singlePageData?.filter((el) => { return el?.lloji_biznesit == type.type });
    let thisPageData = singlePageData.find((el) => (el.pageUniqueURL == window.location.pathname))

    console.log('pageData', thisPageData)
    // const test = "	http://localhost:3000/static/media"
    // console.log('pagedataArton', pageData[0]?.galleria)
    // let slides = [
    // <img  src="http://localhost:3000/static/media/Fabrika-e-re_jashte_Final.56716bf6169a97c10d35.png" alt="1" />
    // pageData.map((el) => {
    //     return (
    //         <img src={el?.bg_img}
    //             alt={el?.alt}
    //             style={{ height: "500px", background: "no-repeat" }}
    //         />
    //     )
    // })
    // ]
    const callback = function (index) {
        console.log("callback", index);
    }


    return (
        <div className='SinglePage'>
            <div className="col-12 fotografiaProjektit"
                style={{ backgroundImage: `url(../../images/dashboard-images/Central-Concert-Hall-Astana-scaled.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: "100vh", width: "100%" }}
            >
                <h5 className="emriProjektit">Teatri dhe halla e koncerteve</h5>
                <p className="lokacioniProjektit mb-3">
                    <i className="fas fa-map-marker-alt mb-5" aria-hidden="true" /> &nbsp;Astana
                </p>
            </div>
            <div className="pershkrimiProjektit">
                <div className="centirati">

                    <div className="vija" />
                    <div className="col-3 statuset">
                        <p className='emriPershkrimit'>LLOJI I BIZNESIT</p>
                        <p className='statusiNgaJSON'>{thisPageData?.lloji_biznesit}</p>
                    </div>

                    <div className="vija" />
                    <div className="col-3 statuset">
                        <p className='emriPershkrimit'>OBIJEKTI</p>
                        <p className='statusiNgaJSON'>{thisPageData?.obijektiName}</p>
                    </div>

                    <div className="vija" />
                    <div className="col-3 statuset">
                        <p className='emriPershkrimit'>STATUS</p>
                        <p className='statusiNgaJSON'>{thisPageData?.statusi}</p>
                    </div>

                    <div className="vija" />
                    <div className="col-3 statuset">
                        <p className='emriPershkrimit'>ARCHITECT</p>
                        <p className='statusiNgaJSON'>{thisPageData?.architect}</p>
                    </div>
                </div>
            </div>

            <div className="kontentiProjektit">
                <div className="row mt-5 mb-5 rreshtimi">
                    <div className="col-md-5 imazhi">
                        <img src={testImg} alt="" />
                    </div>
                    <div className="col-md-4 pershkrimiImazhit">
                        <div className="detajetEprojektit">
                            <h1 className='titulli'>Detajet e projektit</h1>
                            <p className='tekstiSinglepage'>
                                {thisPageData?.kontenti?.detajet_e_projektit}
                            </p>
                        </div>
                        <div className="materialet">
                            <h1 className='titulli'>Materialet</h1>
                            <ul className='listimiUL'>
                                {console.log('materialet', thisPageData?.kontenti)}
                                {thisPageData?.kontenti?.materialet.map((el) => {
                                    return <li>{el}</li>
                                })

                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="galleria pt-5 pb-5  ">

                <Carousel slides={
                    pageData[0]?.galleria?.map((el) => {
                        return (
                            <img src={el}
                                // alt={el?.alt}
                                style={{ height: "500px", background: "no-repeat" }}
                            />
                        )
                    })}
                    autoplay={false} interval={1000} onSlideChange={callback} />


            </div>
            <div className="container mt-5 projektetErealizuara">
                <div className="tekstiProjekteveTengjashme">
                    <h1 className='titulliProjekteve'> Projektet e realizuara</h1>
                    <h3 className='numrimiProjekteve'>Showing: {pageData.length} projects</h3>
                </div>
                <div className="col-12">
                    <div className="row">
                        {console.log('slicedGalley', pageData)}
                        {pageData?.map((el) => {
                            console.log(el.bg_img)
                            return (
                                <>
                                    <div className="col-md-5  singleCard" onClick={(e) => { { e.preventDefault(); window.location.assign(`http://localhost:3000${el?.pageUniqueURL}`) } }}
                                        style={{ backgroundImage: `url(${el?.bg_img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: "415px" }}
                                    >
                                        <h5 className="cardTitle">{el?.obijektiName}</h5>
                                        <p className="cardText mb-3">
                                            <i className="fas fa-map-marker-alt mb-5" aria-hidden="true" /> &nbsp;{el?.location}
                                        </p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="col-12 mt-2
            mb-2 partneretTane">
                {ourPartners.map((el) => {
                    return (

                        <img src={el?.img_src} alt={el.title} />
                    )
                })}
            </div>
        </div>
    )
}
export default SinglePageData; 