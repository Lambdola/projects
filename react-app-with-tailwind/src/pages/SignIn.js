import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { NavLink, redirect, useNavigate } from 'react-router-dom';

let hasAccount = "no";

function NewMember({handleLogInDisplay, handleSubmit,details, handleDetailsChange, status, enable, submitCreateAccount}) {
  let navigate = useNavigate();
  
  if (redirect === "yes") {
    setTimeout(() => navigate("/"),2000)
  }
  return (
    <>
      <div className='space-x-4 mb-4'>
        <span className='font-bold text-slate-400'>Already have an account ?</span>
        <NavLink name="logIn" onClick={handleLogInDisplay} className='font-bold text-blue-600 hover:text-blue-800 active:text-green-600'>Log In</NavLink>
      </div>

      <form onSubmit={handleSubmit} className='space-y-5 mb-5'>
        <p></p>
        <div>
          <p>E-MAIL</p>
          <input required name="email" type="email" value={details.email} onChange={handleDetailsChange} placeholder="E-MAIL" autoComplete="off" className='border border-slate-400 rounded py-1 px-3 w-full'/>
        </div>
        <div>
          <p>Confirm E-MAIL</p>
          <input required name="confirmEmail" type="email" value={details.confirmEmail} onChange={handleDetailsChange} placeholder="Confirm E-MAIL"  autoComplete="off" className='border border-slate-400 rounded py-1 px-3 w-full' />
          {(!(status.emailMatch) && <p className='text-sm text-pink-500 font-bold m-1'>Email and Confirm Email doesn't match</p> )}
        </div>
        <div>
           <p>PASSWORD</p>
          <input required name="password" type="password" value={details.password} onChange={handleDetailsChange} placeholder="PASSWORD"  autoComplete="off" className='border border-slate-400 rounded py-1 px-3 w-full' />
        </div>
        <div>
           <p>Confirm Password</p>
          <input required name="confirmPassword" type="password" value={details.confirmPassword} onChange={handleDetailsChange} placeholder="Confirm Password" autoComplete="off" className='border border-slate-400 rounded py-1 px-3 w-full' />
          {(!(status.passwordMatch) && <p className='text-sm text-pink-500 font-bold m-1'>Password and Confirm Password doesn't match</p> )}
        </div>
        <div>
          <p>First Name</p>
          <input required name="firstName" type="text" value={details.firstName} onChange={handleDetailsChange} placeholder="First Name" autoComplete="off" className='border border-slate-400 rounded py-1 px-3 w-full' />
        </div>
        <div>
           <p>Last Name</p>
          <input required name="lastName" type="text" value={details.lastName} onChange={handleDetailsChange} placeholder="Last Name" autoComplete="off" className='border border-slate-400 rounded py-1 px-3 w-full' />
        </div>
        <div>
          <p>Picture</p>
          <input required name="picture" type="file" onChange={handleDetailsChange} />
        </div>
        <div>
           <p>Phone Number</p>
          <input required name="phoneNumber" type="text" value={details.phoneNumber} onChange={handleDetailsChange} placeholder="Phone Number" autoComplete="off" className='border border-slate-400 rounded py-1 px-3 w-full' />
        </div>
        <div>
           <p>Address</p>
          
          <textarea required name="address" value={details.address} onChange={handleDetailsChange} placeholder='Address' autoComplete="off" className='border border-slate-400 rounded py-1 px-3 w-full h-20' />
        </div>
        <div>
           <p>City</p>
          <input required name="city" type="text" value={details.city} onChange={handleDetailsChange} placeholder="City" autoComplete="off" className='border border-slate-400 rounded py-1 px-3 w-full' />
        </div>
        <div>
          <p>Country</p>
          <input required name="country" type="text" value={details.country} onChange={handleDetailsChange} placeholder="Country" autoComplete="off" className='border border-slate-400 rounded py-1 px-3 w-full' />
        </div>
        <div className='text-center'>
          <button type="submit" className={`text-white font-bold bg-purple-700 w-auto p-3 text-lg rounded-xl hover:bg-purple-900 active:bg-green-600`}>Create Account</button>
          </div>
      </form>
    </>
  )
}


function NotNewMember({handleLogInDisplay, handleLogInSubmit, setUserLogInDetails,userLogInDetails, hasAccount, setHasAccount}) {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState("")
  let show = "hidden";

  function handleLogIn(e) {
    setUserLogInDetails({...userLogInDetails, [e.target.name]: e.target.value})
  }


  if (hasAccount === "yes") {
    setTimeout(() => navigate("/"),2000);
  }else if (hasAccount === "no"){
    show = "visible"
  }

  return (
    <>
      <div className=' mb-4 flex flex-wrap gap-2'>
        <span className='font-bold text-slate-400'>Don't have an account ? </span>
        <NavLink name="createAccount" onClick={handleLogInDisplay} className='font-bold text-blue-700 hover:text-blue-800 active:text-green-600'>Create An Account</NavLink>
      </div>
      <div className={`${show} text-pink-500 font-bold text-center bg-pink-200 p-2 rounded-lg mb-5 `} >
        <p>Incorrect Email and/or Password</p>
      </div>
      <div>
        <form onSubmit={handleLogInSubmit} className='space-y-5'>
          <div>
            <p>E-MAIL</p>
            <input name="emai" type="email" value={userLogInDetails.emai} onChange={handleLogIn} placeholder="E-MAIL" autoComplete="off" className='border border-slate-400 rounded py-1 px-3 w-full'/>
          </div>
          <div>
            <p>PASSWORD</p>
            <input name="password" type="password" value={userLogInDetails.password} onChange={handleLogIn} placeholder="PASSWORD"  autoComplete="off" className='border border-slate-400 rounded py-1 px-3 w-full' />
          </div>
          <div className='text-center'>
            <button type="submit" className='text-white font-bold bg-purple-700 w-32 p-3 text-lg rounded-xl hover:bg-purple-900 active:bg-green-600'>Log In</button>
          </div>
        </form>
      </div>
    </>
  )
}

function SignIn({setIsSignIn, signInWelcome, setSignInWelcome}) {
  const [details, setDetails] = useState({
    "email": "",
    "confirmEmail": "",
    "password": "",
    "confirmPassword": "",
    "firstName": "",
    "lastName": "",
    "picture": "",
    "phoneNumber": "",
    "address": "",
    "city": "",
    "country": "",
    "loggedIn": ""
  });
  const [status, setStatus] = useState({
    "emailMatch": true,
    "passwordMatch": true
  });

  const [newMember, setNewMember] = useState(true);
  const [hasAccount, setHasAccount] = useState("");
  const [enable, setEnable] = useState("no");
  const [submitCreateAccount, setSubmitCreateAccount] = useState(0);
  let navigate = useNavigate();
  useEffect(()=> window.scrollTo(0, 0), []);


  function handleLogInDisplay(e) {
    if (e.target.name === "logIn"){
      setNewMember(false)
    }else if (e.target.name === "createAccount"){
      setNewMember(true)
    }
  }

  const [userLogInDetails, setUserLogInDetails ] = useState({
    "emai": "",
    "password": ""
  })

  function hash(value) {
    const KEY = 5;
    let newValue = "";
    for (let char in value) {
      let newChar = char.charCodeAt(0) + KEY ;
      newValue += String.fromCharCode(newChar)
    }
    return newValue;
  }


  function handleDetailsChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "password" || name === "confirmPassword") {
      value = hash(value);
    }
    if (name === "picture") {
      alert(value)
      let path = "C:\\Users\\User.DESKTOP-8DCLUDU\\Pictures\\"
      value = path + value.replace("C:\\fakepath\\","")
      alert(value)
    }
    setDetails({...details,[name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newStatus = {}
    if (details.email !== details.confirmEmail) {
      newStatus.emailMatch = false
    } else { newStatus.emailMatch = true }

    if (details.password !== details.confirmPassword) {
      newStatus.passwordMatch = false
    } else { newStatus.passwordMatch = true }
   
    let newDetails = {...details, "loggedIn": "false"}
    localStorage.setItem("user", JSON.stringify(newDetails))
    let redirect = "yes";
    setEnable(n => setEnable("yes"))
    setStatus(n => setStatus(newStatus))
    setTimeout(()=>navigate("/"),2000)
  }

  
  function handleLogInSubmit(e) {
    e.preventDefault();
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    let updateDetails;
    if ((userLogInDetails.emai === user.email) && (hash(userLogInDetails.password) === user.password)) {
      updateDetails = {...user, "loggedIn": "true"}
      localStorage.setItem("user", JSON.stringify(updateDetails))
      setHasAccount(n => setHasAccount("yes"))
      setIsSignIn(true);
      setSignInWelcome("show");
    } else {
      setHasAccount("no")
    }
  }

  return (
    <>
      {/* <Header /> */}
      <h1 className='font-bold text-xl text-center'>SIGN IN</h1>
      <div className='border-2 border-black m-2'></div>
      <div className=' px-3'>
        { newMember ? 
          < NewMember 
            handleLogInDisplay={handleLogInDisplay} 
            handleSubmit={handleSubmit} 
            details={details} 
            handleDetailsChange={handleDetailsChange}
            status={status}
            redirect={redirect}
            enable={enable}
            submitCreateAccount={submitCreateAccount}
          /> : 
          < NotNewMember 
            handleLogInDisplay={handleLogInDisplay} 
            handleLogInSubmit={handleLogInSubmit}
            userLogInDetails={userLogInDetails}
            setUserLogInDetails={setUserLogInDetails}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount} 
            setSignInWelcome={setSignInWelcome}
          />
        }
      </div>
    </>
  
  )
}

export default SignIn;