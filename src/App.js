import { Routes, Route, BrowserRouter } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Homepage from "./containers/homepage/homepage";
import ContactUs from "./containers/contactUs/contactUs";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </BrowserRouter>


    </div>
  );
}

export default App;
