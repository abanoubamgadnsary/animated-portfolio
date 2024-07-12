import "./app.scss";
import Hero from "./components/Hero/Hero";
import Contact from "./components/contact/Contact";
// import Cursor from "./components/cursor/cursor";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="Services">
        <Parallax type="services" />
      </section>

      <section>
        <Services />
      </section>

      <section id="portfolio">
        <Parallax type="portfolio" />
      </section>

      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
