import React, { useEffect, useRef, useState }  from 'react'
import {urlFor, client} from '../client';

const BoardCard = () => {

  const [board, setBoard] = useState([]);

  useEffect(() => {
   const query = '*[_type == "board"] '

   client.fetch(query)
   .then((data) => setBoard(data))
  }, [])

  return (
    <section className='bg-indigo-50'>
    <div className='container m-auto py-10 px-6'>
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"> BOARD OF MANAGEMENT</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Church elders that oversee our planning and coordination on activities and missions</p>
    </div>
    <div className="  grid grid-cols-1 md:grid-cols-3 gap-4">
    {board.map((board, index) => (
    <div className="p-4 lg:w-1/2" key={board.title + index}>
   
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left" >
        <img  className="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">{board.title}</h2>
         
            <p className="mb-4">{board.description}</p>
          
          </div>
        </div>
         
      </div>
       ))}
       </div>
    
   
   
  </div>
</section>
  )
}

export default BoardCard