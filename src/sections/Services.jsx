import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <section className="flex gap-10 flex-wrap">
      {services.map((service) => (
        <ServiceCard Card {...service} />
      ))}
    </section>
  );
};
export default Services;
