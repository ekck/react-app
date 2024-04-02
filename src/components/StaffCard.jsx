import React, { useEffect, useRef, useState }  from 'react'

import { Link } from 'react-router-dom'
import {urlFor, client} from '../client';


const StaffCard = () => {

  const [staff, setStaff] = useState([]);
  

  useEffect(() => {
   const query = '*[_type == "staff"] '

   client.fetch(query)
   .then((data) => setStaff(data))
  }, [])

    
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR STAFF TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Active and passinate church members that run and make our vision a reality</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
    {staff.map((staff, index) => (
      <div className="p-4 lg:w-1/2" key={staff.title + index}>
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">{staff.title}</h2>
            <h3 className="text-gray-500 mb-3">{staff.description}</h3>
            
           
          </div>
        </div>
      </div>
      ))}
    </div>
    
  </div>
</section>
  )
}

export default StaffCard