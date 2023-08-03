export default function Footer() {
    return (
        <footer className='w-auto h-auto m-2 p-3 bg-gray-950 align-middle justify-around xl:flex ' >
            <div className='mt-1 xl:mt-4'>
                <ul className='text-slate-400 block text-center space-y-3 font-bold md:text-3xl md:space-y-7 xl:text-2l xl:space-y-4'>
                    <li><a className='hover:text-slate-50'>Terms & Conditions </a></li>
                    <li><a className='hover:text-slate-50'>Accessibility</a></li>
                    <li><a className='hover:text-slate-50'>Privacy Policy</a></li>
                    <li><a className='hover:text-slate-50'>Store Policy</a></li>
                    <li><a className='hover:text-slate-50'>Book An Appointment</a></li>
                    <li><a className='hover:text-slate-50'>Coupons</a> </li>
                </ul> 
            </div>
            <div id="contact_us" className='mt-9 font-bold text-center space-y-4 mb-11 md:text-3xl md:space-y-8 xl:mt-2 xl:space-y-7 xl:text-3xl'>
                <h2 className='text-white font-bold  xl:text-4xl md:text-5xl'>Quick Connect</h2>
                <p className='text-slate-400 hover:text-slate-50'>0703-788-7923</p>
                <p className='text-slate-400 hover:text-slate-50'>localhost:3000</p>
                <div className='flex justify-evenly align-middle xl:gap-4'>
                    <div className='w-8 h-8 rounded-full bg-white md:h-16 md:w-16'></div>
                    <div className='w-8 h-8 rounded-full bg-white md:h-16 md:w-16'></div>
                    <div className='w-8 h-8 rounded-full bg-white md:h-16 md:w-16'></div>
                    <div className='w-8 h-8 rounded-full bg-white md:h-16 md:w-16'></div>
                </div>
            </div>
        </footer>
    )
}