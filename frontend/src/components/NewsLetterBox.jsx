import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler=(event)=>{
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Suscribe now and get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <form className='w-full sm:w-1/2 mx-auto border pl-3 my-9 gap-3 flex items-center'>
            <input className=' w-full sm:flex-1  outline-none ' type='email' placeholder='Enter your email' required/>
            <button onClick={onSubmitHandler} type='submit' className='cursor-pointer bg-black text-white text-xs px-10 py-4 rounded-xs '>SUSCRIBE</button>
        </form>

    </div>
  )
}

export default NewsLetterBox
