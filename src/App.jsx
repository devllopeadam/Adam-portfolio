import {
  About,
  ContactMe,
  Footer,
  Header,
  Hero,
  HorizontalScroll,
  Projects,
  Services,
  Skills,
  Testimonials,
} from "./components";
import { useEffect } from "react";
import { initializeAmplitude, trackPageView } from "./utils/amplitude";

function App() {
  useEffect(() => {
    // Initialize Amplitude when the app loads
    initializeAmplitude();

    // Track initial page view
    trackPageView("Portfolio Home");
  }, []);

  return (
    <>
      <div className="noisy w-screen h-screen fixed opacity-90 pointer-events-none -z-[1]"></div>
      <Header />
      <div
        id="home"
        className="pt-[83px]">
        <div className="w-full h-[1px] bg-belowHeader"></div>
        <Hero />
      </div>
      <Services />
      <Projects />
      <Testimonials />
      <About />
      <Skills />
      <HorizontalScroll />
      <ContactMe />
      <div className="w-full h-[1px] bg-belowHeader"></div>
      <Footer />
    </>
  );
}

export default App;
