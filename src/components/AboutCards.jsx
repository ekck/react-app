import React, { useEffect, useRef, useState }  from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import {urlFor, client} from '../client';

const AboutCards = () => {

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
     const query = '*[_type == "abouts"] '

     client.fetch(query)
     .then((data) => setAbouts(data))
    }, [])


  return (
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
      {abouts.map((about, index) => (
        <Card key={about.title + index}>
           
           
                            

                            <h2 className="text-2xl text-bl font-bold" style={{marginTop:20}}>{about.title}</h2>
                                <p className="text-lg" style={{marginTop: 10}}>{about.description}</p>
                         
          
        </Card>
         ))}
        
      </div>
    </div>
  </section>
  )
}

export default AboutCards
