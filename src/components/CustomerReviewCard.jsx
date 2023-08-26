import { star } from "../assets/icons";

const CustomerReviewCard = ({ imgURL, comment, name }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <img
        src={imgURL}
        alt="img"
        width={100}
        className="rounded-full object-cover"
      />
      <div className="flex flex-col items-center gap-2">
        <p className="text-slate-gray max-w-sm text-lg text-center">
          {comment}
        </p>
        <div className="flex gap-4 items-center text-2xl text-slate-gray">
          <img src={star} alt="star" />
          <p>(4.5)</p>
        </div>
        <p className="text-3xl font-bold">{name}</p>
      </div>
    </div>
  );
};
export default CustomerReviewCard;
