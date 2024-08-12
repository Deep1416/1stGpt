import React from "react";
import HeroSection from "../components/heroSection/HeroSection";
import OurService from "../components/ourService/OurService";
import Testimonial from "../components/testimonial/Testimonial";
import Faq from "../components/faq/Faq";
import Blog from "../components/blog/Blog";
import Gallery from "../components/gallery/Gallery";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";
import About from "./../components/about/About";
import Header from "../components/header/Header";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OurService />
      <About />
      <Testimonial />
      <Services />
      <Faq />
      <Blog />
      <Gallery />
      <Footer />
    </>
  );
};

export default HomePage;
