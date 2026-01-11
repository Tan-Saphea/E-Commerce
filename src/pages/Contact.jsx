import React from 'react'

function Contact() {
  return (
    <div className='max-w-[90] sm:px-8 lg:px-40'>
      <form action="" className='w-full pt-20 pb-10'>
        <h1 className='text-center text-3xl font-bold font-poppins'>Contact Us</h1>
        <div className='max-w-lg mx-auto mt-10'>
          <label htmlFor="name" className='block mt-6 mb-2 font-medium'>Name</label>
          <input type="text" id="name" name="name" className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
          <label htmlFor="email" className='block mt-6 mb-2 font-medium'>Email</label>
          <input type="email" id="email" name="email" className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
          <label htmlFor="message" className='block mt-6 mb-2 font-medium'>Message</label>
          <textarea id="message" name="message" rows="5" className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></textarea>
          <button type="submit" className='mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors'>Send Message</button>
        </div>
      </form>
    </div>
    
  )
}

export default Contact
