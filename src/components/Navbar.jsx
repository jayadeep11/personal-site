import { useState, useRef } from "react";
import imgcode from "../assets/jd@logo.png";
import { navItems } from "../constants";
import { gsap } from "gsap"; // Import GSAP

const Navbar = () => {
  const [isDivVisible, setIsDivVisible] = useState(false); // Tracks visibility of the content inside the div (logo or links)
  const divRef = useRef(null); // Ref to the logo div for animation

  const toggleDivVisibility = () => {
    if (!isDivVisible) {
      // Scale up the div from the bottom-right to show the links
      gsap.to(divRef.current, {
        scaleX: 10, // Increase the width of the div
        scaleY: 15, // Adjust the height of the div
        transformOrigin: "top right", // Scale from the top-right side
        duration: 1, // Duration for transition
        ease: "power3.out", // Easing effect
      });
    } else {
      // Scale down the div to show the logo again
      gsap.to(divRef.current, {
        scaleX: 1, // Reset to original width
        scaleY: 1, // Reset to original height
        transformOrigin: "top right", // Scale from the top-right side
        duration: 1, // Duration for transition
        ease: "power3.in",
      });
    }
    setIsDivVisible(!isDivVisible); // Toggle between showing the logo and links
  };

  return (
    <nav className="bg-transparent sticky px-5 top-10 z-50 w-full">
      <div className="flex justify-between items-center">
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-orange-500 transition-all">
              <a href={item.href} className="text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="fixed bottom-5 right-5 cursor-pointer w-20 h-12  flex items-center justify-center relative overflow-hidden rounded-lg" // Fixed position at the bottom-right
          onClick={toggleDivVisibility}
          ref={divRef}
          style={{ transformOrigin: "top right" }} // Ensure scaling happens from the top-right side
        >
          {/* Logo content (show when not visible) */}
          {!isDivVisible && (
            <img src={imgcode} alt="Logo" className="w-10 h-10" /> 
          )}

          {/* Navigation links (show when div is visible) */}
          {isDivVisible && (
            <ul className="absolute  bg-black p-4 flex flex-col items-center justify-center space-y-1 rounded-lg">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-lg font-bold text-white hover:text-orange-500"
                    onClick={toggleDivVisibility} 
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

