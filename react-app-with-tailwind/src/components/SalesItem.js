import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SalesItemInfo from './SalesItemInfo';


function SalesItem({item, image, setSalesInfo}) {
    
    return (
        <div onClick={()=>setSalesInfo(item)} className='bg-red-200 w-80 mb-5 border-2 border-purple-700 rounded-lg overflow-auto active:bg-blue-500'>
            <div className='w-80 bg-red-500 overflow-hidden'>
                {item.url ? <img src={item.url} className='w-80 border-b-2 border-black' /> : <img src={image} className='w-80 border-b-2 border-black' /> }
            </div>
            <div className='p-2'>
                <h2 className='font-bold text-purple-800 text-lg'>{item.Year + " " + item.Make + " " + item.Model + " " + item.Category}</h2>
                {item.Transmission && <p className='font-bold text-slate-500'>Transmission : {item.Transmission}</p>}
                {item.Color && <p className='font-bold text-slate-500'>Color : {item.Color}</p>}
                {item.Price && <p className='font-bold text-slate-500'>Price : {item.Price}</p>}
            </div>
        </div> 
    )
}

export default SalesItem