import Main from "./Main/Main";
import About from "./About/About";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//this is a function which displays main headings on the page
//rout used to directly load the linked page
export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
      <Footer />
    </Router>
  );
}
