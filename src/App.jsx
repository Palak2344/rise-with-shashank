import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Journey from "./components/Journey/Journey";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Workshop from "./components/Workshop/Workshop";
import Book from "./components/Book/Book";
import Community from "./components/Community/Community";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Journey />
      <WhyChoose />
      <Programs />
      <Workshop />
      <Testimonials />
      <Gallery />
      <Book />
      <Community />
      <FAQ />
      <Contact />
    </>
  );
}

export default App;