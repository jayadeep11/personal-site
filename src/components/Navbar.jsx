import { useEffect, useState, useRef } from "react";
import { navItems } from "../constants";
import logo from "../assets/jd@logo.png";
import { gsap } from "gsap"; // Import GSAP

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true); // Tracks visibility of link names
  const [isDivVisible, setIsDivVisible] = useState(false); // Tracks visibility of the div
  const divRef = useRef(null); // Ref to the div for animation

  useEffect(() => {
    const handleScroll = () => {
      setShowLinks(window.scrollY <= 50); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDivVisibility = () => {
    if (!isDivVisible) {
      gsap.to(divRef.current, {
        x: 0, // Animate div to slide in from the right
        duration: 1, // Increased duration for slower transition
        ease: "power3.out", // Easing effect
      });
    } else {
      gsap.to(divRef.current, {
        x: "100%", // Slide out to the right
        duration: 1, // Increased duration for slower transition
        ease: "power3.in",
      });
    }
    setIsDivVisible(!isDivVisible); // Toggle the div visibility
  };

  const hideDiv = () => {
    gsap.to(divRef.current, {
      x: "100%", // Slide out when a link is clicked
      duration: 1, // Increased duration for slower transition
      ease: "power3.in",
    });
    setIsDivVisible(false);
  };

  return (
    <nav className="bg-transparent text-[#121212] sticky sm:top-2 md:top-5 top-10 z-50 w-full">
      <div className="flex justify-between items-center">
        <ul className={`hidden md:flex space-x-8`}>
          {showLinks &&
            navItems.map((item, index) => (
              <li key={index} className="hover:text-orange-500 transition-all">
                <a href={item.href} className="text-white">
                  {item.label}
                </a>
              </li>
            ))}
        </ul>
        <div className="ml-auto">
          <img
            src={logo}
            alt="Logo"
            className="h-16 cursor-pointer"
            onClick={toggleDivVisibility}
          />
        </div>
      </div>

      {/* Div that slides in and out */}
      <div
        ref={divRef}
        className="fixed top-0 right-0 w-1/3 h-full bg-black rounded-2xl shadow-lg flex flex-col items-center justify-center transform translate-x-full"
        style={{ transform: isDivVisible ? "translateX(0)" : "translateX(100%)" }}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={hideDiv}
        >
          Close
        </button>

        {/* Centered content */}
        <ul className="flex flex-col space-y-4 text-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-lg font-bold text-neutral-500 hover:text-orange-500"
                onClick={hideDiv} // Hide div when link is clicked
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

