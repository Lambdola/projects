import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../images/car_logo2.png';
import profilePic from '../images/car_logo.jpg';
import CartContent from './CartContent';
import { useEffect, useState } from 'react';
import { ArrowDropUp } from '@mui/icons-material';
import SignIn from '../pages/SignIn';

export default function Header({isSignIn, setIsSignIn, cartItems, cartCount, setCartCount}) {
    const [logIn, setLogIn] = useState(false);

    let navigate = useNavigate();

    let user;
    useEffect(()=>{
        // alert("Header")
        user = localStorage.getItem("user");
        let test;
        try {
          user = JSON.parse(user);
          test = user.loggedIn;
        } catch (error) {
          user = { "loggedIn": "false" };
        }
       
        if (user.loggedIn === "true"){
            // alert("yh")
            setLogIn(true);
    
        }else{
            setLogIn(false);
        }
      },[isSignIn]);
    

    let url = window.location.href;
    let style = "bg-purple-600 text-purple hover:bg-purple-900 text-white";
    let active = "border-4 border-purple-400 bg-white text-purple-500 hover:bg-purple-500 hover:border-purple-900 md:border-none";

    let cart, services, reviews, blog, contactUs;
    if (url.includes("cart")) {
        cart = active;
    } else {
        cart = style;
    }
    if (url.includes("services")) {
        services = active;
    } else {
        services = style;
    }
    if (url.includes("blog")) {
        blog = active;
    } else {
        blog = style;
    }
    if (url.includes("reviews")) {
        reviews = active;
    } else {
        reviews = style;
    }
    if (url.includes("contact-us")) {
        contactUs = active;
    } else {
        contactUs = style;
    }
    

    function handleMenuClick(show) {
        let sideBar = document.getElementById("sideBar");
        if (show === "open") {
            sideBar.style.display = "block";
        }
        else if (show === "close") {
            sideBar.style.display = "none";
        }
    }

    function handleLogOut() {
        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        let updateDetails = {...user, "loggedIn": "false"};
        localStorage.setItem("user", JSON.stringify(updateDetails));
        setIsSignIn(false);
        // setCartCount(0);
        setTimeout(()=>navigate("/"),1000);
    }


    return (
        <header className="relative top-0 w-auto p-2 bg-gray-900 m-1 flex align-middle mb-3 md:w-full md:h-[7.5rem] md:z-10 ">
            { logIn && (cartCount > 0 && <CartContent  cartCount={cartCount}/>)  } 
            {/* <BackToTop /> */}
            <div className="inline-block py-2 md:flex md:absolute md:w-full md:z-30 ">
                <NavLink to="/" ><img className="h-16 w-16" src={logo} alt="Logo." /></NavLink>
            </div>
            <div className='absolute right-4 top-8 '>
                {/* handles hamburger icon toggle and its contents; when logged in or not */}
                { logIn ? 
                   (<ul className='relative bg-red-300 hidden '>
                        <li className='mt-16 flex flex-wrap justify-center xsm:lg:inline-block xsm:lg:mt-0 xsm:md:absolute xsm:md:right-0 xsm:md:-top-4 '>
                            <div className='w-20 h-20 rounded-full bg-gray-700 border-4 border-purple-800 overflow-hidden xsm:md:hover:border-white'>
                                <img src={profilePic} alt="User" />
                            </div>
                            {user && <p className='text-[.7rem] font-bold font-serif mt-1 xsm:md:text-white'>{user.lastName + " " + user.firstName}</p>}
            
                        </li>
                        <div className='relative'>
                            <li className=''><NavLink to="/cart" className={`${cart} font-bold block rounded-xl p-2 text-center text-sm mt-4  xsm:lg:inline-block xsm: `}>Cart</NavLink></li>
                            {cartCount > 0 && <div className='bg-red-600 text-white font-bold font-roboto border-2 box-content border-black absolute -top-2 -right-1 rounded-full w-6 h-6 flex text-center '>
                                <p className='w-full h-full'>{cartCount}</p>
                            </div>}
                        </div>
                        
                        <li><NavLink to="/services" className={`${services} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-3 xsm:  `}>Services</NavLink></li>
                        <li><NavLink to="/blog" className={`${blog} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-3 xsm: `}>Blog</NavLink></li>
                        <li><NavLink to="/reviews" className={`${reviews} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-3 xsm: xsm:md:mr-20 `}>Reviews</NavLink></li>
                        <li><NavLink to="/contact-us" className={`${contactUs} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-3 `}>Contact Us</NavLink></li>
                        <li><NavLink to ="/" onClick={handleLogOut} className='bg-red-500 hover:bg-red-800 text-white font-bold block rounded-xl p-2 text-center text-sm mt-3 '>Log Out</NavLink></li>
                    </ul>)
                    :
                    (<ul className='hidden md:bg-red-400' >
                        <li><NavLink to="/services" className={`${services} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-24`}>SServices</NavLink></li>
                        <li><NavLink to="/blog" className={`${blog} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-4`}>BBlog</NavLink></li>
                        <li><NavLink to="/contact-us" className={`${contactUs} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-4`}>CContact Us</NavLink></li>
                        <li><NavLink to="/sign-in " className='bg-purple-600 hover:bg-purple-900 active:bg-green-600 text-white font-bold block rounded-xl p-2 text-center text-sm mt-4'>SSign In</NavLink></li>
                    </ul>)
                }
                <div className='p-1 rounded text-center hover:bg-gray-300 md:hidden '>
                    <MenuIcon sx={{color:'white', "&:hover": {color: "black"}}} onClick={() => handleMenuClick("open")} />
                </div>
            </div>
            
            <div id="sideBar" className='h-full w-36 bg-slate-100 fixed top-0 right-0 hidden py-2 px-4 z-20 md:absolute md:flex md:w-full md:bg-transparent'>
                {/* handles sidebar div toggle and its contents; when logged in or not */}
                <div onClick={() => handleMenuClick("close")} className=' h-full w-96 right-36 top-0 absolute z-50 bg-gray-500 opacity-50 md:w-full md:hidden '></div>
                <div className='float-right mt-4 m-1 rounded text-center hover:bg-slate-300 p-1 md:hidden '>
                    <CloseIcon sx={{color:'black' , "&:hover": {color: "black"}}}  onClick={() => handleMenuClick("close")} />
                </div>
                
                { logIn ?
                    (<ul className='md:flex md:justify-around md:mt-14 md:w-full' >

                        <li className='mt-16 flex flex-wrap justify-center md:absolute md:right-1 md:px-2 md:-mt-14 md:flex-row text-center'>
                            <div className='w-20 h-20 rounded-full bg-gray-700 border-4 border-purple-800 hover:border-white overflow-hidden text-center md:h-14 md:w-14'>
                                <img src={profilePic} alt="User" />
                            </div>
                            {user && <p className='text-[.7rem] font-bold font-serif mt-1 md:text-white md:font-roboto md:mt-3 md:ml-2 md:text-lg  '>{user.lastName + " " + user.firstName}</p>}
                        </li>

                        <div className='relative'>
                            <li className='relative text-center'>
                                <NavLink to="/cart" className={`${cart}  font-bold block rounded-xl p-2 text-center text-sm mt-3 md:bg-transparent md:hover:bg-transparent md:hover:text-purple-500 md:px-0 md:text-lg`}>Cart</NavLink>
                                {cart === active && <div className='hidden md:block md:relative md:bottom-6'><ArrowDropUp sx={{fontSize:45, color:'whitesmoke' }} /></div> }
                            </li>
                            { cartCount > 0 && 
                                <div className='bg-red-600 text-white font-bold font-roboto border-2 box-content border-black absolute -top-2 -right-1 rounded-full w-6 h-6 flex text-center md:top-2 md:-right-7 md:text-lg'>
                                    <p className='w-full h-full'>{cartCount}</p>
                                </div> }
                        </div>
                        
                        <li className='relative text-center'>
                            <NavLink to="/services" className={`${services} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-3 md:bg-transparent md:hover:bg-transparent md:hover:text-purple-500 md:px-0 md:text-lg `}>Services</NavLink>
                            {services === active && <div className='hidden md:block md:relative md:bottom-6'><ArrowDropUp sx={{fontSize:45, color:'whitesmoke' }} /></div> }
                        </li>

                        <li className='relative text-center'>
                            <NavLink to="/blog" className={`${blog} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-3 md:bg-transparent md:hover:bg-transparent md:hover:text-purple-500 md:px-0 md:text-lg`}>Blog</NavLink>
                            {blog === active && <div className='hidden md:block md:relative md:bottom-6'><ArrowDropUp sx={{fontSize:45, color:'whitesmoke' }} /></div> }
                        </li>

                        <li className='relative text-center'>
                            <NavLink to="/reviews" className={`${reviews} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-3 md:bg-transparent md:hover:bg-transparent md:hover:text-purple-500 md:px-0 md:text-lg `}>Reviews</NavLink>
                            {reviews === active && <div className='hidden md:block md:relative md:bottom-6'><ArrowDropUp sx={{fontSize:45, color:'whitesmoke' }} /></div> }
                        </li>

                        <li className='relative text-center'>
                            <NavLink to="/contact-us" className={`${contactUs} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-3 md:bg-transparent md:hover:bg-transparent md:hover:text-purple-500 md:px-0 md:text-lg`}>Contact Us</NavLink>
                            {contactUs === active && <div className='hidden md:block md:relative md:bottom-6'><ArrowDropUp sx={{fontSize:45, color:'whitesmoke' }} /></div> }
                        </li>
                            
                        <li><NavLink to ="/" onClick={handleLogOut} className='bg-red-500 hover:bg-red-800 text-white font-bold block rounded-xl p-2 text-center text-sm mt-3 md:bg-transparent md:hover:bg-transparent md:hover:text-red-500 md:px-0 md:text-lg'>Log Out</NavLink></li>
                    </ul>) :
                    (<ul  className='md:flex md:justify-around md:mt-14 md:w-full' >
                        <li className='mt-16 flex flex-wrap justify-center md:absolute md:right-3 md:h-24 md:px-2 md:-mt-10 md:flex-row text-center'>
                            <div className='w-20 h-20 rounded-full bg-gray-700 border-4 border-purple-800 hover:border-white overflow-hidden text-center md:h-14 md:w-14'> </div>
                        </li>
                        <li><NavLink to="/services" className={`${services} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-3 md:bg-transparent md:hover:bg-transparent md:hover:text-purple-500 md:px-0 md:text-xl`}>Services</NavLink></li>
                        <li><NavLink to="/blog" className={`${blog} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-3 md:bg-transparent md:hover:bg-transparent md:hover:text-purple-500 md:px-0  md:text-xl`}>Blog</NavLink></li>
                        <li><NavLink to="/contact-us" className={`${contactUs} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-3 md:bg-transparent md:hover:bg-transparent md:hover:text-purple-500 md:px-0  md:text-xl`}>Contact Us</NavLink></li>
                        <li><NavLink to="/sign-in " className='bg-purple-600 hover:bg-green-600 active:bg-green-600 text-white font-bold block rounded-xl p-2 text-center text-sm mt-3 md:bg-transparent md:hover:bg-transparent md:hover:text-green-600 md:px-0  md:text-xl'>Sign In</NavLink></li>
                    </ul>)
                }
            </div>
        </header>
    )
}