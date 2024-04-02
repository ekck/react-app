import React from 'react'
import {useState, useEffect } from 'react'
import TestimonialListing from './TestimonialListing'
import { Link } from 'react-router-dom'
import {urlFor, client} from '../client';

const TestimonialListings = () => {

    const [testimonials, setTestimonials] = useState([]);
  

    useEffect(() => {
     const query = '*[_type == "testimonials"] '
  
     client.fetch(query)
     .then((data) => setTestimonials(data))
     
    }, [])



  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">

    { testimonials.map((testimonials) => (
        
   <TestimonialListing key={testimonials._id} testimonials={testimonials}/>
    ))}
   </div>
   </div>
  )
}

export default TestimonialListings