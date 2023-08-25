import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import { useState } from "react";
import ShoeCard from "../components/ShoeCard";
const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1);
  return (
    <section className="flex max-xl:flex-col">
      <div className="flex flex-col justify-between gap-8 xl:w-[45%] w-full items-start py-28  ">
        <p className="text-xl text-coral-red ">Our Summer collections</p>
        <h2 className="sm:text-8xl text-6xl font-bold leading-normal">
          <span className="lg:whitespace-nowrap relative pr-10 pt-4 z-10 lg:bg-white">
            The New Arrival
          </span>
          <br />
          <span className="inline-block text-coral-red"> Nike</span> Shoes
        </h2>
        <p className="text-info text-lg">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label={"Shop Now"} icon={arrowRight} />
        <div className="flex gap-20 flex-wrap flex-1 mt-8">
          {statistics.map((item) => (
            <div
              className="flex flex-col justify-center items-start"
              key={item.label}
            >
              <h1 className="text-4xl font-bold">{item.value}</h1>
              <p className="text-slate-gray text-xl">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative bg-pale-blue xl:min-h-screen w-full py-32 pl-10 ">
        <div>
          <img src={bigShoe} alt="shoe" />
        </div>
        <div className="flex gap-10 absolute -bottom-5 justify-between items-center">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                bigShoe={bigShoe}
                shoe={shoe}
                changeBigShoe={(shoe) => setBigShoe(shoe)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
