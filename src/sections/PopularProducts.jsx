import PopularProductCard from "../components/PopularProductCard";
import { popularProducts } from "../constants";
const PopularProducts = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>
        Our
        <span className="text-coral-red"> Popular</span> Products
      </h2>
      <p className="text-info">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4 grid-cols-1 mt-8">
        {popularProducts.map((product) => (
          <div key={product.name}>
            <PopularProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default PopularProducts;
