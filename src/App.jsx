import { Header, Hero, Projects } from "./components";

function App() {
  return (
    <>
      <div className="noisy w-screen h-screen fixed opacity-90 pointer-events-none -z-[1]"></div>
      <Header />
      <div className="pt-[83px]">
        <div className="w-full h-[1px] bg-belowHeader"></div>
        <Hero />
      </div>
      <Projects />
    </>
  );
}

export default App;
