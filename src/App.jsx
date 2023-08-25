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
    <main>
      <header>
        <Nav />
      </header>
      <section>
        <Hero />
      </section>
      <section>
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
