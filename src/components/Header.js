import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = ({
  title,
  handleToggle,
  handleClick,
  pricingRef,
  homeRef,
  contactRef,
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [fontColor, setFontColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 10) {
        setBgColor("white");
        setFontColor("black");
      } else {
        setBgColor("transparent");
        setFontColor("white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className="text-black fixed top-0 w-full"
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-full px-4 py-2 flex items-center justify-between">
          <h1
            className="font-medium text-xl w-full"
            style={{ color: fontColor }}
          >
            Logo {title}
          </h1>
          <button
            className="flex justify-end w-full text-gray-500 hover:text-white focus:text-white lg:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <FiMenu className="text-black hover:text-blue-500 transition ease-in-out" />
          </button>
          <nav className="hidden lg:block lg:items-center w-full lg:w-auto">
            <ul className="hidden lg:flex lg:justify-end">
              <li className="mr-3">
                <a
                  onClick={(e) => handleClick(homeRef, e)}
                  className="block px-4 py-2 text-lg text-black font-bold hover:text-white hover:bg-blue-300"
                >
                  About
                </a>
              </li>
              <li className="mr-3">
                <a
                  onClick={(e) => handleClick(pricingRef, e)}
                  className="block px-4 py-2 text-lg text-black font-bold hover:text-white hover:bg-blue-300"
                >
                  Pricing
                </a>
              </li>
              <li className="mr-3">
                <a
                  onClick={(e) => handleClick(contactRef, e)}
                  className="block px-4 py-2 text-lg text-black font-bold hover:text-white hover:bg-blue-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <div
                  className="w-32 border-blue-300 hover:bg-blue-300 border-2 rounded-xl bg-white hover:text-white text-blue-300 h-10 transition-all ease-in-out duration-300"
                  onClick={() => {
                    handleToggle();
                  }}
                >
                  <p className="w-full h-full space-x-1 uppercase font-bold flex justify-center items-center cursor-pointer">
                    Login
                  </p>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <nav
          className={`h-${
            isNavOpen ? "full" : "0"
          } transition-all ease-in-out duration-130 lg:hidden ${
            isNavOpen ? "backdrop-blur-sm" : ""
          } py-4`}
        >
          <ul
            className={`${
              isNavOpen ? "block" : "hidden"
            } lg:flex lg:justify-end`}
          >
            <li className="mr-3">
              <a
                onClick={(e) => handleClick(homeRef, e)}
                className="block px-4 py-2 text-black font-bold hover:text-white hover:bg-blue-300"
              >
                About
              </a>
            </li>
            <li className="mr-3">
              <a
                onClick={(e) => handleClick(pricingRef, e)}
                className="block px-4 py-2 text-black font-bold hover:text-white hover:bg-blue-300"
              >
                Pricing
              </a>
            </li>
            <li className="mr-3">
              <a
                onClick={(e) => handleClick(contactRef, e)}
                className="block px-4 py-2 text-black font-bold hover:text-white hover:bg-blue-300"
              >
                Contact
              </a>
            </li>
            <li>
              <div
                className="w-full border-blue-300 hover:bg-blue-300 border-2 bg-white hover:text-white text-blue-300 h-10 transition-all ease-in-out duration-300"
                onClick={() => {
                  handleToggle();
                }}
              >
                <p className="w-full h-full space-x-1 uppercase font-bold flex justify-center items-center cursor-pointer">
                  Login
                </p>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
