import React from 'react';

function Filter({newFilter, filter, handleFilterChange, handleFilterSubmit}) {
  return (
    <div className='bg-[rgba(95,95,168,0.12)]'>
        <form onSubmit={handleFilterSubmit} className='space-y-3 p-1 relative mt-2 md:flex md:flex-wrap md:justify-between md:space-y-0 md:gap-3'>
          <div className='relative md:w-[49%]'>
            <input name="Year" value={filter.Year} onChange={handleFilterChange} type="text" autoComplete='off' placeholder="-Year-" className='peer/name placeholder:p-2 focus:placeholder:invisible border border-violet-950 h-9 w-full p-2 pt-3'/>
            <p className='peer-focus/name:block hidden absolute -top-2 text-[0.7rem] bg-white ml-2 px-1 font-bold text-center md:text-lg md:-top-4'>Year</p>
          </div>
          <div className='relative md:w-[49%]'>
             <input name="Make" value={filter.Make} onChange={handleFilterChange} type="text" autoComplete='off' placeholder='-Make-' className='peer/make placeholder:p-2 focus:placeholder:invisible border border-violet-950 h-9 w-full p-2 pt-3' />
            <p className='peer-focus/make:block hidden absolute -top-2 text-[0.7rem] bg-white ml-2 px-1 font-bold text-center  md:text-lg md:-top-4'>Make</p>
          </div>
          <div className='relative md:w-[49%]'>
             <input name="Model" value={filter.Model} onChange={handleFilterChange} type="text" autoComplete='off' placeholder='-Model-' className='peer/model placeholder:p-2 focus:placeholder:invisible border border-violet-950 h-9 w-full p-2 pt-3' />
            <p className='peer-focus/model:block hidden absolute -top-2 text-[0.7rem] bg-white ml-2 px-1 font-bold text-center  md:text-lg md:-top-4'>Model</p>
          </div>
          <div className='relative md:w-[49%]'>
             <input name="Category" value={filter.Category} onChange={handleFilterChange} type="text" autoComplete='off' placeholder='-Option-' className='peer/option placeholder:p-2 focus:placeholder:invisible border border-violet-950 h-9 w-full p-2 pt-3' />
            <p className='peer-focus/option:block hidden absolute -top-2 text-[0.7rem] bg-white ml-2 px-1 font-bold text-center  md:text-lg md:-top-4'>Option</p>
          </div>
          <div className='relative md:w-[49%]'>
             <input name="Mileage" value={filter.Mileage} onChange={handleFilterChange} type="text" autoComplete='off' placeholder='-Mileage-' className='peer/mileage placeholder:p-2 focus:placeholder:invisible border border-violet-950 h-9 w-full p-2 pt-3' />
            <p className='peer-focus/mileage:block hidden absolute -top-2 text-[0.7rem] bg-white ml-2 px-1 font-bold text-center  md:text-lg md:-top-4'>Mileage</p>
          </div>
          <div className='relative md:w-[49%]'>
             <input name="Color" value={filter.Color} onChange={handleFilterChange} type="text" autoComplete='off' placeholder='-Color-' className='peer/color placeholder:p-2 focus:placeholder:invisible border border-violet-950 h-9 w-full p-2 pt-3' />
            <p className='peer-focus/color:block hidden absolute -top-2 text-[0.7rem] bg-white ml-2 px-1 font-bold text-center  md:text-lg md:-top-4'>Color</p>
          </div>
          <div className='relative md:w-[49%]'>
            <input name="Price" value={filter.Price} onChange={handleFilterChange} type="text" autoComplete='off' placeholder='-Price-' className='peer/price placeholder:p-2 focus:placeholder:invisible border border-violet-950 h-9 w-full p-2 pt-3' />
            <p className='peer-focus/price:block hidden absolute -top-2 text-[0.7rem] bg-white ml-2 px-1 font-bold text-center  md:text-lg md:-top-4'>Price</p><br />
          </div>
            <button type="submit" className='font-bold text-xl bg-purple-800 text-slate-200 hover:bg-purple-700 active:bg-green-600 p-2 w-full text-center'>FILTER</button>
        </form>
    </div>
  )
}

export default Filter;