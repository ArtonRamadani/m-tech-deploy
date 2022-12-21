import React from 'react'
import companyLogo from "./images/companyLogo.png"
import bgLogo from "./images/bg.png"
import "./commingSoon.css"

const CommingSoon = () => {
    return (
        <div className="commingSoon">
            <p onClick={(e) => { e.preventDefault(); window.location.href="/test" }} className='headerLink'>Developing!</p>

            <div className="content">
                <p className="weWillBeOnlineSoon ">We will be online soon!</p> 
                <img src={bgLogo}
                    className="bgImg"/>
            </div>
            <div className='footerCommingSoon'>

                <div className="footerCenter"> <a className="footerText" href="tel:+38349777075">+ 383 (0) 49 777 075 <p className="vija"> |
                </p></a> <a className="footerText" href="tel:+38349530414"> + 383 (0) 49 530 414 <p className="vija"> |</p></a>
                    <a className="footerText" href="mailto: shitja@m-technologie.com">shitja@m-technologie.com <p className="vija"> |
                    </p></a> <a className="footerText" href="mailto: info@m-technologie.com">info@m-technologie.com </a> </div>
                <img src={companyLogo} className="companyLogoFooter" alt="m-technologie"/>
            </div>

        </div>

    )
}
export default CommingSoon;

