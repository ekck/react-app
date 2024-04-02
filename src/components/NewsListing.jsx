import React, { useEffect, useRef, useState }  from 'react'

import { Link } from 'react-router-dom'
import {urlFor, client} from '../client';
import { PiNewspaperClippingBold } from "react-icons/pi";


const NewsListing = ({newsletters}) => {

  
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = newsletters.description;
  if(!showFullDescription){
      description = description.substring(0, 90) + '...'
  }



  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    
    <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
      
            <img src={urlFor(newsletters.imgUrl)} className="w-full mb-3"/>
            <div className="p-4 pt-2">
                <div className="mb-8">
               <div className="flex items-center">
               <PiNewspaperClippingBold />
               <p className="text-sm text-gray-600 flex items-center ml-2">
                        
                        Newsletter
                    </p>
               </div>
                  
                    <a href={`/newsletter/${newsletters.id}`} className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">{newsletters.title}</a>
                    <p className="text-gray-700 text-sm">{description}</p>
                    <button onClick={()=> setShowFullDescription((prevState) => 
    !prevState)}
     className="text-indigo-500 mb-5 hover:text-indigo-600">
    { showFullDescription ? 'Less' : 'More'}
  </button>
                </div>
                <div className="flex items-center">
                    
                    <div className="text-sm">
                    <div className="flex items-center">
                    <h2 className="text-gray-900 font-semibold leading-none hover:text-indigo-600">Written By: </h2>
                      
                      <a href="#" className="text-gray-900 font-semibold leading-none hover:text-indigo-600">{newsletters.author}</a>
                      </div>
                      <div className="flex items-center">
                      <h3>Published: </h3>
                        <p className="text-gray-600">{newsletters.releaseDate}</p>
                        
                        </div>
                    </div>
                </div>
                <div className="mt-5">
            <button type="button"  className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">
                <a href={`/newsletter/${newsletters._id}`}>Read More</a></button>
        </div>
            </div>
        </div>
      </div>
     
  )
}

export default NewsListing