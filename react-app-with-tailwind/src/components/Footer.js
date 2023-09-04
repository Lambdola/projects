import React from "react";
import facebook from '../images/facebook-2.png';
import twitter from '../images/twitter.png';
import whatsapp from '../images/whatsapp.png';
import linkedin from '../images/linkedin.png';
import { NavLink } from "react-router-dom";

export default function Footer() {

    const footerLinks = [
        { "link": "Terms & Conditions" },
        { "link": "Accessibility" },
        { "link": "Privacy Policy" },
        { "link": "Store Policy" },
        { "link": "Book An Appointment" },
        { "link": "Coupons" }
    ]

    const socialMediaLinks = [
        { "link": "https://www.facebook.com/profile.php?id=100060733820016", "title": facebook },
        { "link": "https://twitter.com/elijahdimeji549", "title": twitter },
        { "link": "https://wa.link/zyjbt6", "title": whatsapp },
        { "link": "https://www.linkedin.com/in/oladimeji-olalekan-a24a58250", "title": linkedin },
    ]
    return (
        <footer className='w-auto h-auto m-2 p-3 bg-slate-800 align-middle justify-around md:text-xl
        lg:flex lg:flex-col 
        ' >
            <div className='mt-1 lg:text-sm '>
                <ul className='text-slate-400 block text-center space-y-3 font-bold lg:space-y-0 lg:flex lg:justify-evenly xl:flex-col xl:text-xl xl:space-y-2 '>
                    { footerLinks.map(items => <li key={items.link} ><a className='hover:text-slate-50 hover:underline transition-all'>{items.link}</a></li> )}
                </ul> 
            </div>
            <div id="contact_us" className='mt-9 font-bold text-center space-y-4 mb-8 '>
                <h2 className='text-slate-50 text-xl font-bold xl:text-3xl'>Quick Connect</h2>
                <p className='text-slate-400 hover:text-slate-50 hover:underline transition-all'>0703-788-7923</p>
                <p className='text-slate-400 hover:text-slate-50 hover:underline transition-all'>localhost:3000</p>
                <div className='flex justify-evenly align-middle'>
                    { socialMediaLinks.map(items => {
                        return (
                            <div key={items.title} className='group w-8 h-8 rounded-full relative'>
                                <NavLink to={items.link}>
                                    <img src={items.title} className="w-full h-full" />
                                </NavLink>
                                <div className="transition-all absolute -bottom-2 w-full group-hover:bg-orange-400 h-1"></div>
                            </div>
                        )
                    })}
                </div>
                <p className='text-slate-500'><span>©</span>2023 Trizent Autos. All rights reserved.</p>
            </div>
        </footer>
    )
}