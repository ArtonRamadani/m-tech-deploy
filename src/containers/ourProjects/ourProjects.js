import React from 'react'
import pageData from "../../DB/singlePageData.json";
import "./ourProjects.scss"


const OurProjects = () => {
  return (
    <div className="container mt-5 allProjects">
      <div className="tekstiProjekteveTengjashme">
        <h1 className='titulliProjekteve'> Projektet e realizuara</h1>
        <p className='numrimiProjekteve'>Showing: {pageData.length} projects</p>
      </div>
      <div className="col-md-12">
        <div className="row">
          {pageData?.map((el) => {
            console.log(el.bg_img)
            return (
              <>
                <div className="col-md-6 singleCard" onClick={(e) => { { e.preventDefault(); window.location.assign(`http://localhost:3000${el?.pageUniqueURL}`) } }}
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
  )
}
export default OurProjects;