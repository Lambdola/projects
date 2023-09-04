import React, { useEffect, useState } from 'react';
import { NavLink, redirect, useNavigate } from 'react-router-dom';


function NewMember({handleLogInDisplay, handleSubmit, details, handleDetailsChange, status, enable, hash}) {
  let navigate = useNavigate();
  const [show, setShow] = useState("hidden");

  useEffect(()=>{ 
    window.scrollTo(0, 0);
  }, []);

 
  async function signUpApiCall(e, param){
    e.preventDefault();
  

    if ((details.email === details.confirmEmail) && (details.password === details.confirmPassword)) {
      const response = await fetch("/api/signUp", {
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({...param,"password": hash(details.password), "confirmPassword": hash(details.confirmPassword), "loggedIn": "false"})
      })

      const data = await response.json();
      if (data.message === "Already Exists"){
        setShow("visible");
      } else{
        setShow("hidden");
        handleSubmit();
        setTimeout(() => {
          navigate("/")
        }, 1000);
      }
    } else{
      setShow("hidden");
      handleSubmit();
    }
  }
  

  return (
    <div className=' md:w-2/3 md:mx-auto md:text-xl'>
      <div className='space-x-4 mb-4'>
        <span className='font-bold text-slate-400'>Already have an account ?</span>
        <NavLink name="logIn" onClick={handleLogInDisplay} className='font-bold text-blue-600 hover:text-blue-800 active:text-green-600'>Log In</NavLink>
      </div>
      <div className={`${show} text-pink-500 font-bold text-center bg-pink-200 p-2 rounded-lg mb-5 `} >
        <p>This email already exists </p>
      </div>

      <form className='space-y-5 mb-5'>
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
           <p>Phone Number</p>
          <input required maxLength={11} name="phoneNumber" type="text" value={details.phoneNumber} onChange={handleDetailsChange} placeholder="Phone Number" autoComplete="off" className='border border-slate-400 rounded py-1 px-3 w-full' />
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
          <button onClick={(e)=> {signUpApiCall(e, details)}}   type="submit" className={`text-white font-bold bg-purple-700 w-auto p-3 text-lg rounded-xl hover:bg-purple-900 active:bg-green-600`}>Create Account</button>
        </div>
      </form>
    </div>
  );
}


function NotNewMember({handleLogInDisplay, handleLogInSubmit, setUserLogInDetails,userLogInDetails, hasAccount, setHasAccount, setIsSignIn, logInApiCall}) {
  const navigate = useNavigate();
  let show = "hidden";

  function handleLogIn(e) {
    setUserLogInDetails({...userLogInDetails, [e.target.name]: e.target.value});
  }




  if (hasAccount === "yes") {
    setTimeout(() => navigate("/"),1000);
  }else if (hasAccount === "no"){
    show = "visible";
  }

  return (
    <div className=' md:w-2/3 md:mx-auto md:text-xl'>
      <div className=' mb-4 flex flex-wrap gap-2'>
        <span className='font-bold text-slate-400'>Don't have an account ? </span>
        <NavLink name="createAccount" onClick={handleLogInDisplay} className='font-bold text-blue-700 hover:text-blue-800 active:text-green-600'>Create An Account</NavLink>
      </div>
      <div className={`${show} text-pink-500 font-bold text-center bg-pink-200 p-2 rounded-lg mb-5 `} >
        <p>Incorrect Email and/or Password</p>
      </div>
      <div>
        <form onSubmit={logInApiCall} className='space-y-5'>
          <div>
            <p>E-MAIL</p>
            <input name="emai" required type="email" value={userLogInDetails.emai} onChange={handleLogIn} placeholder="E-MAIL" autoComplete="off" className='border border-slate-400 rounded py-1 px-3 w-full'/>
          </div>
          <div>
            <p>PASSWORD</p>
            <input name="password" required type="password" value={userLogInDetails.password} onChange={handleLogIn} placeholder="PASSWORD"  autoComplete="off" className='border border-slate-400 rounded py-1 px-3 w-full' />
          </div>
          <div className='text-center'>
            <button type="submit" className='text-white font-bold bg-purple-700 w-32 p-3 text-lg rounded-xl hover:bg-purple-900 active:bg-green-600'>Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function SignIn({setIsSignIn, signInWelcome, setSignInWelcome}) {
  const [details, setDetails] = useState({
    "email": "",
    "confirmEmail": "",
    "password": "",
    "confirmPassword": "",
    "firstName": "",
    "lastName": "",
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

  let navigate = useNavigate();
  useEffect(()=>{ 
    window.scrollTo(0, 0);
  }, []);


  function handleLogInDisplay(e) {
    if (e.target.name === "logIn"){
      setNewMember(false);
    }else if (e.target.name === "createAccount"){
      setNewMember(true);
    }
  }

  const [userLogInDetails, setUserLogInDetails ] = useState({
    "emai": "",
    "password": ""
  });

  function hash(value) {
    const KEY = 5;
    let newValue = "";
    for (let char of value) {
      let newChar = char.charCodeAt(0) + KEY ;
      newValue += String.fromCharCode(newChar);
    }
    return "ssh:Yjipojcdvuihweyu23o" + newValue + "iwwiHGYOFRThfTTF";
  }


  function handleDetailsChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setDetails({...details,[name]: value });
  }


  function handleSubmit() {

    let newStatus = {};
    if (details.email !== details.confirmEmail) {
      newStatus.emailMatch = false;
    } else { 
      newStatus.emailMatch = true;
    }

    if (details.password !== details.confirmPassword) {
      newStatus.passwordMatch = false;
    } else { 
      newStatus.passwordMatch = true; 
    }
    
    let newDetails = {...details,"password": hash(details.password), "confirmPassword": hash(details.confirmPassword), "loggedIn": "false"};
    localStorage.setItem("user", JSON.stringify(newDetails));
    setEnable(n => setEnable("yes"));
    setStatus(n => setStatus(newStatus));
  }

  
  async function logInApiCall(e) {
    e.preventDefault();
    const response = await fetch("/api/logIn", {
      method: "POST",
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({...userLogInDetails, "password": hash(userLogInDetails.password)})
    })
    
    let data = response.json().then(
      (resolve)=> {
        let updateDetails = {...resolve, "loggedIn": "true"};
        localStorage.setItem("user", JSON.stringify(updateDetails));
        setHasAccount("yes");
        setIsSignIn(true);
        setSignInWelcome("show");
      },
      (rejected) => {
        localStorage.setItem("user", JSON.stringify({ "loggedIn": "false" }));
        setHasAccount("no");
      }
    )
  }

  return (
    <>
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
            hash={hash}
            enable={enable}
          /> : 
          < NotNewMember 
            handleLogInDisplay={handleLogInDisplay} 
            
            userLogInDetails={userLogInDetails}
            setUserLogInDetails={setUserLogInDetails}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount} 
            setSignInWelcome={setSignInWelcome}
            setIsSignIn={setIsSignIn}
            logInApiCall={logInApiCall}
          />
        }
      </div>
    </>
  
  )
}

export default SignIn;