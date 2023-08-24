// SalesItemInfo is a child component of Services component

import React, { useEffect, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router-dom';
import PopUp from './PopUp';
import RentForm from './RentForm';

function SalesItemInfo({salesInfo, car1, setCartItems, cartItems, tag}) {
    const [ addedPrompt, setAddedPrompt ] = useState("hidden");
    const [rentForm, setRentForm] = useState("hideRentFormPrompt");
    const [rentFormState, setRentFormState] = useState("");
    const [rentalData, setRentalData] = useState({
        "pickUp" : "",
        "return" : "",
        "pickUpDate" : "",
        "returnDate": ""
      });
    let navigate = useNavigate();
    useEffect(()=> {
        window.scrollTo(0, 0);
        // alert("SalesItemInfo");
        setRentFormState("")
    }, [addedPrompt]);

    let user = localStorage.getItem("user");
    user = JSON.parse(user); 

    let flag;
    try {
        if (cartItems.length > 0) {
            flag = "yes";
        }
    } catch (error) {
        flag = "no";
        
    }

    let newCartItems, found, cartItem;
    function addToCart() {
        if (user.loggedIn === "false"){
            navigate("/sign-in");
            return;
        }
        // let cartItem;
        // let newCartItems;
        // let found;
        if (tag === "Sales") {
            if (flag === "yes") {
        
            for (let items of cartItems) {
                if (items.objectId === salesInfo.objectId && items.Tag === "Sales") {
                    items = {...items, "Count":items.Count++}
                    newCartItems = [...cartItems];
                    found = "yes"
                    break;
                }
                found = "no"
            }
            if (found === "no") {
                cartItem = {...salesInfo,"Tag": "Sales", "Count": 1};
                newCartItems = [...cartItems, cartItem];
            }
            } else {
                cartItem = {...salesInfo,"Tag": "Sales", "Count": 1};
                newCartItems = [cartItem];
            }
            localStorage.setItem(`${user.email}`, JSON.stringify(newCartItems));
            setCartItems(newCartItems);
            setAddedPrompt("show");
        } else {
            setRentFormState("open");
            setRentForm("showRentFormPrompt");
            // let wait, id, formState;
            // setInterval(() => {
            //     wait = new Promise((resolve, reject) => {
            //         if (rentFormState === "close"){
            //             resolve("Close")
            //         }
            //         clearInterval()
            //     })
            //     wait.then((value)=>alert(value),(value)=>alert(value));
            // }, 500);
        }
    }

    if ( rentalData.pickUp.length > 0) {
        // setRentFormState("");
        if (flag === "yes" && rentForm === "hideRentFormPrompt" ) {
            // alert("SII");
            for (let items of cartItems) {
                if (items.objectId === salesInfo.objectId && items.Tag === "Rentals") { 
                    //test-site here 
                    items = {...items,...rentalData, "Count":items.Count++};
                    // items ={...items, ...rentalData}
                    // alert(JSON.stringify(rentalData));
                    newCartItems = [...cartItems];
                    found = "yes";
                    break;
                }
                found = "no";
            }
            if (found === "no") {
                // alert("STT")
                //test-sitee here
                cartItem = {...salesInfo,"Tag": "Rentals", "Count": 1};
                newCartItems = [...cartItems, ...rentalData, cartItem];
            }
            // setAddedPrompt("show");
            localStorage.setItem(`${user.email}`, JSON.stringify(newCartItems));
            setCartItems(newCartItems);
            setAddedPrompt("show");
            setRentalData({
                "pickUp" : "",
                "return" : "",
                "pickUpDate" : "",
                "returnDate": ""
            });
        } else if (flag === "no" && rentForm === "hideRentFormPrompt" ) {
            //test-site here
            cartItem = {...salesInfo, ...rentalData, "Tag": "Rentals", "Count": 1};
            newCartItems = [cartItem];
            // setAddedPrompt("show");
            localStorage.setItem(`${user.email}`, JSON.stringify(newCartItems));
            setCartItems(newCartItems);
            setAddedPrompt("show");
            setRentalData({
                "pickUp" : "",
                "return" : "",
                "pickUpDate" : "",
                "returnDate": ""
            });
        }
    }

    
    if (addedPrompt === "show" ){
        setTimeout(() => {
            setAddedPrompt("hidden");
        }, 1000);
    }

    return (
        <>
        {/* <p>{JSON.stringify(rentalData)}</p> */}
        {/* <div> */}
            {rentForm === "showRentFormPrompt" && <RentForm setRentFormState={setRentFormState} newCartItems={newCartItems} rentalData={rentalData} setRentalData={setRentalData} setRentForm={setRentForm} setAddedPrompt={setAddedPrompt} cartItems={cartItems} salesInfo={salesInfo} setCartItems={setCartItems} />}
        {/* </div> */}
        
        {addedPrompt === "show" && <PopUp addedPrompt={addedPrompt} text="Item Added Successfully !"  />}
        <div className='bg-green-200 w-80 mx-auto mb-20 p-1 pb-3 rounded-lg border-4 border-purple-900 md:w-[25rem]'>
            {salesInfo.url ? <img src={salesInfo.url} alt={salesInfo.Year + " " + salesInfo.Make + " " + salesInfo.Model + " " + salesInfo.Category} className='w-80 md:w-full' /> : <img src={car1} alt="Display Car." className='w-80 md:w-full' /> }
            <div className='p-2 text-center space-y-2 md:text-2xl'>
                <h2 className='font-bold text-purple-800 text-lg md:text-2xl'>{salesInfo.Year + " " + salesInfo.Make + " " + salesInfo.Model + " " + salesInfo.Category}</h2>
                { salesInfo.Transmission && <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Transmission: </span>{salesInfo.Transmission}</p>}
                { salesInfo.Color && <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Color :</span> {salesInfo.Color}</p>}
                { salesInfo.Mileage && <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Mileage :</span> {salesInfo.Mileage} </p>}
                { salesInfo.Price && <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Price:</span> {salesInfo.Price} </p>}
                { salesInfo.Seats && <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Seats :</span> {salesInfo.Seats} </p>}
                { salesInfo.Bags && <div className='p-1 bg-violet-400 rounded text-white font-bold font-mono '>
                    <p className='text-purple-900'>Luggage Capacity :</p>
                    <div className=''>
                        <p>{salesInfo.Bags.Large + `${salesInfo.Bags.Large > 1 ? " Large Bags" : " Large Bag" }`}</p>
                        <p>{salesInfo.Bags.Small + `${salesInfo.Bags.Small > 1 ? " Small Bags" : " Small Bag" }`}</p>
                    </div>
                </div>}
                <div>
                    {salesInfo.Recommendation && <p className='p-1 bg-violet-400 rounded text-red-600 font-bold font-mono '>{salesInfo.Recommendation} </p> }
                </div>
            </div>
            <div className='w-40 mx-auto text-center mt-5 md:w-full md:p-3 md:text-2xl'>
                { (tag === "Sales") ? 
                    <button name="sales" onClick={addToCart} className='text-white font-bold bg-purple-700 p-3 text-lg rounded-xl hover:bg-purple-900 active:bg-green-600 md:w-full'>PURCHASE CAR</button>
                    : <button name="rentals" onClick={addToCart} className='text-white font-bold bg-purple-700 p-3 text-lg rounded-xl hover:bg-purple-900 active:bg-green-600 md:w-full'>RENT CAR</button>
                }
            </div>
            <p className='my-2 mx-1 p-2 bg-red-300 text-center text-red-800 font-bold md:text-lg'>You can come to the store to check out the car before proceeding to make payment.</p>
        </div> 
        </>
    )
}

export default SalesItemInfo;