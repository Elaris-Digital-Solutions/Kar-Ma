import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import Products from "./pages/Products";
import About from "./pages/About";
import Subbrands from "./pages/Subbrands";
import Segments from "./pages/Segments";
import Clients from "./pages/Clients";
import Quote from "./pages/Quote";
import { Toaster } from "@/components/ui/toaster";
import { SEOHandler } from "@/components/SEOHandler";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  duration: 0.4,
  ease: [0.16, 1, 0.3, 1], // Suave easing curve
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Index />
            </motion.div>
          }
        />
        <Route
          path="/productos"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Products />
            </motion.div>
          }
        />
        <Route
          path="/nosotros"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/submarcas"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Subbrands />
            </motion.div>
          }
        />
        <Route
          path="/segmentos"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Segments />
            </motion.div>
          }
        />
        <Route
          path="/clientes"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Clients />
            </motion.div>
          }
        />
        <Route
          path="/cotizacion"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Quote />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <Router>
    <SEOHandler />
    <AnimatedRoutes />
    <Toaster />
  </Router>
);

export default App;
