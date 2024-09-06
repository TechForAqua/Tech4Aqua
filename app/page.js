"use client"
import React from 'react'
import Navbar from './pages/Navbar'
import HeroSection from './pages/HeroSection'
import Services from './pages/Services'
import WhyChooseUs from './pages/WhyChooseUs'

const page = () => {
  return (
   <>
   <Navbar />
   <HeroSection />
   <Services />
   <WhyChooseUs />
   
   </>
  )
}

export default page