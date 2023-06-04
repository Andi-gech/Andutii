import { useRef } from "react";
import "./App.css";
import Bodybanner from "./Components/Bodybanner";
import Header from "./Components/Header";
import { useMediaQuery } from "react-responsive";
import Headermobile from "./Components/HeaderMobile";
import MobileBody from "./Components/MobileBody";
import Footer from "./Components/Footer";

function App() {
  const scrollRef = useRef(null);

  // Function to handle scroll
  const scrollToDesiredPlace = (desiredPlace) => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;

      // Smooth scroll using CSS transition
      scrollContainer.style.transition = "5s";
      scrollContainer.scrollTop = desiredPlace;

      // Reset transition after scroll animation
      setTimeout(() => {
        scrollContainer.style.transition = "";
      }, 300);
    }
  };
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 724px)" });
  if (!isTabletOrMobile) {
    return (
      <div className="App" ref={scrollRef}>
        <Header
          onhome={() => scrollToDesiredPlace(0)}
          onskill={() => scrollToDesiredPlace(480)}
          onproject={() => scrollToDesiredPlace(1700)}
          onabout={() => scrollToDesiredPlace(1100)}
          onfeedback={() => scrollToDesiredPlace(2300)}
          oncontact={() => scrollToDesiredPlace(2800)}
        />
        <Bodybanner />
        <Footer />
      </div>
    );
  }
  if (isTabletOrMobile) {
    return (
      <div className="App" ref={scrollRef}>
        <Headermobile
          onhome={() => scrollToDesiredPlace(0)}
          onskill={() => scrollToDesiredPlace(480)}
          onproject={() => scrollToDesiredPlace(1500)}
          onabout={() => scrollToDesiredPlace(1300)}
          onfeedback={() => scrollToDesiredPlace(2900)}
          oncontact={() => scrollToDesiredPlace(3400)}
        />
        <MobileBody />
        <Footer />
      </div>
    );
  }
}

export default App;
