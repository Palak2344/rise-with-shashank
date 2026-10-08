import Hero from "../components/Hero/Hero";
import Marquee from "../components/Marquee/Marquee";
import About from "../components/About/About";
import Journey from "../components/Journey/Journey";
import Method from "../components/Method/Method";
import Retreat from "../components/Retreat/Retreat";
import Corporate from "../components/Corporate/Corporate";
import Impact from "../components/Impact/Impact";
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
      <Hero />
      <Marquee />
      <About />
      <Journey />
      <Method />
      <WhyChoose />
      <Programs />
      <Workshop />
      <Retreat />
      <Corporate />
      <Impact />
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
