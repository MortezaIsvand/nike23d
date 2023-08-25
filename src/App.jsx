import {
  CustomerReviews,
  Footer,
  Hero,
  Nav,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <header className="px-8 py-8 sm:px-16 sm:py-8 absolute w-full z-10">
        <Nav />
      </header>
      <section className="pl-8 sm:pl-16">
        <Hero />
      </section>
      <section className="px-8 py-28 sm:px-16 sm:py-32">
        <PopularProducts />
      </section>
      <section>
        <SuperQuality />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <SpecialOffer />
      </section>
      <section>
        <CustomerReviews />
      </section>
      <section>
        <Subscribe />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};
export default App;
