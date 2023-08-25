const Button = ({ label, icon }) => {
  return (
    <button className="flex gap-4 bg-coral-red rounded-full px-8  py-4 text-[#ffffff] justify-center items-center">
      {label}
      <img src={icon} alt="icon" />
    </button>
  );
};
export default Button;
