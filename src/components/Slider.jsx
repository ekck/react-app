import React, { useEffect, useRef, useState } from 'react';
import {urlFor, client} from '../client';


const Slider = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
     const query = '*[_type == "abouts"] '

     client.fetch(query)
     .then((data) => setAbouts(data))
    }, [])
    




    const carouselRef = useRef(null);

    const scrollCarousel = (direction) => {
        carouselRef.current.scrollBy({
            left: direction * carouselRef.current.offsetWidth,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const prevButton = document.querySelector('.carousel-control-prev');
        const nextButton = document.querySelector('.carousel-control-next');

        prevButton.addEventListener('click', () => scrollCarousel(-1));
        nextButton.addEventListener('click', () => scrollCarousel(1));

        return () => {
            prevButton.removeEventListener('click', () => scrollCarousel(-1));
            nextButton.removeEventListener('click', () => scrollCarousel(1));
        };
    }, []);

    return (
        <div className="relative container-xl lg:container m-auto mt-10" id='slider'>
             <div className="carousel max-w-full overflow-hidden flex" ref={carouselRef}>
  {/* Carousel items */}
  {abouts.map((about, index) => (
    <div className="carousel-item relative h-96" key={about.title + index}>
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img src={urlFor(about.imgUrl)} className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:brightness-75" alt={about.title} />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h2 className="text-2xl font-bold  leading-none " style={{ marginTop: 20 }}>{about.title}</h2>
        <p className="text-lg leading-none p-10" style={{ marginTop: 10 }}>{about.description}</p>
      </div>
    </div>
  ))}
</div>

            {/* Carousel controls */}
            <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-4">
                <button className="carousel-control-prev bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-4">
                <button className="carousel-control-next bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Slider;
