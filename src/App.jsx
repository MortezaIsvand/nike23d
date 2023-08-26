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
      <section className="px-8 py-28 sm:px-16 sm:py-28">
        <PopularProducts />
      </section>
      <section className="px-8 py-28 sm:px-16 sm:py-28">
        <SuperQuality />
      </section>
      <section className="px-8 py-28 sm:px-16 sm:py-28">
        <Services />
      </section>
      <section className="px-8 py-28 sm:px-16 sm:py-28">
        <SpecialOffer />
      </section>
      <section className="px-8 py-28 sm:px-16 sm:py-28 bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="px-8 py-28 sm:px-16 sm:py-28">
        <Subscribe />
      </section>
      <footer className="px-8 py-10 sm:px-16 sm:py-28 bg-black">
        <Footer />
      </footer>
    </main>
  );
};
export default App;
