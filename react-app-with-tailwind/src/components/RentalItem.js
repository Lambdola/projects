import React from 'react';
import car1 from '../images/car1.jpg';
import LuggageIcon from '@mui/icons-material/Luggage';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

function RentalComp({item, image, setSalesInfo}) {
  return (
    <div onClick={()=>setSalesInfo(item)} className='relative hover:bg-green-300 active:bg-green-500 w-80 h-80 pb-5 mb-5 border-2 border-purple-700 rounded-lg overflow-hidden no-scrollbar shadow-lg md:w-56'>
        <div className='w-full h-2/3 overflow-hidden bg-white relative'>
            {item.url ? <img src={item.url} className='w-80 border-b-2 border-black absolute bottom-0' /> : <img src={image} className='w-80 border-b-2 border-black absolute bottom-0' /> }
        </div>
        <div className='p-2 h-1/3 overflow-scroll no-scrollbar'>
            <h2 className='font-bold text-purple-800 text-lg'>{item.Year + " " + item.Make + " " + item.Model + " " + item.Category}</h2>
            { item.Seats && <p className='font-bold text-slate-800'>No Of Seats : {item.Seats}</p>}
            <div className='w-40 mx-auto '>
            { item.Bags && 
                <div className='space-x-2 flex justify-between'>
                    <div className='w-10 inline-block text-center'>
                        <LuggageIcon />
                    </div>
                    <div className='w-full'>
                        <p className='font-bold text-slate-800 inline-block font-roboto'>{item.Bags.Large + `${item.Bags.Large > 1 ? " Large Bags" : " Large Bag" }`}</p>
                    </div>
                    
                </div>
            }
            { item.Bags && 
                <div className='space-x-2 flex justify-between'>
                    <div className='w-10 inline-block text-center'>
                        <WorkOutlineIcon />
                    </div>
                    <div className='w-full'>
                        <p className='font-bold text-slate-800 inline-block font-roboto'>{item.Bags.Small + `${item.Bags.Small > 1 ? " Small Bags" : " Small Bag" }`}</p>
                    </div>
                </div>
            }
            </div>
        </div>
    </div> 
)
}

export default RentalComp;