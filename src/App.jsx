import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar2";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import About from "./components/About";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "20px",
      duration: 1500,
      reset: true,
    });
    sr.reveal(
      `
     
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div className="maindiv">
      <ScrollToTop />
        <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <About/>
      <Footer />
    </div>
  );
}
