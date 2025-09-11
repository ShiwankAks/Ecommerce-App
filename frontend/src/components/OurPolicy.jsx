import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col justify-around gap-12 text-gray-700 text-center py-20 text-xs sm:flex-row sm:gap-2 sm:text-sm md:text-base '>
     <div>
     <img className='w-10 m-auto mb-5' src={assets.exchange_icon} alt="" />
     <p className='font-semibold '>Easy Exchange</p>
     <p className='text-gray-400'>We offer hassle free exchange policy</p> 
        </div>
<div>
     <img className='w-10 m-auto' src={assets.quality_icon} alt="" />
     <p className='font-semibold '>7 Days Return</p>
     <p className='text-gray-400'>We prodvide 7 days return policy</p> 
            </div>
            <div>

     <img className='w-10 m-auto' src={assets.support_img} alt="" />
     <p className='font-semibold '>Best Customer Support</p>
     <p className='text-gray-400'>We provide 24/7 customer support</p> 
            </div>

    </div>
  )
}

export default OurPolicy
