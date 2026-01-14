import "./Styling/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import MainSection from "./MainSection";
import AboutMe from "./Main Files/AboutMe";
import Services from "./Main Files/Services";
import Contact from "./Main Files/Contact";
import { AnimatePresence } from "framer-motion";
import WebTemplates from "./Main Files/Templates";
import Projects from "./Main Files/Projects";

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2 text-white">
          Page not found
        </h1>
        <p className="opacity-70 text-white">
          The page you’re looking for doesn’t exist.
        </p>
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />}/ >
          <Route path="/templates" element={<WebTemplates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
