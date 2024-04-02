import React from 'react'
import Card from './Card' 
import { Link } from 'react-router-dom'

const HomeCards = () => {
  return (
    <section className="py-4" id='next'>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">Programs</h2>
            <p className="mt-2 mb-4">
              Browse throgh our programs 
            </p>
            <Link
              to="/programs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Programs
            </Link>
          </Card>
          
          <Card>
            <h2 className="text-2xl font-bold">Testimonials</h2>
            <p className="mt-2 mb-4">
              Browse our Recent Testimonials
            </p>
            <Link
              to="/testimonials"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Testimonials
            </Link>
          </Card>
         
        </div>
      </div>
    </section>

  )
}

export default HomeCards
