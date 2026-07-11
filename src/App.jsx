import { Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogOne from "./pages/BlogOne";
import BlogTwo from "./pages/BlogTwo";
import BlogThree from "./pages/BlogThree";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />

          <Route path="/blog/self-love" element={<BlogOne />} />
          <Route path="/blog/meditation" element={<BlogTwo />} />
          <Route path="/blog/finding-peace" element={<BlogThree />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;