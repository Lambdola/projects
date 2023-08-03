import React, {useEffect} from 'react';
import Header from '../components/Header';

function Blog({isSignIn, setIsSignIn}) {
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
        <Header isSignIn={isSignIn} />
        <h1 className='font-bold text-xl text-center'>BLOG POSTS</h1>
        <div className='border-2 border-black m-2'></div>
        <div className='m-2 space-y-10'>
            <div className='border-l-4 border-purple-500 p-2 mb-14'>
                <h2 className='font-bold text-lg'>How To Take Care Of Your Car Tires</h2>
                <p>I am a student of the University of Nigeria, located in Nigeria, Africa. I major in Engineering; Agricultural and Environmental Enginnering A.K.A. Agric Engineering/AEE, which is under the Faculty of Technology that has a total of eight (8) departments under it; AEE inclusive</p>
                <p className='float-right'>- Written By John Doe</p>
            </div>
            <div className='border-l-4 border-purple-500 p-2 mb-14'>
                <h2 className='font-bold text-lg'>How To Know And Check Your Oil Level</h2>
                <p>I am a student of the University of Nigeria, located in Nigeria, Africa. I major in Engineering; Agricultural and Environmental Enginnering A.K.A. Agric Engineering/AEE, which is under the Faculty of Technology that has a total of eight (8) departments under it; AEE inclusive</p>
                <p className='float-right'>- Written By John Doe</p>
            </div>
            <div className='border-l-4 border-purple-500 p-2 mb-14'>
                <h2 className='font-bold text-lg'>Tips To Know And Check Out For When Buying A Car</h2>
                <p>I am a student of the University of Nigeria, located in Nigeria, Africa. I major in Engineering; Agricultural and Environmental Enginnering A.K.A. Agric Engineering/AEE, which is under the Faculty of Technology that has a total of eight (8) departments under it; AEE inclusive</p>
                <p className='float-right'>- Written By John Doe</p>
            </div>
        </div>
    </>
    )
    }

export default Blog