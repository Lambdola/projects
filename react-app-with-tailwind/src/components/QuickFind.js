import { NavLink } from 'react-router-dom';

export default function QuickFind() {
    return (
        <div className='w-60 h-60 xl:h-[22.5rem] bg-purple-800 hover:bg-violet-200 xl:hover:bg-violet-300 bg-opacity-10 mx-auto text-center p-1 mb-4 md:w-3/4 md:h-80  '>
            <p className='text-gray-800 font-bold text-lg  xl:text-4xl xl:mt-5 mb-7 md:text-4xl md:mt-1'>Quick Find</p>
            <div className='space-y-9 px-12 md:space-y-14 xl:space-y-15 xl:mt-10'>
                <p><NavLink to="/services#sales" className="bg-violet-500 hover:bg-violet-700 xl:hover:bg-violet-900 active:bg-black text-white font-bold px-6 py-2 rounded md:text-3xl">SALES</NavLink></p>
                <p><NavLink to="/services#rentals" className="bg-violet-500 hover:bg-violet-700 xl:hover:bg-violet-900 active:bg-black text-white font-bold px-6 py-2 rounded md:text-3xl">RENTALS</NavLink></p>
                <p><NavLink to="/services#repairs" className="bg-violet-500 hover:bg-violet-700 xl:hover:bg-violet-900 active:bg-black text-white font-bold px-6 py-2 rounded md:text-3xl">REPAIRS</NavLink></p>
            </div>
        </div>
    )
}
