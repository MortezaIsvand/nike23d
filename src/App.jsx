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
      <header>
        <Nav />
      </header>
      <section className="mx-16 my-8">
        <Hero />
      </section>
      <section className="mx-16 my-8">
        <PopularProducts />
      </section>
      <section className="mx-16 my-8">
        <SuperQuality />
      </section>
      <section className="mx-16 my-8">
        <Services />
      </section>
      <section className="mx-16 my-8">
        <SpecialOffer />
      </section>
      <section className="mx-16 my-8">
        <CustomerReviews />
      </section>
      <section className="mx-16 my-8">
        <Subscribe />
      </section>
      <footer className="mx-16 my-8">
        <Footer />
      </footer>
    </main>
  );
};
export default App;
