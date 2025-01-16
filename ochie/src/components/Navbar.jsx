import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Split the logo text into individual letters for typing effect
    const letters = logoRef.current.innerText.split("");
    logoRef.current.innerHTML = ""; // Clear current content

    // Append each letter as a span to apply animation to each
    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter;
      logoRef.current.appendChild(span);
    });

    // Apply the typing animation (appear from left to right)
    tl.fromTo(
      logoRef.current.children,
      { opacity: 0, x: -30 },  // Start with slight horizontal movement for a "typing" feel
      {
        opacity: 1,
        x: 0, // Letters settle in place
        duration: 0.15,  // A little longer for smoothness
        stagger: 0.08,  // Slightly longer stagger for smoother reveal
        delay: 0.6,  // Add a slight delay before the animation starts
      }
    );
  }, []);

  const menuItems = ["Services", "Our Work", "About Us", "Insights", "Contact Us"];

  return (
    <div>
      {/* Navbar */}
      <div
        className={`w-full px-4 md:px-9 py-4 flex justify-between items-center fixed top-0 left-0 z-50 transition-colors duration-300 ${
          isMenuOpen ? "bg-black text-white" : "bg-transparent text-black backdrop-blur-md bg-opacity-50"
        }`}
      >
        {/* Logo */}
        <div className="logo flex items-center">
          <h2
            ref={logoRef}
            className="text-xl md:text-2xl font-bold uppercase tracking-wide text-white"
          >
            Eleven Interior
          </h2>
        </div>

        {/* Hamburger Icon */}
        <button
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className={`block md:hidden focus:outline-none ${
            isMenuOpen ? "text-white" : "text-white"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            aria-hidden="true"
            className={`w-6 h-6 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
              className={`text-md font-light capitalize transition-colors ${
                isMenuOpen ? "text-white" : "text-white"
              } hover:text-gray-400`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black text-white z-40 flex flex-col justify-between p-8 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Mobile Menu Links */}
        <div className="flex flex-col gap-8 text-4xl font-bold uppercase mt-20">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
              className="hover:text-gray-400 transition-all relative group"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {item}
              {/* Hover Effect: Underline */}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex flex-col gap-6 mt-auto">
          <span className="text-sm uppercase">S:</span>
          <div className="flex flex-col gap-2 text-lg">
            {["Instagram", "Behance", "Facebook", "LinkedIn"].map(
              (platform, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-gray-400 transition-all hover:underline"
                >
                  {platform}
                </a>
              )
            )}
          </div>
          <span className="text-sm uppercase">L:</span>
        </div>
      </div>

      {/* Smooth Scrolling */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

export default Navbar;