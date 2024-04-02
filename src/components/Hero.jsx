import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Hero = ({ 
    title = 'Tumaini Prison Ministry',
    subtitle = 'Find the React job that fits skills',
}) => {
  return (
    <div className="bg-gray-800 py-20">
    <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 lg:w-2/3">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                <span className="text-indigo-500">Tumaini</span> Prison Ministry<br className="hidden md:block" />
             
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                    Welcome to our ministry website. Read about our organisation, programs and keep up with us through our newsletters.
                </p>
                <div className="flex gap-2">
                    <a href="#slider" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">Get
                        Started
                    </a>
                    <Link
              to="/About"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Learn More
            </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> 
                <img src={logo} />
            </div>
        </div>
    </div>
</div>
  )
}

export default Hero
