import React from 'react'
import PricingTable from './PricingTable'

// COMPONENTS 
import Footer from '../Global/Footer.js'
import Navbar from '../Global//Navbar.js'
import Hero from '../Home/Hero.js'
import Step from '../Home/Step.js'
import Featured from '../Home/Featured.js'
import Anchor from '../Home/Anchor.js'
import Box from '../Home/Box.js'
import FAQ from '../Home/FAQ.js'
import Fetch from '../../Express/Fetch.js'


function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Hero />
      <PricingTable />
      <Step />
      <Featured />
      <Anchor />
      <Box />
      <FAQ />
      <Footer />
      <Fetch />
    </div>
  )
}

export default Home 
