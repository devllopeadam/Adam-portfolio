import { textScroll } from "../constants";

const HorizontalScroll = () => {
  return (
    <div className="relative z-10 pt-14 mt-14 pb-24 lg:mix-blend-color-dodge md:py-28 overflow-hidden flex items-center justify-center">
      <div className="scroll overflow-hidden absolute bg-white py-5 uppercase w-full md:scale-110 rotate-[3deg]">
        <div className="transition-all duration-500 z-50 relative">
          <div className="flex gap-3 md:gap-5 transition-all duration-200 whitespace-nowrap horizontal-animation select-none">
            {[...textScroll, ...textScroll, ...textScroll].map((text, i) => {
              return (
                <p
                  className="font-[900] text-[30px] md:text-[40px] leading-none tracking-widest"
                  key={i}>
                  {text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
