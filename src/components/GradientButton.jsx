/* eslint-disable react/prop-types */
const GradientButton = ({ text, otherProperties, link }) => {
  return (
    <a
      className={`group relative z-50 bg-gradient py-3 px-8 text-black cursor-pointer text-base rounded-full font-semibold transition-all duration-200 hover:-translate-y-1 flex items-center justify-center w-fit mx-auto  ${otherProperties}`}
      target="_blank"
      href={link}>
      {text}
      <div className="bg-black bg-opacity-50 transition-all duration-200 opacity-0 group-hover:opacity-100 w-2/3 h-[8px] absolute -bottom-[10px] left-1/2 -z-1 -translate-x-1/2 blur-md"></div>
    </a>
  );
};

export default GradientButton;
