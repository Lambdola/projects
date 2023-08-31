import { NavLink } from 'react-router-dom';
import CarRentalOutlinedIcon from '@mui/icons-material/CarRentalOutlined';
import CarRepairOutlinedIcon from '@mui/icons-material/CarRepairOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import { purple } from '@mui/material/colors';

export default function QuickFind() {
    return (
        <div className='w-full bg-gray-50 pt-4 pb-10 rounded-xl mx-auto text-center mb-4  '>
            <p className='text-gray-900 font-roboto font-bold text-2xl mb-2 xl:text-4sxl '>QUICK FIND</p>
            <div className='xl:flex xl:flex-col'>
                <div className='bg-green-500 rounded-t-3xl px-5 py-6 pb-32 -mb-20 text-left space-y-5 xl:w-full '>
                    <div className='flex flex-wrap flex-col'>
                        <div className="-mb-5 ml-6">
                            <PaidOutlinedIcon sx={{fontSize:50, color: purple[800]}} />
                        </div>
                       <div>
                            <DirectionsCarOutlinedIcon sx={{fontSize:100, color: purple[800]}} />
                       </div>
                    </div>
                    <div className='text-white'>
                        <h2 className='font-bold text-2xl font-mono'>WE SELL</h2>
                        <p className='font-roboto font-medium text-lg '>
                        Are you ready to experience the thrill of driving in style? Look no further than Trizent Autos, where luxury and performance meet. Our curated collection of top-tier vehicles will leave you speechless. Whether you're seeking a sleek sedan, a rugged SUV, or a powerful sports car, we have the perfect ride to match your desires.
                        </p>
                        <p>Take a look at some of our collections.</p>
                    </div>
                    <p><NavLink to="/services#sales" className="block text-center text-lg font-roboto bg-violet-500 hover:bg-gray-700 xl:hover:bg-violet-900 active:bg-black text-white font-bold px-6 py-2 rounded md:text-3xl">SALES</NavLink></p>
                </div>
                <div className='bg-pink-400 rounded-t-3xl px-5 py-6 pb-32 -mb-20 text-left space-y-5 xl:w-full'>
                    <div className='flex flex-wrap flex-col '>
                        <div className="-mb-5 ml-6">
                            <KeyOutlinedIcon sx={{fontSize:50, color: purple[800]}} />
                        </div>
                        <div>
                            <DirectionsCarOutlinedIcon sx={{fontSize:100, color: purple[800]}} />
                       </div>
                    </div>
                    <div className='text-white'>
                        <h2 className='font-bold text-2xl font-mono'>WE RENT</h2>
                        <p className='font-roboto font-medium text-lg '>
                        At Trizent Autos, we understand that every traveler has unique preferences. That's why we offer a wide range of vehicles to suit your needs. Whether you're seeking an efficient compact car, a spacious SUV for your group, or a luxurious sedan for a business trip, we have the ideal ride to make your journey comfortable and memorable.
                        </p>
                        <p>Take a look at some of our collections.</p>
                    </div>
                    <p><NavLink to="/services#rentals" className="block text-center text-lg font-roboto bg-violet-500 hover:bg-gray-700 xl:hover:bg-violet-900 active:bg-black text-white font-bold px-6 py-2 rounded md:text-3xl">RENTALS</NavLink></p>
                </div>
                <div className='bg-yellow-400 rounded-t-3xl rounded-b-xl px-5 py-6 text-left space-y-5 xl:w-full xl:mb-20'>
                    <div className='flex flex-wrap flex-col '>
                        <div className="-mb-5 ml-6">
                            <HandymanOutlinedIcon sx={{fontSize:50, color: purple[800]}} />
                        </div>
                        <div>
                            <DirectionsCarOutlinedIcon sx={{fontSize:100, color: purple[800]}} />
                        </div>
                    </div>
                    <div className='text-white'>
                        <h2 className='font-bold text-2xl font-mono'>WE REPAIR</h2>
                        <p className='font-roboto font-medium text-lg '>
                        At Trizent Autos, we understand the importance of a well-functioning vehicle. Our team of skilled mechanics specializes in diagnosing and repairing a wide range of automotive issues. From minor maintenance tasks to complex repairs, we have the expertise to keep your car running smoothly.
                        </p>
                        <p >Take a look at some of the services we offer.</p>
                    </div>
                    <p><NavLink to="/services#repairs" className="block text-center text-lg font-roboto bg-violet-500 hover:bg-gray-700 xl:hover:bg-violet-900 active:bg-black text-white font-bold px-6 py-2 rounded md:text-3xl">REPAIRS</NavLink></p>
                </div>

            </div>
        </div>
    )
}
