import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
const SpecialOffer = () => {
  return (
    <section className="flex justify-between gap-10 items-center max-lg:flex-col-reverse ">
      <div>
        <img src={offer} alt="shoe" width={550} className="object-contain" />
      </div>
      <div>
        <h2 className="max-sm:px-4">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="text-info max-sm:px-4 text-lg max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="text-info mb-8 text-lg max-sm:px-4">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-4 text-lg">
          <Button label={"View details"} icon={arrowRight} />
          <Button
            label={"Learn more"}
            bgColor={"bg-white"}
            borderColor={"border-black"}
            textColor={"text-slate-gray"}
          />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffer;
