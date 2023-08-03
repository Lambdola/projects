import React , {useEffect} from 'react'
import Header from '../components/Header'

function AboutUs({isSignIn, setIsSignIn}) {
  useEffect(()=> {
    // alert("Reload")
    let user = localStorage.getItem("user");
    user = JSON.parse(user)
    if(user.loggedIn === "true"){
      setIsSignIn(true);
    }
  },[])

  return (
   <>
	<Header isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
	<h1 className='font-bold text-xl text-center'>ABOUT US</h1>
    <div className='border-2 border-black m-2'></div>
   </>
  )
}

export default AboutUs