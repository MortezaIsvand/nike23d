const Button = ({
  label,
  icon,
  fullwidth,
  bgColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
      className={`flex gap-4 whitespace-nowrap  ${
        bgColor
          ? `border ${(bgColor, borderColor, textColor)}`
          : "bg-coral-red text-[#ffffff]"
      } rounded-full px-8  py-4  justify-center items-center ${
        fullwidth ? "w-full" : "max-w-full"
      }`}
    >
      {label}

      {icon && <img src={icon} alt="icon" />}
    </button>
  );
};
export default Button;
