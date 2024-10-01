import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="hel w-full mx-auto sm:px-14  px-20 relative z-30 ">
        <Navbar />
        <Hero />
        <About />
        <Workflow />
        <Footer />
      </div>
    </>
  );
};

export default App;
