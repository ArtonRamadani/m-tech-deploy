import React, { useState } from 'react';
import './header.scss';
import labelsAL from '../../labels/labels-AL.json';
import labelsEN from '../../labels/labels-EN.json';
import labelsDE from '../../labels/labels-DE.json';
import companyLogo from '../../images/companyLogo.png'


const Header = () => {
    let labels_AL = labelsAL?.labels_AL
    let labels_EN = labelsEN?.labels_EN
    let labels_DE = labelsDE?.labels_DE
    const [language, setLanguage] = useState(labels_AL);

    const setSelectedLanguage = (lang) => {
        if (lang === "AL") {
            setLanguage(labels_AL);
        }
        if (lang === "EN") {
            setLanguage(labels_EN);

        }
        if (lang === "DE") {
            setLanguage(labels_DE);
        }
    }
    return (
        <div className='header '>
            <div className="logo">
                <img className='imgLogo' src={companyLogo} alt="m-Technologie" />
            </div>
            <div className="linqet">
                <p role="button" className='headerLink'>{language?.find((el) => el?.key === "AboutUs")?.content}</p>
                <p role="button" className='headerLink'>{language?.find((el) => el?.key == "Projects")?.content}</p>
                <p role="button" className='headerLink'>Cka ofrojmë</p>
                <p role="button" className='headerLink'>Për publikun</p>
                <p role="button" className='headerLink'>Kontakti</p>
            </div>
            <div className="languages">
                <p role="button" className={language == labels_AL ? 'languagesButtons selectedLang' : 'languagesButtons'} onClick={(e) => { e.preventDefault(); setSelectedLanguage("AL") }}>AL</p>
                <p role="button" className={language == labels_EN ? 'languagesButtons selectedLang' : 'languagesButtons'} onClick={(e) => { e.preventDefault(); setSelectedLanguage("EN") }}>EN</p>
                <p role="button" className={language == labels_DE ? 'languagesButtons selectedLang' : 'languagesButtons'} onClick={(e) => { e.preventDefault(); setSelectedLanguage("DE") }}>DE</p>
            </div>
            <a href='#' target="_blank" className='headerB2Bbutton'>B2B</a>
        </div>
    )
}
export default Header;
