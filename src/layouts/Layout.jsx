import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ScrollProgress, BackToTop, WhatsAppButton } from "../components/ui/ScrollExtras";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <motion.main
        key={pathname}
        className="page-content"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.main>

      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
