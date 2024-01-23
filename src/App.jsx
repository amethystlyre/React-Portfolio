import Nav from "./components/Nav";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer"
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
