import React from 'react'
import Header from '../../components/header'
import HeroSection from '../../components/heroSection'
import Enteries from '../../components/enteries'
import Footer from '../../footer'

function LandingPage() {
  return (
    <div>
        <Header/>
        <HeroSection title="Looking for your student home?" subTittle="EXPLORE THE WORLD" text="Select the country where you are going to study" heroImg="https://assets.casita.com/_next/static/media/countries-main-banner.93c523b6.png"/>
        <Enteries/>
        <Footer/>
     </div>
  )
}

export default LandingPage
