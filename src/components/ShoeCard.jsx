const ShoeCard = ({ shoe, bigShoe, changeBigShoe }) => {
  const handleClick = () => {
    if (bigShoe !== shoe.bigShoeURL) {
      changeBigShoe(shoe.bigShoeURL);
    }
  };
  return (
    <div
      className={`bg-primary p-3 rounded-lg hover:shadow-xl hover:ring-1  ring-slate-gray cursor-pointer ${
        bigShoe === shoe.bigShoeURL && "border border-slate-gray"
      }`}
    >
      <img
        src={shoe.smallShoeURL}
        alt="shoe"
        onClick={handleClick}
        width={130}
      />
    </div>
  );
};
export default ShoeCard;
