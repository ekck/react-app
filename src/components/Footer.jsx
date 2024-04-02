import React, { useEffect } from 'react'
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';




const Footer = () => {


   // Function to scroll to the top of the page
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Scroll to top on component mount
  useEffect(() => {
    scrollToTop();
  }, []);





  return (
   
    

<footer>
    <div className="bg-gray-800 py-4 text-gray-400 mt-2">
      <div className="container px-4 mx-auto">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 my-4 w-full xl:w-1/5">
            <a href="/" className="block w-56 mb-10">
              
              {/* <svg version="1.1" viewBox="0 0 3368 512" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(0 -75)">
                    <g transform="translate(0 75)">
                      <rect width="512" height="512" rx="128" fill="#3D5AFE"></rect>
                      <rect x="149" y="176" width="220" height="220" fill="#fff"></rect>
                      <circle cx="259" cy="156" r="40" fill="#fff"></circle>
                      <circle cx="369" cy="286" r="40" fill="#2962FF"></circle>
                    </g>
                    <text fill="white" font-family="Nunito-Bold, Nunito" font-size="512" font-weight="bold">
                      <tspan x="654" y="518">Tailwindow</tspan>
                    </text>
                  </g>
                </g>
              </svg> */}
            
            </a>
            <p className="text-justify">
           <span> “TUMAINI” </span>is a Swahili phrase which means “HOPE.  When we hope for something, we wait for it through patience ( Rom 8:25 ; 15:4 ).  Hope leads to joy
            </p>
          </div>

          <div className="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Useful NavLinks</h2>
            </div>
            <ul className="leading-8">
              <NavLink to='/about' onClick={scrollToTop} className="hover:text-blue-400">
              <li>About Us</li>
              </NavLink>
              <NavLink to="/programs" onClick={scrollToTop} className="hover:text-blue-400">
              <li>Programs &amp; Activities</li></NavLink>
             <NavLink to="/testimonials" onClick={scrollToTop} className="hover:text-blue-400">
             <li>Testimonials</li></NavLink>
              <NavLink to="/contact" onClick={scrollToTop} className="hover:text-blue-400">
              <li>Contact Us</li>
              </NavLink>
            </ul>
          </div>
          {/* <div className="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">NewsLetters </h2>
            </div>
            <ul className="leading-8">
              <li><a href="#" className="hover:text-blue-400">Getting Started With HTML and CSS</a></li>
              <li><a href="#" className="hover:text-blue-400">What Is Flex And When to Use It?</a></li>
              <li><a href="#" className="hover:text-blue-400">How TailwindCSS Can Help Your Productivity?</a></li>
              <li><a href="#" className="hover:text-blue-400">5 Tips to Make Responsive Website</a></li>
              <li><a href="#" className="hover:text-blue-400">See More</a></li>
            </ul>
          </div> */}
          <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Connect With Us</h2>
            </div>
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
           
            <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-indigo-700 py-4 text-gray-100">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 w-full text-center sm:w-auto sm:text-left">
            Copyright © 2024
            <script>new Date().getFullYear() </script>
             . Tumaini Prison Ministry. All Rights Reserved.
          </div>
          <div className="px-4 w-full text-center sm:w-auto sm:text-left">
            Powered by Zanah Technology
          </div>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer