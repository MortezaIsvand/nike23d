import { shoe8 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section className="flex max-lg:flex-col justify-between items-center gap-20">
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
        <p className="text-info mb-8 text-gl">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div>
          <Button label={"Shop now"} icon={arrowRight} />
        </div>
      </div>
      <div>
        <img src={shoe8} alt="shoe" />
      </div>
    </section>
  );
};
export default SuperQuality;
