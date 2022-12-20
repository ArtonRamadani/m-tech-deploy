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
    const pathi = window.location.pathname;

    const setSelectedLanguage = (lang) => {
        if (lang === "AL") {
            setLanguage(labels_AL);
            window.localStorage.setItem('selected-language', "Shqip");
        }
        if (lang === "EN") {
            setLanguage(labels_EN);
            window.localStorage.setItem('selected-language', "English");
        }
        if (lang === "DE") {
            setLanguage(labels_DE);
            window.localStorage.setItem('selected-language', "Deutschland");
        }
    }
    return (
        <div className='header' style={pathi == "/projects" ? { position: "relative", background: "linear-gradient(0deg, #1A2246, #1A2246)" } : { position: "absolute" }}>
            <div className="logo"
                onClick={(e) => { e.preventDefault(); window.location.assign("/") }}
            >
                <img className='imgLogo' src={companyLogo} alt="m-Technologie" />
            </div>
            <div className="linqet">
                <p role="button" className='headerLink'>{language?.find((el) => el?.key === "AboutUs")?.content}</p>
                <p onClick={(e) => { e.preventDefault(); window.location.href="/projects" }} role="button" className='headerLink'>{language?.find((el) => el?.key == "Projects")?.content}</p>
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

// const mapStateToProps = (state) => {
//     return {
//       loggedIn: state,
//       langData: state.data.langData,
//     };
//   };
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       logMeIn: () => dispatch(logMeIn()),
//     };
//   };
  
//   export default connect(mapStateToProps, mapDispatchToProps)(Header);
  export default Header;
  
  
// export default Header;

// import React, { useState } from 'react';
// import './header.scss';
// import labelsAL from '../../labels/labels-AL.json';
// import labelsEN from '../../labels/labels-EN.json';
// import labelsDE from '../../labels/labels-DE.json';
// import all_labels from '../../labels/all_labels.json';
// import companyLogo from '../../images/companyLogo.png'


// const Header = () => {
//     let labels_AL = labelsAL?.labels_AL
//     let labels_EN = labelsEN?.labels_EN
//     let labels_DE = labelsDE?.labels_DE
//     const [language, setLanguage] = useState(labels_AL);
//     window.localStorage.setItem('all_labels',all_labels )

//     const setSelectedLanguage = (lang) => {
//         if (lang === "AL") {
//             setLanguage(labels_AL);
//             window.localStorage.setItem('selectedLanguage', "labels_AL")
//             // console.log('languageAL', language)
//         }
//         if (lang === "EN") {
//             setLanguage(labels_EN);
//             window.localStorage.setItem('selectedLanguage', "labels_EN")
//             // console.log('languageEn', language)
//         }
//         if (lang === "DE") {
//             setLanguage(labels_DE);
//             // console.log('languageDE', language)
//             window.localStorage.setItem('selectedLanguage', "labels_DE")
//         }
//     }
