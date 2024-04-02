import React, { useEffect, useRef, useState }  from 'react'
import {urlFor, client} from '../client';



const Partners = () => {

        const [partners, setPartners] = useState([]);
        
      
        useEffect(() => {
         const query = '*[_type == "partners"] '
      
         client.fetch(query)
         .then((data) => setPartners(data))
        }, [])
      
          



  return (
  <>
  <section className='bg-indigo-50'>
        <div className='container m-auto py-10 px-6'>
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR PARTNERS</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our friends from far and wide that work with us to achieve our</p>
    </div>
   <div className="  grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
  {partners.map((partners, index) => (
  <a key={partners.title + index} className="p-4  border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex items-center"
    href="#">
    <img src="" className="shadow rounded-lg w-24 l-24 overflow-hidden border" />
    <div className="mt-8">
        <h4 className="font-bold text-xl">{partners.title}</h4>
        <p className="mt-2 text-gray-600">{partners.description}
        </p>
        
    </div>
</a>
  ))}
  </div>
  </div>
  </section>
  </>
  )
}

export default Partners

