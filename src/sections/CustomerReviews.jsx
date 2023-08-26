import { customers } from "../constants";
import CustomerReviewCard from "../components/CustomerReviewCard";
const CustomerReviews = () => {
  return (
    <section className="flex flex-col gap-24 items-center justify-start">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-4xl max-sm:max-w-xs text-center">
          What Our
          <span className="text-coral-red"> Customers</span> Say?
        </h2>
        <p className="text-xl max-lg:max-w-sm lg:max-w-lg text-slate-gray text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex max-lg:flex-col items-center lg:gap-24 gap-12">
        {customers.map((item) => (
          <CustomerReviewCard {...item} />
        ))}
      </div>
    </section>
  );
};
export default CustomerReviews;
