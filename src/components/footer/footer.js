import React from 'react'
import "./footer.scss"
import FooterIMG from "../../images/Fabrika-e-re_jashte_Final.png"
const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="gradienti"></div>
                <img className='w-100' src={FooterIMG} alt="" />
            </div>
            <div className="bottom container pb-5">
                <div className=" footerBlocks mx-4 col-3">
                    <h4 className="titulliFooter">ABOUT US</h4>

                    <p className='tekstiAboutUsFooter'>M-Technologie është anëtare e kompanisë me renome ndërkombëtare, “MABETEX GROUP” me seli në Lugano të Zvicrës.</p>
                </div>
                <div className="footerBlocks col-3">
                    <h4 className="titulliFooter">OUR SERVICES</h4>
                    <div className="footer-links">
                        <a href="#">Produkte nga alumini</a>
                        <a href="#">PVC</a>
                        <a href="#">Produkte të xhamit</a>
                    </div>
                </div>
                <div className="footerBlocks col-3">
                    <h4 className="titulliFooter">FOR OUR CLIENTS</h4>
                    <div className="footer-links">
                        <a href="#">Katalogjet</a>
                        <a href="#">Mirënjohjet</a>
                        <a href="#">Çertifikatat</a>
                    </div>
                </div>
                <div className="footerBlocks col-3">
                    <h4 className="titulliFooter">CONTACT US</h4>
                    <div className="footer-links">


                        <a href="#"><strong>+ 383 (0) 49 777 075</strong></a>
                        <a href="#"><strong>+ 383 (0) 49 530 414</strong></a>
                        <a href="#">shitja@m-technologie.com</a>
                        <a href="#">info@m-technologie.com</a>

                    </div>
                </div>

            </div>
            <div className="container lastPart">
                <div className="col-3 mx-4 Copyright">© 2022 m-technologie.com</div>
                <div className="col-3"></div>
                <div className="col-3"></div>
                <div className="col-3 privacyPolicy">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Sitemap</a>
                </div>
            </div>
        </div>
    )
}
export default Footer;
