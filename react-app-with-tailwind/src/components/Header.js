import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import cat from '../cat.jpg'
import logo from '../car_logo2.png'
import profilePic from '../car_logo.jpg'

export default function Header({isSignIn, setIsSignIn}) {

    let navigate = useNavigate();

    let user = localStorage.getItem("user");
    user = JSON.parse(user);

    let url = window.location.href;
    // url = url.replace("http://localhost:3000/", "")
    let style = "bg-purple-600 text-purple hover:bg-purple-900 text-white";
    // let reviews =  "bg-purple-600 text-purple hover:bg-purple-900 text-white";

    let cart, services, reviews, blog, contactUs;
    if (url.includes("cart")) {
        cart = "border-4 border-purple-400 bg-white text-purple-900 hover:bg-purple-500 hover:border-purple-900"
    } else {
        cart = style
    }
    if (url.includes("services")) {
        services = "border-4 border-purple-400 bg-white text-purple-900 hover:bg-purple-500 hover:border-purple-900"
    } else {
        services = style
    }
    if (url.includes("blog")) {
        blog = "border-4 border-purple-400 bg-white text-purple-900 hover:bg-purple-500 hover:border-purple-900"
    } else {
        blog = style
    }
    if (url.includes("reviews")) {
        reviews = "border-4 border-purple-400 bg-white text-purple-900 hover:bg-purple-500 hover:border-purple-900"
    } else {
        reviews = style
    }
    if (url.includes("contact-us")) {
        contactUs = "border-4 border-purple-400 bg-white text-purple-900 hover:bg-purple-500 hover:border-purple-900"
    } else {
        contactUs = style
    }
    


    function handleMenuClick(show) {
        let sideBar = document.getElementById("sideBar");
        if (show === "open") {
            sideBar.style.display = "block"
        }
        else if (show === "close") {
            sideBar.style.display = "none"
        }
    }

    function handleLogOut() {
        let updateDetails = {...user, "loggedIn": "false"}
        localStorage.setItem("user", JSON.stringify(updateDetails))
        // alert("Yo")
        setIsSignIn(n => setIsSignIn(false))
        setTimeout(()=>navigate("/"),1000)
    }


    return (
        <header className=" top-0 w-auto p-2 h-16 bg-gray-900 m-1 flex align-middle mb-3 md:p-3 md:h-28">
            {/* <p>{url}</p> */}
            <div className=" block">
                <NavLink to="/" ><img className="h-12 w-12 md:h-20 md:w-32 xl:h-20 xl:w-32" src={logo} alt="Logo." /></NavLink>
            </div>
            {/* <p>{user.picture}</p> */}
            <div className=' absolute right-4 top-5 md:top-9 xl:right-7'>
                { isSignIn ? 
                    (<ul className='flex gap-4 text-xl text-black xsm:max-sm:hidden xl:gap-10'>
                        <li>
                            <div className='w-20 h-20 rounded-full bg-gray-700'>hh</div>
                            {user && <p>user.email</p>}
                        </li>
                        <li><NavLink to="/services" className='bg-purple-600 hover:bg-purple-900 active:bg-green-600 text-white font-bold rounded-xl p-3 text-center  xl:text-2xl'>Services</NavLink></li>
                        <li><NavLink to="/blog" className='bg-purple-600 hover:bg-purple-900 text-white font-bold rounded-xl p-3 text-center  xl:text-2xl'>Blog</NavLink></li>
                        <li><NavLink className='bg-purple-600 hover:bg-purple-900 text-white font-bold rounded-xl p-3 text-center  xl:text-2xl'>Contact Us</NavLink></li>
                        <li><NavLink onClick={() => setIsSignIn(false)} className='bg-red-600 hover:bg-red-900 text-white font-bold block rounded-xl p-2 text-center text-sm mt-4'>Log Out</NavLink></li>
                    </ul>) 
                    :
                    (<ul className='flex gap-4 text-xl text-black xsm:max-sm:hidden xl:gap-10'>
                        <li><NavLink to="/services" className='bg-purple-600 hover:bg-purple-900 text-white font-bold rounded-xl p-3 text-center  xl:text-2xl'>Services</NavLink></li>
                        <li><NavLink to="/blog" className='bg-purple-600 hover:bg-purple-900 text-white font-bold rounded-xl p-3 text-center  xl:text-2xl'>Blog</NavLink></li>
                        <li><NavLink className='bg-purple-600 hover:bg-purple-900 text-white font-bold rounded-xl p-3 text-center  xl:text-2xl'>Contact Us</NavLink></li>
                        <li><NavLink to="/sign_in" className='bg-purple-600 hover:bg-purple-900 text-white font-bold rounded-xl p-3 text-center  xl:text-2xl'>Sign In</NavLink></li>
                    </ul>) 
                }
                <div className='md:hidden'>
                    <MenuIcon onClick={() => handleMenuClick("open")} className='text-white hover:bg-gray-950' />
                </div>
               
            </div>
            
            <div onClick={() => handleMenuClick("close")} id="sideBar" className='h-full w-36 bg-slate-100 absolute right-0 hidden py-2 px-4 z-10'>
                <div className=' h-full w-96 right-0 absolute -z-20'></div>
                <CloseIcon onClick={() => handleMenuClick("close")} className='float-right m-1 text-black rounded-full hover:bg-slate-600 p-0.5'/>
                { isSignIn ?
                    (<ul>
                         <li className='mt-12 flex flex-wrap justify-center'>
                            <div className='w-20 h-20 rounded-full bg-gray-700 border-4 border-purple-800 overflow-hidden'>
                                <img src={profilePic} alt="User" />
                            </div>
                            {user && <p className='text-[.7rem] font-bold font-serif mt-1'>{user.lastName + " " + user.firstName}</p>}
                        </li>
                        <li><NavLink to="/cart" className={`${cart}  font-bold block rounded-xl p-2 text-center text-sm mt-4`}>Cart</NavLink></li>
                        <li><NavLink to="/services" className={`${services} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-4`}>Services</NavLink></li>
                        <li><NavLink to="/blog" className={`${blog} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-4`}>Blog</NavLink></li>
                        <li><NavLink to="/reviews" className={`${reviews} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-4`}>Reviews</NavLink></li>
                        <li><NavLink to="/contact-us" className={`${contactUs} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-4`}>Contact Us</NavLink></li>
                        <li><NavLink to ="/" onClick={handleLogOut} className='bg-red-500 hover:bg-red-800 text-white font-bold block rounded-xl p-2 text-center text-sm mt-4'>Log Out</NavLink></li>
                    </ul>) :
                    (<ul>
                        <li><NavLink to="/services" className={`${services} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-12`}>Services</NavLink></li>
                        <li><NavLink to="/blog" className={`${blog} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-4`}>Blog</NavLink></li>
                        <li><NavLink to="/contact-us" className={`${contactUs} active:bg-green-600 font-bold block rounded-xl p-2 text-center text-sm mt-4`}>Contact Us</NavLink></li>
                        <li><NavLink to="/sign-in " className='bg-purple-600 hover:bg-purple-900 active:bg-green-600 text-white font-bold block rounded-xl p-2 text-center text-sm mt-4'>Sign In</NavLink></li>
                    </ul>)
                }
            </div>
        </header>
    )
}