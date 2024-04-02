import React from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {urlFor, client} from '../client';
import CTA from '../components/CTA'





const TestimonialPage = () => {
    const {_id} = useParams()
    const testimonial = useLoaderData()


  return (

    <>
     <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/testimonials'
            className='text-indigo-500 hover:text-indigo-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Testimonials
          </Link>
        </div>
      </section>
    
      <div className="bg-gray-100">
    <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex flex-col items-center">
                        <img src={urlFor(testimonial.imgUrl)} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                        </img>
                        <h1 className="text-xl font-bold">{testimonial.name}</h1>
                        <hr className="my-6 border-t border-gray-300" />
                        <p className="text-gray-700">{testimonial.sentence}</p>
                        {/* <div className="mt-6 flex flex-wrap gap-4 justify-center">
                            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                            <a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</a>
                        </div> */}
                        <hr className="my-6 border-t border-gray-300" />
                    <span className="text-gray-700 font-bold">Release Date:</span>
                    <p className="text-gray-700">{testimonial.releaseDate}</p>

                    </div>
                   
                </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-700">{testimonial.description}
                    </p>

                   


                    <h2 className="text-xl font-bold mt-6 mb-4">Story</h2>
                    <div className="mb-6">
                        
                        <p className="mt-2">{testimonial.content}
                        </p>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold">Re-Intergration</span>
                              {/* <img src={urlFor(testimonial.img2Url)} className="w-full mb-3"/> */}
                              <span className="text-gray-700 font-bold">{testimonial.imgdescription}</span>
                        </div>
                        <p className="mt-2">
                           
                        </p>
                    </div>
                    <div className="mb-6">
                  
                    
                        <p className="mt-2">
                         {testimonial.content2}
                        </p>
                    </div>
                    
                </div>
              
            </div>
           
        </div>
      
    </div>
    <CTA />
</div>
    </>
  )
}

const testimonialLoader = async ({ params }) =>{
    const { _id } = params; // Destructure _id from params object
    const query = `*[_type == "testimonials" && _id == "${_id}"][0]`; 
    const data = await client.fetch(query);
   
    return data;
}


export {TestimonialPage as default, testimonialLoader}