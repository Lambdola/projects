export default function Footer() {
    return (
        <footer className='w-auto h-auto m-2 p-3 bg-gray-950 align-middle justify-around md:text-xl
        lg:flex lg:flex-col
        ' >
            <div className='mt-1 lg:text-sm '>
                <ul className='text-slate-400 block text-center space-y-3 font-bold lg:space-y-0 lg:flex lg:justify-evenly '>
                    <li><a className='hover:text-slate-50'>Terms & Conditions </a></li>
                    <li><a className='hover:text-slate-50'>Accessibility</a></li>
                    <li><a className='hover:text-slate-50'>Privacy Policy</a></li>
                    <li><a className='hover:text-slate-50'>Store Policy</a></li>
                    <li><a className='hover:text-slate-50'>Book An Appointment</a></li>
                    <li><a className='hover:text-slate-50'>Coupons</a> </li>
                </ul> 
            </div>
            <div id="contact_us" className='mt-9 font-bold text-center space-y-4 mb-11 '>
                <h2 className='text-white font-bold'>Quick Connect</h2>
                <p className='text-slate-400 hover:text-slate-50'>0703-788-7923</p>
                <p className='text-slate-400 hover:text-slate-50'>localhost:3000</p>
                <div className='flex justify-evenly align-middle'>
                    <div className='w-8 h-8 rounded-full bg-white'></div>
                    <div className='w-8 h-8 rounded-full bg-white'></div>
                    <div className='w-8 h-8 rounded-full bg-white'></div>
                    <div className='w-8 h-8 rounded-full bg-white'></div>
                </div>
            </div>
        </footer>
    )
}