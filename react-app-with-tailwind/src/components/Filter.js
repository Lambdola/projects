import React from 'react'

function Filter({newFilter, filter, handleFilterChange, handleSubmit}) {
  // let filter;
  // if (newFilter === "yes") {
  //   handleFilterChange("Yo")
  // }
  return (
    <div>
        <form onSubmit={handleSubmit} className='space-y-2 p-1 relative mt-2'>
            <input name="Year" value={filter.Year} onChange={handleFilterChange} type="text" autoComplete='off' placeholder="-Year-" className='peer/name border border-violet-950 h-8 p-2 pt-3 focus:placeholder:invisible placeholder:p-2'/>
            <p className='peer-focus/name:visible invisible absolute left-2 -top-2 text-[0.7rem] bg-white px-2 font-bold'>Year</p>
            <input name="Make" value={filter.Make} onChange={handleFilterChange} type="text" autoComplete='off' placeholder='-Make-' className='peer/make placeholder:p-2 focus:placeholder:invisible border border-violet-950 h-8 p-2 pt-3' />
            <p className='peer-focus/make:visible invisible absolute left-2 top-8 text-[0.7rem] bg-white px-2 font-bold'>Make</p>
            <input name="Model" value={filter.Model} onChange={handleFilterChange} type="text" autoComplete='off' placeholder='-Model-' className='peer/model placeholder:p-2 focus:placeholder:invisible border border-violet-950 h-8 p-2 pt-3' />
            <p className='peer-focus/model:visible invisible absolute left-2 top-[72px] text-[0.7rem] bg-white px-2 font-bold'>Model</p>
            <input name="Category" value={filter.Category} onChange={handleFilterChange} type="text" autoComplete='off' placeholder='-Option-' className='peer/option placeholder:p-2 focus:placeholder:invisible border border-violet-950 h-8 p-2 pt-3' />
            <p className='peer-focus/option:visible invisible absolute left-2 top-28 text-[0.7rem] bg-white px-2 font-bold'>Option</p>
            <input name="Mileage" value={filter.Mileage} onChange={handleFilterChange} type="text" autoComplete='off' placeholder='-Mileage-' className='peer/mileage placeholder:p-2 focus:placeholder:invisible border border-violet-950 h-8 p-2 pt-3' />
            <p className='peer-focus/mileage:visible invisible absolute left-2 bottom-[156px] text-[0.7rem] bg-white px-2 font-bold'>Mileage</p>
            <input name="Color" value={filter.Color} onChange={handleFilterChange} type="text" autoComplete='off' placeholder='-Color-' className='peer/color placeholder:p-2 focus:placeholder:invisible border border-violet-950 h-8 p-2 pt-3' />
            <p className='peer-focus/color:visible invisible absolute left-2 bottom-[116px] text-[0.7rem] bg-white px-2 font-bold'>Color</p>
            <input name="Price" value={filter.Price} onChange={handleFilterChange} type="text" autoComplete='off' placeholder='-Price-' className='peer/price placeholder:p-2 focus:placeholder:invisible border border-violet-950 h-8 p-2 pt-3' />
            <p className='peer-focus/price:visible invisible absolute left-2 bottom-[76px] text-[0.7rem] bg-white px-2 font-bold'>Price</p><br />
            <button type="submit" className='font-bold text-xl bg-purple-800 text-slate-200 p-2 text-center'>FILTER</button>
        </form>
    </div>
  )
}

export default Filter