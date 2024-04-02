import React from 'react'
import Quotes from '../components/Quotes'
import CTA from '../components/CTA'
import TestimonialListings from '../components/TestimonialListings'

const TestimonialsPage = () => {
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">

    <Quotes/>
    <TestimonialListings/>
    <CTA />
    </section>
    </>
  )
}

export default TestimonialsPage


