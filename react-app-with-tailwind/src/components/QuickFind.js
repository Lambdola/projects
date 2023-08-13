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
        <div className='w-full bg-gray-900 xl:h-[22.5rem] pt-4 pb-10 rounded-xl hover:bg-violet-20 xl:hover:bg-violet-300 mx-auto text-center mb-4 md:w-3/4 md:h-80  '>
            <p className='text-gray-200 font-roboto font-bold text-2xl  xl:text-4xl xl:mt-5 mb-7 md:text-4xl md:mt-1'>Quick Find</p>
            <div className=' md:space-y-14 xl:space-y-15 xl:mt-10'>
                <div className='bg-green-500 rounded-t-3xl px-5 py-6 pb-32 -mb-20 text-left space-y-5'>
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
                        <p className='font-roboto font-light '>
                            The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigab
                            le address as the href value. If you cannot provide an href, but still need the element to resemble a link, use
                            a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
                            /blob/HEAD/docs/rules/anchor-is-valid.md
                        </p>
                    </div>
                    <p><NavLink to="/services#sales" className="bg-violet-500 hover:bg-gray-700 xl:hover:bg-violet-900 active:bg-black text-white font-bold px-6 py-2 rounded md:text-3xl">SALES</NavLink></p>
                </div>
                <div className='bg-pink-400 rounded-t-3xl px-5 py-6 pb-32 -mb-20 text-left space-y-5'>
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
                        <p>
                            The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigab
                            le address as the href value. If you cannot provide an href, but still need the element to resemble a link, use
                            a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
                            /blob/HEAD/docs/rules/anchor-is-valid.md
                        </p>
                    </div>
                    <p><NavLink to="/services#rentals" className="bg-violet-500 hover:bg-gray-700 xl:hover:bg-violet-900 active:bg-black text-white font-bold px-6 py-2 rounded md:text-3xl">RENTALS</NavLink></p>
                </div>
                <div className='bg-yellow-400 rounded-t-3xl rounded-b-xl px-5 py-6 text-left space-y-5'>
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
                        <p>
                            The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigab
                            le address as the href value. If you cannot provide an href, but still need the element to resemble a link, use
                            a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
                            /blob/HEAD/docs/rules/anchor-is-valid.md
                        </p>
                    </div>
                    <p><NavLink to="/services#repairs" className="bg-violet-500 hover:bg-gray-700 xl:hover:bg-violet-900 active:bg-black text-white font-bold px-6 py-2 rounded md:text-3xl">REPAIRS</NavLink></p>
                </div>

            </div>
        </div>
    )
}
