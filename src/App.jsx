import { Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ProgramsPage from "./pages/ProgramsPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Routes>
      <Route element={<ScrollToTop />}>
      </Route>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route  path="/contact" element={<ContactPage />}  />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogPage />} />
      
      </Route>

    </Routes>
  );
}

export default App;