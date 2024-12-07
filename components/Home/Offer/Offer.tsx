import React from 'react'

const Offer = () => {
  return (
    <div className="flex items-center justify-center bg-black pt-24 pb-24 mb-20">
      <div className="text-center px-6">
        <h2 className='text-white text-2xl md:text-3xl font-semibold mb-4'>Explore Ultimate Feature With Premium</h2>
        <p className='mb-8 text-gray-400'>
          Provide your Apple ID email, and we will send over a TestFlight invite
          directly to your inbox.
        </p>
        <button className='text-white bg-blue-500 py-3 px-8 text-lg mb-4 rounded-full font-medium hover:bg-blue-600'>Start 14 Days Free Trial</button>
        <p className='text-gray-400'>No Credit Card Required</p>
      </div>
    </div>
  );
}

export default Offer
