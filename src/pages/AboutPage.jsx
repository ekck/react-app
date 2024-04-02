import React from 'react'
import Slider from '../components/Slider'
import AboutCards from '../components/AboutCards'
import Partners from '../components/Partners'
import BoardCard from '../components/BoardCard'
import StaffCard from '../components/StaffCard'
import CTA from '../components/CTA'


const AboutPage = () => {
  
  return (
    <div className=''>
  
      <div>
      <AboutCards/>
      <BoardCard/>
      <StaffCard/>

      <Partners/>
    </div>
    <CTA/>
      



     
      

    </div>
  )
}

export default AboutPage