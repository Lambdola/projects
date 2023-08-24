import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import SignIn from './pages/SignIn';
import Reviews from './pages/Reviews';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';
import NoRoute from './pages/NoRoute';
import MakePayment from './pages/MakePayment';

export default function AppChild({isSignIn, setIsSignIn}) {
  // const [isSignIn, setIsSignIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [cartCount, setCartCount] = useState(null)
  const [signInWelcome, setSignInWelcome] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [rentalData, setRentalData] = useState({
    "pickUp" : "",
    "return" : "",
    "pickUpDate" : "",
    "returnDate": ""
  });


  
  let user;
  useEffect(()=>{
    // alert("AppChild")
    user = localStorage.getItem("user");
    let test;
    try {
      user = JSON.parse(user);
      test = user.loggedIn;
    } catch (error) {
      user = { "loggedIn": "false" };
      setIsSignIn(false);
    }
   
    if (user.loggedIn === "true"){
      setIsSignIn(n => setIsSignIn(true));
      let cart = localStorage.getItem(user.email);
      try {
          cart = JSON.parse(cart);
          if (cart.length > 0){
              setCartItems(n => setCartItems(cart));
          }
      } catch (error) {
          setCartItems(n => setCartItems([]));
      }
      setCartCount(cart.length);
    }
    else{
      setCartCount(0);
    }
  },[isSignIn]);

  
  
 

  return (
    <div className='relative selection:bg-violet-400
    xsm:bg-lime-500
    sm:bg-red-500 
    md:bg-fuchsia-500
    lg:bg-yellow-500
    xl:bg-orange-600
    2xl:bg-blue-500 

    '>
      <div className=' md:w-full md:z-10'>
         <Header isSignIn={isSignIn} setIsSignIn={setIsSignIn} cartItems={cartItems} cartCount={cartCount} setCartCount={setCartCount} />
      </div>
    
      <Routes>
        <Route path="/" element={<Home isSignIn={isSignIn} setIsSignIn={setIsSignIn} signInWelcome={signInWelcome} setSignInWelcome={setSignInWelcome} cartCount={cartCount} setCartItems={setCartItems} />} />
        <Route path="/services" element={<Services isSignIn={isSignIn} setIsSignIn={setIsSignIn} setCartItems={setCartItems} cartItems={cartItems} setCount={setCount} rentalData={rentalData} setRentalData={setRentalData} />} />
        <Route path="/blog" element={<Blog isSignIn={isSignIn} setIsSignIn={setIsSignIn} />} />
        <Route path="/sign-in" element={<SignIn setIsSignIn={setIsSignIn} signInWelcome={signInWelcome} setSignInWelcome={setSignInWelcome} />} />
        <Route path="/reviews" element={<Reviews isSignIn={isSignIn} setIsSignIn={setIsSignIn} />} />
        <Route path="/about-us" element={<AboutUs isSignIn={isSignIn} setIsSignIn={setIsSignIn} />} />
        <Route path="/contact-us" element={<ContactUs isSignIn={isSignIn} setIsSignIn={setIsSignIn} cartItems={cartItems} />} />
        <Route path="/cart" element={<Cart isSignIn={isSignIn} setIsSignIn={setIsSignIn} setCartItems={setCartItems} cartItems={cartItems} count={count} setCount={setCount} cartCount={cartCount} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />} />
        <Route path="/make-payment" element={<MakePayment isSignIn={isSignIn} setIsSignIn={setIsSignIn} setCartItems={setCartItems} totalPrice={totalPrice} />} />
        <Route path="*" element={<NoRoute />} />
      </Routes>
    </div>
  );
}; 
