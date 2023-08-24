import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SalesItemInfo from './SalesItemInfo';


function SalesItem({item, image, setSalesInfo}) {
    
    return (
        <div onClick={()=>setSalesInfo(item)} className='relative hover:bg-green-300 active:bg-green-500 w-80 h-80 pb-3 mb-5 border-2 border-purple-700 rounded-lg overflow-hidden no-scrollbar shadow-lg md:w-56'>
            <div className='w-full h-2/3 overflow-hidden bg-white relative'>
                {item.url ? <img src={item.url} className='w-80 border-b-2 border-black absolute bottom-0' /> : <img src={image} className='w-80 border-b-2 border-black absolute bottom-0' /> }
            </div>
            <div className='p-2 h-1/3 overflow-scroll no-scrollbar'>
                <h2 className='font-bold text-purple-800 text-lg'>{item.Year + " " + item.Make + " " + item.Model + " " + item.Category}</h2>
                {item.Transmission && <p className='font-bold text-slate-800'>Transmission : {item.Transmission}</p>}
                {item.Color && <p className='font-bold text-slate-800'>Color : {item.Color}</p>}
                {item.Price && <p className='font-bold text-slate-800'>Price : {item.Price}</p>}
            </div>
        </div> 
    )
}

export default SalesItem