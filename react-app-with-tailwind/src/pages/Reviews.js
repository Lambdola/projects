import React, { useEffect } from 'react';
import Header from '../components/Header';
import cat from '../cat.jpg';

function Reviews({isSignIn, setIsSignIn}) {
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
        <h1 className='font-bold text-xl text-center'>REVIEWS</h1>
        <div className='border-2 border-black m-2'></div>
        <div className='p-2 m-2 space-y-10'>
            <div className='text-center border-2 border-purple-400 pb-4 mb-4 bg-slate-300 shadow-xl rounded-lg'>
                {/* <div className='h-12 w-12 rounded-full bg-slate-600'></div> */}
                <div className='bg-white mb-3 p-2'>
                     <img src={cat} className='h-12 w-12 rounded-full mx-auto' />
                    <h2 className='font-bold text-slate-700'>John Doe</h2>
                    <p className='text-slate-400 font-bold'>A Single Dad and a Ford User</p>
                </div>
                <p className='p-2'>
                    <em>"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. 
                    If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles."
                    </em>
                </p>
            </div>
            <div className='text-center border-2 border-purple-400 pb-4 mb-4 bg-slate-300 shadow-xl rounded-lg'>
                {/* <div className='h-12 w-12 rounded-full bg-slate-600'></div> */}
                <div className='bg-white mb-3 p-2'>
                     <img src={cat} className='h-12 w-12 rounded-full mx-auto' />
                    <h2 className='font-bold text-slate-700'>John Doe</h2>
                    <p className='text-slate-400 font-bold'>A Single Dad and a Ford User</p>
                </div>
                <p className='p-2'>
                    <em>"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. 
                    If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles."
                    </em>
                </p>
            </div>
            <div className='text-center border-2 border-purple-400 pb-4 mb-4 bg-slate-300 shadow-xl rounded-lg'>
                {/* <div className='h-12 w-12 rounded-full bg-slate-600'></div> */}
                <div className='bg-white mb-3 p-2'>
                     <img src={cat} className='h-12 w-12 rounded-full mx-auto' />
                    <h2 className='font-bold text-slate-700'>John Doe</h2>
                    <p className='text-slate-400 font-bold'>A Single Dad and a Ford User</p>
                </div>
                <p className='p-2'>
                    <em>"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. 
                    If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles."
                    </em>
                </p>
            </div>
            <div className='text-center border-2 border-purple-400 pb-4 mb-4 bg-slate-300 shadow-xl rounded-lg'>
                {/* <div className='h-12 w-12 rounded-full bg-slate-600'></div> */}
                <div className='bg-white mb-3 p-2'>
                     <img src={cat} className='h-12 w-12 rounded-full mx-auto' />
                    <h2 className='font-bold text-slate-700'>John Doe</h2>
                    <p className='text-slate-400 font-bold'>A Single Dad and a Ford User</p>
                </div>
                <p className='p-2'>
                    <em>"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. 
                    If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles."
                    </em>
                </p>
            </div>
        </div>
    </>
  )
}

export default Reviews