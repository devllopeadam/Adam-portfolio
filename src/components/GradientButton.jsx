/* eslint-disable react/prop-types */
const GradientButton = ({
  text,
  otherProperties = "",
  link,
  onclick,
  variant = "gradient",
  as = "a",
}) => {
  const baseClasses =
    "group relative z-50 cursor-pointer text-base rounded-full font-semibold transition-all duration-200 hover:-translate-y-1 flex items-center justify-center w-fit mx-auto py-3 px-8";

  const variants = {
    gradient: "bg-gradient text-black",
    outline:
      "border-2 border-white text-white bg-transparent hover:bg-white hover:text-black",
    solid: "bg-white text-black hover:bg-gray-100",
  };

  const className = `${baseClasses} ${variants[variant]} ${otherProperties}`;

  const shadowElement = (
    <span className="bg-black bg-opacity-50 transition-all duration-200 opacity-0 group-hover:opacity-100 w-2/3 h-[8px] absolute -bottom-[10px] left-1/2 -z-1 -translate-x-1/2 blur-md"></span>
  );

  if (as === "button") {
    return (
      <button
        className={className}
        onClick={onclick}
        type="button">
        {text}
        {shadowElement}
      </button>
    );
  }

  return (
    <a
      className={className}
      target="_blank"
      href={link}
      onClick={onclick}>
      {text}
      {shadowElement}
    </a>
  );
};

export default GradientButton;
