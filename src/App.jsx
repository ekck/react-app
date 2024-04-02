import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';



import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import ProgramsPage from './pages/ProgramsPage';
import NewslettersPage from './pages/NewslettersPage';
import TestimonialsPage from './pages/TestimonialsPage';
import NewsletterPage, { newsletterLoader } from './pages/NewsletterPage';
import TestimonialPage, {testimonialLoader} from './pages/TestimonialPage';



const App = () => {

   
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
  
      <Route index element={<HomePage />} />
    
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/programs' element={<ProgramsPage />} />
      <Route path='/testimonials' element={<TestimonialsPage />} />
      <Route path='/newsletters' element={<NewslettersPage />} />
      <Route path='/newsletter/:_id' element={<NewsletterPage />} loader={newsletterLoader}/>
      <Route path='/testimonial/:_id' element={<TestimonialPage />} loader={testimonialLoader} />
  
      </Route>
   ));
  
  return <RouterProvider router={router} />
}

export default App
