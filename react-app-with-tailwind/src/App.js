import { Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import cat from './cat.jpg'
// import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import SignIn from './pages/SignIn';
import Reviews from './pages/Reviews';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';


// xsm:bg-slate-900 
// sm:bg-red-500 
// md:bg-orange-500 
// lg:bg-yellow-500 
// xl:bg-green-500 
// 2xl:bg-blue-500">


export default function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [cartItems, setCartItems] = useState([])

  // useEffect(()=>{
  //   alert("Reload")
  //   let user = localStorage.getItem("user");
  //   let cart, email;
  //   user = JSON.parse(user)
  //   if(user){
  //     email = user.email;
  //     cart = localStorage.getItem(email);
  //     cart = JSON.parse(cart);
  //     setCartItems(n => setCartItems(cart));
  //     setIsSignIn(true);
  //     // setCartItems(cart);

  //   }
  // },[])

  return (
    <>
      {/* <Home /> */}
      {/* <Services /> */}
      <Routes>
        <Route path="/" element={<Home isSignIn={isSignIn} setIsSignIn={setIsSignIn} />} />
        <Route path="/services" element={<Services isSignIn={isSignIn} setIsSignIn={setIsSignIn} setCartItems={setCartItems} cartItems={cartItems} />} />
        <Route path="/blog" element={<Blog isSignIn={isSignIn} setIsSignIn={setIsSignIn} />} />
        <Route path="/sign-in" element={<SignIn setIsSignIn={setIsSignIn} />} />
        <Route path="/reviews" element={<Reviews isSignIn={isSignIn} setIsSignIn={setIsSignIn} />} />
        <Route path="/about-us" element={<AboutUs isSignIn={isSignIn} setIsSignIn={setIsSignIn} />} />
        <Route path="/contact-us" element={<ContactUs isSignIn={isSignIn} setIsSignIn={setIsSignIn} cartItems={cartItems} />} />
        <Route path="/cart" element={<Cart isSignIn={isSignIn} setIsSignIn={setIsSignIn} setCartItems={setCartItems} cartItems={cartItems}  />} />
      </Routes>
    </>
  );
}; 
