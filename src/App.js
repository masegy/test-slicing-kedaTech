import { useState, useRef } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Modal from "./components/Modal";
import Contact from "./pages/Contact";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const pricingRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const handleToggle = () => {
    setIsOpen(true);
  };

  const handleClick = (ref, e) => {
    e.preventDefault();
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative h-full w-screen overflow-x-hidden">
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Header
        title="Home"
        handleToggle={handleToggle}
        handleClick={handleClick}
        pricingRef={pricingRef}
        homeRef={homeRef}
        contactRef={contactRef}
      />
      <div className="relative -z-10 px-4">
        <Home title="Logo" sectionRef={homeRef} />
        <Pricing sectionRef={pricingRef} />
        <Contact sectionRef={contactRef} />
      </div>
    </div>
  );
}
