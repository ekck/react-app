import React from 'react';
import { useState } from "react"
import { urlFor } from '../client';

const ProgramListing = ({ programs }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = programs.description;
    if (!showFullDescription) {
        description = description.substring(0, 90) + '...'
    }

    const handleButtonClick = (event) => {
        event.preventDefault(); // Prevent the default behavior (scrolling to the top)
        setShowFullDescription((prevState) => !prevState);
    };

    return (
        <a className="p-10 m-10 max-w-md border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center" href="#">
            <img src={urlFor(programs.imgUrl)} className="shadow rounded-lg overflow-hidden border" />
            <div className="mt-8">
                <h4 className="font-bold text-xl">{programs.title}</h4>
                <p className="mt-2 text-gray-600">{description}</p>
                <div className="mt-5">
                    <button onClick={handleButtonClick} type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">
                        {showFullDescription ? 'Less' : 'Read More'}
                    </button>
                </div>
            </div>
        </a>
    );
}

export default ProgramListing;
