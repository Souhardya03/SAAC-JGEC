import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import Banner from "./pages/Banner/Banner";
import About from "./pages/About/About";
import Aos from "aos";
import Projects from "./pages/Projects/Projects";
import Team from "./pages/Team/Team"

function App() {
  Aos.init({
    duration: 2000,
    once: true,
  });
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Banner />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/team" element={<Team/>}/>
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
