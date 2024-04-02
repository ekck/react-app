import React from 'react'
import {useState, useEffect } from 'react'
import NewsListing from './NewsListing'
import { Link } from 'react-router-dom'
import {urlFor, client} from '../client';

const NewsListings = () => {
    const [newsletters, setNewsletters] = useState([]);
  

    useEffect(() => {
     const query = '*[_type == "newsletters"] '
  
     client.fetch(query)
   
     .then((data) => setNewsletters(data))
   
     
    }, [])

  return (
    <>
    <section className="bg-blue-50 px-4 py-10">
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        
  
        
    { newsletters.map((newsletters) => (

    <NewsListing key={newsletters._id} newsletters={newsletters}/>
    ))}
    </div>
    
    </section>
    </>
  )
  
}

export default NewsListings