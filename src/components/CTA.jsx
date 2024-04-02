import React, { useState } from 'react';

const CTA = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
        document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden');
    };

    const closeModal = () => {
        setShowModal(false);
        document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
    };

    return (
        <section className="relative z-10 overflow-hidden bg-indigo-600 py-16 px-8 mt-40">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="text-center lg:text-left ">
                            <div className="mb-10 lg:mb-0 ">
                                <h1 className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white">
                                    We are a donation funded Ministry
                                </h1>
                                <p className="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white">
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="text-center lg:text-right">
                            <button className="font-semibold rounded-lg mx-auto inline-flex items-center justify-center bg-white py-4 px-9 hover:bg-opacity-90" onClick={openModal}>
                                Get in touch to make a donation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <span className="absolute top-0 right-0 -z-10">
        <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6910)"></path><defs><linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span class="absolute top-0 right-0 -z-10"><svg width="324" height="250" viewBox="0 0 324 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6911)"></path><defs><linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span class="absolute top-4 left-4 -z-10"><svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="40.9984" cy="1.49626" r="1.49626" transform="rotate(90 40.9984 1.49626)" fill="white"></circle><circle cx="27.8304" cy="1.49626" r="1.49626" transform="rotate(90 27.8304 1.49626)" fill="white"></circle><circle cx="14.6644" cy="1.49626" r="1.49626" transform="rotate(90 14.6644 1.49626)" fill="white"></circle><circle cx="1.49642" cy="1.49626" r="1.49626" transform="rotate(90 1.49642 1.49626)" fill="white"></circle><circle cx="40.9984" cy="14.6642" r="1.49626" transform="rotate(90 40.9984 14.6642)" fill="white"></circle><circle cx="27.8304" cy="14.6642" r="1.49626" transform="rotate(90 27.8304 14.6642)" fill="white"></circle><circle cx="14.6644" cy="14.6642" r="1.49626" transform="rotate(90 14.6644 14.6642)" fill="white"></circle><circle cx="1.49642" cy="14.6642" r="1.49626" transform="rotate(90 1.49642 14.6642)" fill="white"></circle><circle cx="40.9984" cy="27.8302" r="1.49626" transform="rotate(90 40.9984 27.8302)" fill="white"></circle><circle cx="27.8304" cy="27.8302" r="1.49626" transform="rotate(90 27.8304 27.8302)" fill="white"></circle><circle cx="14.6644" cy="27.8302" r="1.49626" transform="rotate(90 14.6644 27.8302)" fill="white"></circle><circle cx="1.49642" cy="27.8302" r="1.49626" transform="rotate(90 1.49642 27.8302)" fill="white"></circle><circle cx="40.9984" cy="40.9982" r="1.49626" transform="rotate(90 40.9984 40.9982)" fill="white"></circle><circle cx="27.8304" cy="40.9963" r="1.49626" transform="rotate(90 27.8304 40.9963)" fill="white"></circle><circle cx="14.6644" cy="40.9982" r="1.49626" transform="rotate(90 14.6644 40.9982)" fill="white"></circle><circle cx="1.49642" cy="40.9963" r="1.49626" transform="rotate(90 1.49642 40.9963)" fill="white"></circle><circle cx="40.9984" cy="54.1642" r="1.49626" transform="rotate(90 40.9984 54.1642)" fill="white"></circle><circle cx="27.8304" cy="54.1642" r="1.49626" transform="rotate(90 27.8304 54.1642)" fill="white"></circle><circle cx="14.6644" cy="54.1642" r="1.49626" transform="rotate(90 14.6644 54.1642)" fill="white"></circle><circle cx="1.49642" cy="54.1642" r="1.49626" transform="rotate(90 1.49642 54.1642)" fill="white"></circle></g>
        </svg>
    </span>

            {showModal && (
                <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
                    <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
                        <div className="flex justify-end p-2">
                            <button type="button" onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 pt-0 text-center">
                           <div className=' flex justify-center'>
<svg fill="#000000" width="80px" height="80px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 15 3 C 13.355469 3 12 4.355469 12 6 L 12.015625 5.835938 L 11.03125 11.746094 L 9.140625 16.917969 C 9.105469 16.964844 9.0625 17 9 17 L 8 17 L 8 16 L 3 16 L 3 29 L 8 29 L 8 26 L 11.925781 26 C 13.570313 26 15.050781 25.203125 16 23.964844 C 16.949219 25.203125 18.429688 26 20.074219 26 L 24 26 L 24 29 L 29 29 L 29 16 L 24 16 L 24 17 L 23 17 C 22.9375 17 22.894531 16.964844 22.859375 16.917969 L 20.96875 11.746094 L 19.984375 5.835938 L 20 6 C 20 4.355469 18.644531 3 17 3 C 16.660156 3 16.3125 3.066406 16 3.226563 C 15.6875 3.066406 15.339844 3 15 3 Z M 14.964844 5.015625 C 14.984375 5.160156 15 5.488281 15 6 L 15 21.4375 C 14.722656 22.921875 13.445313 24 11.925781 24 L 8 24 L 8 19 L 9 19 C 9.785156 19 10.515625 18.574219 10.902344 17.890625 L 10.941406 17.816406 L 12.96875 12.253906 L 14 6.082031 L 14 6 C 14 5.449219 14.421875 5.035156 14.964844 5.015625 Z M 17.035156 5.015625 C 17.578125 5.035156 18 5.449219 18 6 L 18 6.082031 L 19.03125 12.253906 L 21.058594 17.816406 L 21.097656 17.890625 C 21.484375 18.574219 22.214844 19 23 19 L 24 19 L 24 24 L 20.074219 24 C 18.554688 24 17.277344 22.921875 17 21.4375 L 17 6 C 17 5.488281 17.015625 5.160156 17.035156 5.015625 Z M 5 18 L 6 18 L 6 27 L 5 27 Z M 26 18 L 27 18 L 27 27 L 26 27 Z"/></svg>
</div>

                            <h2 className='text-xl font-normal text-gray-500 mt-5 mb-6'>To make a dontion reach us through the following channels:</h2>
                            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a className="text-red-500 leading-relaxed" href='mailto:tumainiprison@gmail.com'>tumainiprison@gmail.com</a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">KAPLONG-KERICHO ROAD </h2>
                    <p className="leading-relaxed">P. O BOX 20400-178</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a className="text-red-500 leading-relaxed"href='mailto:scotx@gmail.com'>scotx@gmail.com</a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Springtown church of Christ</h2>
                    <p className="leading-relaxed">316church st, Box 96 Springtown TX 76082</p>
                </div>
            </div>
                            <button onClick={closeModal} className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                                Done
                            </button>
                            <button onClick={closeModal} className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center">
                                Cacel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default CTA;
