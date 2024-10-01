import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import ProjectsP from "./components/Projects";
import Skills from "./components/Skills";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="hel w-full mx-auto  px-9 relative z-50 ">
        <Hero />
        <About />
        <Workflow />
        <Footer />
      </div>
    </>
  );
};

export default App;
