import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Guide from '../components/Guide'
import Banner from '../components/Banner'
import Guide2 from '../components/Guide2'
import Join from '../components/Join'
import Faq from '../components/Faq'
import GrayPart from '../components/GrayPart'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero/>
      <Guide/>
      <Banner/>
      <Guide2/>
      <Join/>
      <Faq/>
      <GrayPart/>
    </>
  )
}

export default Home
