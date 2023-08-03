import React from 'react';
import car1 from '../car1.jpg';
import LuggageIcon from '@mui/icons-material/Luggage';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

function RentalComp({item}) {
  return (
    <div className='bg-red-300 w-40 text-sm text-center p-2 mb-4'>
        <img src={car1} alt="" className='w-40' />
        <p className='font-bold text-purple-900'>{item.Year + " " + item.Make + " " + item.Model + " " + item.Category}</p>
        <p>3 Seats</p>
        <p><WorkOutlineIcon /> 3 Large Bags</p>
        <p><LuggageIcon /> 1 Small Bag</p>
    </div>
  )
}

export default RentalComp