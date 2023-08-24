import React , {useEffect} from 'react';


function AboutUs({ isSignIn, setIsSignIn}) {
  useEffect(()=> {
    window.scrollTo(0, 0);
    let user = localStorage.getItem("user");
    let test;
    try {
      user = JSON.parse(user);
      test = user.loggedIn;
    } catch (error) {
      user = { "loggedIn": "false" };
    }
    if (user.loggedIn === "true"){
      setIsSignIn(true);
    }
  },[]);

  return (
   <>
    <h1 className='font-bold text-xl text-center'>ABOUT US</h1>
    <div className='border-2 border-black m-2'></div>
    
   </>
  );
}

export default AboutUs;