import React from 'react';
import car1 from '../car1.jpg';
import LuggageIcon from '@mui/icons-material/Luggage';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

function RentalComp({item, image, setSalesInfo}) {
  return (
    <div onClick={()=>setSalesInfo(item)} className='bg-red-200 text-center w-80 mb-5 border-2 border-purple-700 rounded-lg overflow-auto active:bg-blue-500'>
        <div className='w-80 bg-red-500 overflow-hidden'>
        <img src={car1} alt="Rental Car." className='w-80 border-b-2 border-black' />
        </div>
        <div className='p-2'>
            <h2 className='font-bold text-purple-800 text-lg'>{item.Year + " " + item.Make + " " + item.Model + " " + item.Category}</h2>
            {item.Transmission && <p className='font-bold text-slate-500'>No Of Seats : {item.Seats}</p>}
            {item.Color &&  <p>{item.Bags.Large + `${item.Bags.Large > 1 ? " Large Bags" : " Large Bag" }`}</p>}
            {item.Price && <p>{item.Bags.Small + `${item.Bags.Small > 1 ? " Small Bags" : " Small Bag" }`}</p>}
        </div>
    </div> 
)
}

export default RentalComp;