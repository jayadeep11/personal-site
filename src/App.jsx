import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { socials } from "./constants";
import { details } from "./constants";
import "./index.css"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="hel w-full mx-auto pt-20 px-9 relative z-50 ">
        <Hero />
        <About />
        <Workflow />
        <Projects />
        <Skills />
      </div>
      <Footer />
    </>
  );
};

export default App;
