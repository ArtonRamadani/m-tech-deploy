import './homepage.scss';
import React from 'react'
import SliderImg1 from "../../images/dashboard-images/Spitali-Onkologjik-Kazakistan_fin.png"
import SliderImg2 from "../../images/dashboard-images/Central-Concert-Hall-Astana-scaled.png"
import AluminProdukt from "../../images/dashboard-images/Alumin-Produktet-2.png"
import PVCimg from "../../images/dashboard-images/M-technologie-PVC-Product-2.png"
import SpiderGlassIMG from "../../images/dashboard-images/Spider-Glass.png"
import imageDescription from "../../images/dashboard-images/M-technologie-PVC-Product-2_5-removebg-preview.png"
import imagePrishtina from "../../images/dashboard-images/pexels-max-vakhtbovych-7031616.png"
import galleryData from "../../DB/singlePageData.json"
import ourPartners from "../../DB/partneret"


const Homepage = () => {
  let slicedGalley = galleryData.slice(0, 6);
  console.log('slicedGalley', slicedGalley)
  return (


    <div className="homepage">

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-label="Slide 1" className="active mainSliderButtons" aria-current="true" ></button>
          {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className='mainSliderButtons'></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='mainSliderButtons'></button> */}
          {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 4" className='mainSliderButtons'></button> */}
        </div>
        <div className="carousel-inner">
          {/* ////////////////////////// FIRST IMAGE SLIDER ////////////////////////// */}
          <div className="carousel-item active">
            <div className="container" >
              <h1 className='ImageDescription ' data-aos="fade-right" data-aos-duration="1500">Cilësi, inovacion dhe <br />zgjidhje e duhur</h1>
              <div className="lokacioni d-flex" data-aos="fade-right" data-aos-duration="1500" >
                <h4 className='emri'>Projekti: </h4>
                <h4 className='emriNderteses'> &nbsp;Spitali Onkologjik </h4>
                <i className="fa fa-location-dot " />
                <h4 className='emriNderteses ms-2'> Kazakistan</h4>
              </div>
              <button className='shikoProjektin' data-aos="fade-right" data-aos-duration="3000" > Shiko projektet</button>
            </div>
            <img src={SliderImg1} className="d-block w-100" alt="..." />
          </div>
          {/* //////////////////////////////////////////////////////////////////////// */}

          {/* <div className="carousel-item">
            <img src={SliderImg2} className="d-block w-100" alt="..." />
          </div> */}

          {/* //////////////////////////////////////////////////////////////////////// */}

          {/* <div className="carousel-item">
            <img src={SliderImg2} className="d-block w-100" alt="..." />
          </div> */}
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
            <div className="card col-3 pb-3"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
              <img className="card-img-top " alt="Alumni Project" src={AluminProdukt} />
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

            <div className="card col-3 mb-3"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500">
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

            <div className="card col-3 pb-3 "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
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

          <div className="circle1">
            <div className="d-flex">
              <h1 className='numri1'>1  <h2>Zgjedh   &nbsp; <strong> Profilin </strong></h2></h1>

            </div>
          </div>
          <div className="circle2">
            <div className="d-flex">
              <h1 className='numri2'>2  <h2>Zgjedh   &nbsp; <strong> xhamin </strong></h2></h1>

            </div>
          </div>
          <div className="circle3">
            <div className="d-flex">
              <h1 className='numri3'>3  <h2>Zgjedh   &nbsp; <strong> ngjyrën </strong></h2></h1>

            </div>
          </div>
          <img className='pershkrimiXhamitPVC' src={imageDescription} alt="Glass Description" />
        </div>
        <div className="col-6 pershkrimiXhamit">
          <p className='titulliPershkrimit'>Projekto dritarën tënde
            në tre hapa!</p>
          <p className='pershkrimiVogelXhamit'>
            Varësisht nga nevojat tuaja, me anë të vizualizimit në 3D
            ti mund të ndertosh dritaren tënde duke zgjedhur profilin,
            llojin e xhamave, dorëzave dhe ngjyren.
            <button className='buttoniXhamit'> <p className='tekstiButton'> Projekto </p></button>
          </p>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////// */}



      {/* //////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////// SLIDERI MAGJUPVE ///////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////// */}

      <div className="col-12 SliderDiv container d-flex">
        <div className="col-6">
          <p className='titulliSlider'>Planifikim, projektim e realizim deri në detajet më të vogla</p>
          <p className='pershkrimiSlider'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            <button className='buttoniSlider'>Ndërto tani</button>
          </p>

        </div>
        <div className="col-6 navigatedSlider">
          <div className="flickity-container">
            <div className="hand">
              <div className="card card-1"><span></span></div>
              <div className="card card-2"><span></span></div>
              <div className="card card-3"><span></span></div>
            </div>
          </div>
        </div>
      </div>


      {/* //////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////// */}



      {/* //////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////// IMAZHI ME TEKST /////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////// */}

      <div className="col-12 imazhiPrishtineDiv">
        <img className='imazhiPrishtines' src={imagePrishtina} alt="" />
        <div className="pershkrimiPrishtine ">
          <p className='TitulliPrishtine'>Benefitet e dritareve të kualitetit të lartë</p>
          <hr className='vizaNdarese' />
          <ul>
            <li>Increased home value</li>
            <li>Enhanced home security and safety</li>
            <li>Reduced dust and allergens</li>
            <li>Improved home comfort</li>
            <li>Improved energy efficiency</li>
            <li>Noise reduction</li>
            <li>Enhanced curb appeal</li>
            <li>Low-maintenance solutions</li>
          </ul>
        </div>
      </div>


      {/* //////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////// */}


      {/* //////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////// PROJEKTET E REALIZUARA /////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////// */}


      <div className="container mt-5 projektetErealizuara">
        <h1 className='titulliProjekteve'> Projektet e realizuara</h1>
        <p className='pershkrimiProjekteveTeRealizuara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        <div className="col-md-12">
          <div className="row ">
            {console.log('slicedGalley', slicedGalley)}
            {slicedGalley?.map((el) => {
              return (
                <>
                  <div className="col-md-6 singleCard" onClick={(e) => { { e.preventDefault(); window.location.assign(`http://localhost:3000${el?.pageUniqueURL}`) } }}
                    style={{ backgroundImage: `url(${el?.bg_img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: "415px" }}
                  >
                    <h5 className="cardTitle">{el?.location}</h5>
                    <p className="cardText mb-3">
                      <i className="fas fa-map-marker-alt mb-5" aria-hidden="true" /> &nbsp;{el?.obijektiName}
                    </p>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>


      {/* //////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////// */}




      {/* //////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////// PARTNERET /////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////// */}


      <div className="col-12 mt-5 partneretTane">
        {ourPartners.map((el, index) => {
          return (
       

              <img data-aos="fade-right" data-aos-duration="1000"src={el?.img_src} alt={el.title} />
       
          )
        })}
      </div>


      {/* //////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////// */}

    </div >


  )
}
export default Homepage;