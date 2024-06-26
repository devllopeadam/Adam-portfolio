import {
  About,
  ContactMe,
  Footer,
  Header,
  Hero,
  HorizontalScroll,
  Projects,
  Skills,
} from "./components";

function App() {
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
      <Projects />
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
