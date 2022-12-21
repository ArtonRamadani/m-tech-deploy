import { Routes, Route, BrowserRouter } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Homepage from "./containers/homepage/homepage";
import ContactUs from "./containers/contactUs/contactUs";
import SingleProjectPage from "./containers/singlePages/singleProjectPage"
import OurProjects from "./containers/ourProjects/ourProjects";
import CommingSoon from "./containers/commingSoon/commingSoon";

function App() {
  return (
    <div className="App ">

      <BrowserRouter>
      {window.location.pathname !== "/" ?
        <Header />
      :""}
        <Routes>
          <Route path="/" element={<CommingSoon />} />
          <Route path="/test1" element={<Homepage />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/project/:id/:type" element={<SingleProjectPage />} />
          <Route path="/projects" element={<OurProjects />} />
        </Routes>
        {window.location.pathname !== "/" ?

        <Footer />:""}
      </BrowserRouter>


    </div>
  );
}

export default App;
