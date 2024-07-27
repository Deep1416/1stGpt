import React from 'react'
import HeroSection from '../components/heroSection/HeroSection'
import OurService from '../components/ourService/OurService'
import Testimonial from '../components/testimonial/Testimonial'
import Faq from '../components/faq/Faq'
import Blog from '../components/blog/Blog'
import Gallery from '../components/gallery/Gallery'
import Services from '../components/services/Services'
import Footer from '../components/footer/Footer'


const HomePage = () => {
  return (
   <>
  <HeroSection/>
  <OurService/>
  <Testimonial/>
  <Services/>
  <Faq/>
  <Blog/>
  <Gallery/>
  <Footer/>
   </>
  )
}

export default HomePage