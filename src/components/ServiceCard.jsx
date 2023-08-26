const ServiceCard = ({ iconURL, title, caption }) => {
  return (
    <div className="flex flex-col bg-white shadow-2xl min-w-[350px] ring-1 ring-white w-full sm:w-[350px] px-10 py-16 gap-4 flex-1 rounded-lg">
      <img
        src={iconURL}
        alt="icon"
        className="bg-coral-red p-2 rounded-full"
        height={50}
        width={50}
      />
      <h2 className="text-3xl">{title}</h2>
      <p className="max-w-xs text-lg text-slate-gray">{caption}</p>
    </div>
  );
};
export default ServiceCard;
