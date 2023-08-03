import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuickFind from '../components/QuickFind';
import ViewCatalogue from '../components/ViewCatalogue';
import cat from '../cat.jpg'
import car2 from '../car2.jpg';
import hamburger from '../hamburger.svg'



export default function Home({isSignIn, setIsSignIn}) {
    useEffect(()=> {
        // alert("Reload")
        let user = localStorage.getItem("user");
        user = JSON.parse(user)
        if(user.loggedIn === "true"){
          setIsSignIn(true);
        }
      },[])
    return (
        <div className="">
            <div className='overflow-hidden'>
                <Header isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
                {/* <p>{isSignIn ? "true" : "false"}</p> */}

                <div className='2xl:w-2/3  mx-auto'>
                    <div className='xl:bg-slate-200 xl:float-left xl:w-1/3 xl:h-[30rem] xl:overflow-scroll xl:shadow-2xl'>
                        <div className='group relative h-auto w-auto m-1 mb-4 p-2 text-center xl:mb-10 '>
                            <img src={car2} className='relative peer' />
                            <div className='absolute top-5 flex flex-wrap justify-center space-y-2'>
                                <h2 className=' font-bold text-slate-600  xl:text-2xl mb-1 md:text-4xl md:mb-3'>Your one stop for all your car concerns.</h2>
                                <div className='flex gap-5'>
                                    <p className='border-2 border-purple-950 px-2 text-purple-900 font-bold md:text-3xl md:text-center md:p-2'>Sales</p>
                                    <p className='border-2 border-purple-950 px-2 text-purple-900 font-bold md:text-3xl md:text-center md:p-2'>Rentals</p>
                                    <p className='border-2 border-purple-950 px-2 text-purple-900 font-bold md:text-3xl md:text-center md:p-2'>Repairs</p>
                                </div>
                            </div>
                            <div className='group-hover:bg-red-700 absolute w-44 bottom-7 left-1/4 md:w-[24rem]'>
                                <ViewCatalogue />
                            </div>
                        </div>
                        <QuickFind />
                    </div>
                      

                    <div className='xl:float-right xl:w-2/3  xl:overflow-scroll'>
                        <div className='m-1 w-auto h-42 text-center p-4 space-y-8 mb-4 md:text-4xl xl:pl-2 '>
                            <h2><NavLink to="/about-us" className='block border-2 border-purple-800 px-24 py-2 font-bold text-violet-600 hover:text-white hover:bg-violet-900' >ABOUT US</NavLink></h2>
                            <h2><NavLink to="/services" className='block border-2 border-purple-800 px-24 py-2 font-bold text-violet-600 hover:text-white hover:bg-violet-900' >SERVICES</NavLink></h2>
                            <h2><NavLink to="/reviews" className='block border-2 border-purple-800 px-24 py-2 font-bold text-violet-600 hover:text-white hover:bg-violet-900' >REVIEWS</NavLink></h2>
                            <h2><NavLink to="/contact-us" className='block border-2 border-purple-800 px-24 py-2 font-bold text-violet-600 hover:text-white hover:bg-violet-900' >CONTACT US</NavLink></h2>
                        </div>
                        <Footer  />
                    </div>
                </div>
            </div>
        </div>
   
    )
}

