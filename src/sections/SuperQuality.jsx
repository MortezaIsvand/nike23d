import { shoe8 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section className="flex gap-8 max-lg:flex-col justify-between items-center">
      <div className="flex flex-col gap-4">
        <h2>
          We Provide You
          <span className="text-coral-red"> Super Quality</span> Shoes
        </h2>
        <p className="text-info text-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="text-info mb-8 text-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button label={"Shop now"} icon={arrowRight} />
      </div>
      <div>
        <img src={shoe8} alt="shoe" />
      </div>
    </section>
  );
};
export default SuperQuality;
