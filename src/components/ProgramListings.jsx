import React, { useEffect, useRef, useState }  from 'react'

import { Link } from 'react-router-dom'
import {urlFor, client} from '../client';
import ProgramListing from './ProgramListing';
import Spinner from './Spinner';





const ProgramListings = () => {


    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);
  

  useEffect(() => {
   const query = '*[_type == "programs"] '

   try {

   client.fetch(query)
   .then((data) => setPrograms(data))
} catch (error){

    console.log('Error fetching data', error);


  } finally {
    setLoading(false);
  }
   
  }, [])

  return (
<section className="bg-blue-50 px-4 py-10">
   
    

    { loading ? (
        <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { programs.map((programs) => (
        <ProgramListing key={programs._id} programs={programs}/>


       ))}
          
          </div>
        )}
        
        
        
        
        
        
       
        </section>
  )
}

export default ProgramListings