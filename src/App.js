import Home from "./pages/Home";
import BrowseJob from "./pages/BrowseJob";
import Contact from "./pages/Contact";
import Page from "./pages/Page";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Header />
    <Navbar/>
    <Footer />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/BrowseJob" element={<BrowseJob />}></Route>
      <Route path="/Page" element={<Page />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>



    </Routes>
   <Home />
< BrowseJob />
<Contact />
<Page /> 

    
    </>
    
  );
}

export default App;
