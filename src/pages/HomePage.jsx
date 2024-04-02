import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'

import ViewAllJobs from '../components/ViewAllJobs'
import Slider from '../components/Slider'
import Quotes from '../components/Quotes'
import CTA from '../components/CTA'


const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Slider/>
        <Quotes/>
        
        <HomeCards/>
      
       
        
     
      <ViewAllJobs/>
      <CTA />
    </div>
  )
}

export default HomePage
