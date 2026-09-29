import React from 'react'
import Navbar from './components/Navbar'
import ServicesSection from './components/Services'
import Footer from './components/Footer'
import ParallaxSection from './components/Parallax'
import Sendmail from './components/Sendmail'
import Gis from './components/Gis'

const page = () => {
  return (
    <div>
      <Navbar/>
      <ServicesSection/>
      <Gis/>
      <ParallaxSection/>
      <Sendmail/>
      <Footer/>
    </div>
  )
}

export default page
