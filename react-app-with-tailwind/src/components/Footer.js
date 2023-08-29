import React from "react";
import facebook from '../images/facebook-2.png';
import twitter from '../images/twitter.png';
import whatsapp from '../images/whatsapp.png';
import linkedin from '../images/linkedin.png';
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className='w-auto mb-10 h-auto m-2 p-3 bg-gray-700 align-middle justify-around md:text-xl
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
                    <div className='w-8 h-8 rounded-full bg-whit'>
                        <NavLink to="https://www.facebook.com/profile.php?id=100060733820016"><img src={facebook} /></NavLink>
                    </div>
                    <div className='w-8 h-8 rounded-full bg-whit'>
                        <NavLink to="https://twitter.com/elijahdimeji549"><img src={twitter} /></NavLink>
                    </div>
                    <div className='w-8 h-8 rounded-full bg-whit'>
                        <NavLink to="https://wa.link/zyjbt6"><img src={whatsapp} /> </NavLink> 
                    </div>
                    <div className='w-8 h-8 rounded-full bg-whit'>
                        <NavLink to="https://www.linkedin.com/in/oladimeji-olalekan-a24a58250"><img src={linkedin} /> </NavLink>
                    </div>
                </div>
                <p className='text-slate-950'><span>©</span>2023 Trizent Autos. All rights reserved.</p>
            </div>
        </footer>
    )
}