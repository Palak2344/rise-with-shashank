import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Journey from "../components/Journey/Journey";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Programs from "../components/Programs/Programs";
import Workshop from "../components/Workshop/Workshop";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import Book from "../components/Book/Book";
import Blog from "../components/Blog/Blog";
import Community from "../components/Community/Community";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <WhyChoose />
      <Programs />
      <Workshop />
      <Testimonials />
      <Gallery />
      <Book />
      <Blog />
      <Community />
      <FAQ />
      <Contact />
  
    </>
  );
}