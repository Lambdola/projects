// SalesItemInfo is a child component of Services component

import React, { useEffect, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router-dom';
import PopUp from './PopUp';

function SalesItemInfo({salesInfo, car1, setCartItems, cartItems, tag}) {
    const [ addedPrompt, setAddedPrompt ] = useState("hidden");
    let navigate = useNavigate();
    useEffect(()=> {window.scrollTo(0, 0);}, [])

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

    function addToCart() {
        if (user.loggedIn === "false"){
            navigate("/sign-in");
            return;
        }
        let cartItem;
        let newCartItems;
        let found;
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
        } else {
            if (flag === "yes") {
        
                for (let items of cartItems) {
                    if (items.objectId === salesInfo.objectId && items.Tag === "Rentals") { 
                        items = {...items, "Count":items.Count++}
                        newCartItems = [...cartItems];
                        found = "yes"
                        break;
                    }
                    found = "no"
                }
                if (found === "no") {
                    cartItem = {...salesInfo,"Tag": "Rentals", "Count": 1};
                    newCartItems = [...cartItems, cartItem];
                }
                } else {
                    cartItem = {...salesInfo,"Tag": "Rentals", "Count": 1};
                    newCartItems = [cartItem];
                }
        }
        localStorage.setItem(`${user.email}`, JSON.stringify(newCartItems))
        setAddedPrompt("show");
        setCartItems(newCartItems);
    }
    
    if (addedPrompt === "show" ){
        setTimeout(() => {
            setAddedPrompt("hidden")
        }, 1000);
    }

    return (
        <>
        {addedPrompt === "show" && <PopUp addedPrompt={addedPrompt} text="Item Added Successfully !"  />}
    <div className='bg-green-200 w-80 mx-auto mb-10 p-1 pb-3 rounded-lg border-4 border-purple-900'>
        {salesInfo.url ? <img src={salesInfo.url} alt={salesInfo.Year + " " + salesInfo.Make + " " + salesInfo.Model + " " + salesInfo.Category} className='w-80' /> : <img src={car1} alt="Display Car." className='w-80' /> }
        <div className='p-2 text-center space-y-2'>
            <h2 className='font-bold text-purple-800 text-lg'>{salesInfo.Year + " " + salesInfo.Make + " " + salesInfo.Model + " " + salesInfo.Category}</h2>
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
        <div className='w-40 mx-auto text-center mt-5'>
            { (tag === "Sales") ? 
                <button name="sales" onClick={addToCart} className='text-white font-bold bg-purple-700 p-3 text-lg rounded-xl hover:bg-purple-900 active:bg-green-600'>PURCHASE CAR</button>
                : <button name="rentals" onClick={addToCart} className='text-white font-bold bg-purple-700 p-3 text-lg rounded-xl hover:bg-purple-900 active:bg-green-600'>RENT CAR</button>
            }
        </div>
    </div> </>
    )
}

export default SalesItemInfo;