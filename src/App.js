import { Routes, Route, BrowserRouter } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Homepage from "./containers/homepage/homepage";
import ContactUs from "./containers/contactUs/contactUs";
import SingleProjectPage from "./containers/singlePages/singleProjectPage"

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/project/:id/:type" element={<SingleProjectPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>


    </div>
  );
}

export default App;
