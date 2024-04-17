import { Header } from "./components";

function App() {
  return (
    <>
      <div className="noisy w-screen h-screen fixed opacity-90 pointer-events-none -z-[1]"></div>
      <Header />
    </>
  );
}

export default App;
