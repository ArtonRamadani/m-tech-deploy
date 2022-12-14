import './homepage.scss';
import React from 'react'
import SliderImg1 from "../../images/dashboard-images/Spitali-Onkologjik-Kazakistan_fin.png"
import SliderImg2 from "../../images/dashboard-images/Central-Concert-Hall-Astana-scaled.png"
import AluminProdukt from "../../images/dashboard-images/Alumin-Produktet-2.png"
import PVCimg from "../../images/dashboard-images/M-technologie-PVC-Product-2.png"
import SpiderGlassIMG from "../../images/dashboard-images/Spider-Glass.png"
import imageDescription from "../../images/dashboard-images/M-technologie-PVC-Product-2_5-removebg-preview.png"



const Homepage = () => {
  return (


    <div className="homepage">

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-label="Slide 1" className="active mainSliderButtons" aria-current="true" ></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className='mainSliderButtons'></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='mainSliderButtons'></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 4" className='mainSliderButtons'></button>
        </div>
        <div className="carousel-inner">

          {/* //////////////////////////////////////////////////////////////////////// */}
          {/* ////////////////////////// FIRST IMAGE SLIDER ////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////// */}
          <div className="carousel-item active">
            <div className="container" >
              <h1 className='ImageDescription ' data-aos="fade-right">Cilësi, inovacion dhe <br />zgjidhje e duhur</h1>
              <div className="lokacioni d-flex" data-aos="fade-right">
                <h4 className='emri'>Projekti: </h4>
                <h4 className='emriNderteses'> Spitali Onkologjik </h4>
                <i class="fa fa-location-dot " />
                <h4 className='emriNderteses ms-2'> Kazakistan</h4>
              </div>
              <button className='shikoProjektin' data-aos="fade-right"> Shiko projektet</button>
            </div>
            <img src={SliderImg1} className="d-block w-100" alt="..." />
          </div>
          {/* //////////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////// */}


          {/* //////////////////////////////////////////////////////////////////////// */}
          {/* ////////////////////////// SECOND IMAGE SLIDER ////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////// */}
          <div className="carousel-item">
            <img src={SliderImg2} className="d-block w-100" alt="..." />
          </div>
          {/* //////////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////// */}

          {/* //////////////////////////////////////////////////////////////////////// */}
          {/* ////////////////////////// THIRD IMAGE SLIDER ////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////// */}

          <div className="carousel-item">
            <img src={SliderImg2} className="d-block w-100" alt="..." />
          </div>
          {/* //////////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////// */}

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* //////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////// SECOND PART OF PAGE ///////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////// */}
      <div className="materialetPunuese">
        <div className="materialet">
          <h1 className='porduketTitle'>Produkte të kualitetit të lartë!</h1>
          <div className="aranzhoCardat col-12">

            <div className="card col-3 pb-3">
              <img className="card-img-top " src={AluminProdukt} />
              <div className="description">
                <h5 className=" name-hide cardTitle">Produkte nga Alumini </h5>
                <p className="card-text mb-3">
                  Profilet vertikale dhe horizontale të këtij sistemi
                  të fasadës kombinohen lehtë me sisteme të tjera
                  që kanë efikasitet të lartë të energjisë.
                </p>
              </div>
              {/* <div className="quote">
              <p className="mt-5 mb-4">{teamData.moto} </p>
              <p className="emriHover">{teamData.title} {" "} {teamData.firstname} {" "} {teamData.surname}</p>
            </div> */}
            </div>

            <div className="card col-3 mb-3">
              <img className="card-img-top " src={PVCimg} />
              <div className="description">
                <h5 className=" name-hide cardTitle">Produkte nga Alumini </h5>
                <p className="card-text mb-3">
                  Këto profile u mundësojnë klientëve të realizojnë ëndrrat e tyre në ndriqimin e dhomave të errëta. Këto profile ofrojnë stabilitet të lartë static, duke rezultuar në dritë dhe energji më efikase.
                </p>
              </div>
              {/* <div className="quote">
              <p className="mt-5 mb-4">{teamData.moto} </p>
              <p className="emriHover">{teamData.title} {" "} {teamData.firstname} {" "} {teamData.surname}</p>
            </div> */}
            </div>

            <div className="card col-3 pb-3 ">
              <img className="card-img-top " src={SpiderGlassIMG} />
              <div className="description">
                <h5 className=" name-hide cardTitle">Produkte nga Alumini </h5>
                <p className="card-text mb-3">
                  Profilet vertikale dhe horizontale të këtij sistemi
                  të fasadës mbinohen lehtë me sisteme të tjera
                  që kanë efikasitet të lartë të energjisë.
                </p>
              </div>
              {/* <div className="quote">
              <p className="mt-5 mb-4">{teamData.moto} </p>
              <p className="emriHover">{teamData.title} {" "} {teamData.firstname} {" "} {teamData.surname}</p>
            </div> */}
            </div>
          </div>

        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////// */}



      {/* //////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////// MATERIALI PUNUES ///////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////// */}

      <div className="col-12 descriptionOfWork d-flex">
        <div className="col-6 ">

          <div className="circle1 ">
            <div className="d-flex">

              <div className="teksti ">
                <h1>1</h1>
              </div>
              <h2> Zgjedh<strong> Profilin </strong></h2>
            </div>
          </div>
          <img className='pershkrimiXhamitPVC' src={imageDescription} alt="Glass Description" />
        </div>
        <div className="col-6 pershkrimiXhamit">
          <p className='titulliPershkrimit'>Projekto dritarën tënde <br />
            në tre hapa!</p>
          <p className='pershkrimiVogelXhamit'>
            Varësisht nga nevojat tuaja, me anë të vizualizimit në 3D<br />
            ti mund të ndertosh dritaren tënde duke zgjedhur profilin,<br />
            llojin e xhamave, dorëzave dhe ngjyren.
          </p>
          <button className='buttoniXhamit'> Projekto </button>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////// */}


    </div>


  )
}
export default Homepage;