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
        <Gallery />
      </main>
    </>
  );
}

export default App;