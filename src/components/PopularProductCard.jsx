import { star } from "../assets/icons";

const PopularProductCard = ({ name, price, rate, imgURL }) => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <img src={imgURL} alt="shoe" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <img src={star} alt="rating" width={25}/>
          <p className="text-slate-gray text-xl">({rate})</p>
        </div>
        <p className="text-2xl font-bold">{name}</p>
        <p className="text-coral-red font-bold">{price}</p>
      </div>
    </div>
  );
};
export default PopularProductCard;
