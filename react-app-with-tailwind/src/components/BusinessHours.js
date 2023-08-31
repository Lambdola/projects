import React from 'react'

function BusinessHours() {
  return (
    <div className='relative z-20 page-transition'>
        <div className='bg-purple-600 h-32 w-72 absolute left-2 -bottom-3 -z-10'></div>
        <div className='bg-purple-600 h-32 w-72 absolute right-2 -top-4 -z-10'></div>
        <div className=' bg-slate-50 w-80 py-4 text-slate-500 font-poppins font-semibold space-y-4 mx-auto rounded-xl text-center shadow md:w-full
        lg:portrait:h-[30%] lg:portrait:flex lg:portrait:flex-col lg:portrait:gap-4 lg:portrait:text-2xl
        xl:landscape:w-full xl:landscape:text-3xl xl:rounded-none xl:relative xl:portrait:bg-red-200
        '>
            <h2 className='text-lg mb-5 font-black font-poppins text-slate-800 lg:portrait:mb-0 lg:portrait:mt-10 lg:portrait:text-2xl xl:landscape:text-3xl xl:landscape:my-10 '>BUSINESS HOURS</h2>
            <div>
                <p className='underline'>MON - FRI</p>
                <p>8:00 AM - 6:00 PM</p>
            </div>
            <div>
                <p className='underline'>SAT</p>
                <p>8:00 AM - 4:00 PM</p>
            </div>
            <div>
                <p className='underline'>SUN</p>
                <p>CLOSED</p>
            </div>
        </div>
    </div>
  )
}

export default BusinessHours;