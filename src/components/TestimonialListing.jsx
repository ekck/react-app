import React, { useEffect, useRef, useState }  from 'react'

import { Link } from 'react-router-dom'
import {urlFor, client} from '../client';

const TestimonialListing = ({testimonials}) => {
  return (
   

        <div
            className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img src={urlFor(testimonials.imgUrl)} className="w-full mb-3"/>
            <div className="p-4 pt-2">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                       
                       Name
                    </p>
                    <h2>{testimonials.name}</h2>
                    <p className="text-gray-700 text-sm">{testimonials.sentence}</p>
                </div>
                <div className="flex items-center">
                   
                    <div className="mt-5">
            <button type="button"  className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">
                <a href={`/testimonial/${testimonials._id}`}>Read More</a></button>
        </div>
                </div>
            </div>
        </div>
        
  )
}

export default TestimonialListing