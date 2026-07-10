import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Journey from "./components/Journey/Journey";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
import Workshop from "./components/Workshop/Workshop";
import Book from "./components/Book/Book";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import Community from "./components/Community/Community";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <WhyChoose />
        <Programs />
        <Testimonials />
        <Workshop />
        <Book />
        <Community />
        <FAQ />
        <Gallery />
      </main>
    </>
  );
}

export default App;