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
import Team from "./pages/Team/Team";

import Contact from "./pages/Contact/Contact";
import SiteAlert from "./components/Alerts/SiteAlert";
import Starfield from "./components/Decor/Starfield";


function App() {
  Aos.init({
    duration: 2000,
    once: true,
  });
  const location = useLocation();

  return (
    <>
      <Navbar />
      <SiteAlert />
      <Starfield />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Banner />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/team" element={<Team/>}/>
          {/* <Route path="/leaderboard" element={<Noticeboard/>} />
          <Route path="/blog" element={<Blog/>} /> */}
          <Route path="/contact" element={<Contact/>} />
          {/* <Route path="/admin" element={<AdminLogin/>} />
          <Route path="/dashboard" element={<AdminDashboard/>} /> */}
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
