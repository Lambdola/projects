import React, { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';

function SalesItemInfo({salesInfo, car1, setCartItems, cartItems}) {
    const [ addedPrompt, setAddedPrompt ] = useState("hidden");

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
        let cartItem;
        let newCartItems;
        let found;
        if (flag === "yes" ) {
        
        for (let items of cartItems) {
            if (items.objectId === salesInfo.objectId) { 
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
        {addedPrompt === "show" && <div className={`${addedPrompt} fixed top-2 w-full text-center bg-green-500 opacity- p-2`}>
            <div className='float-left'>
                <DoneIcon className='text-white' />
            </div>
            <p className='font-medium text-white font-mono'>Item Added Successfully !</p>
        </div>}
    <div className='bg-green-200 w-80 mx-auto mb-10 p-1 pb-3 rounded-lg border-4 border-purple-900'>
        {salesInfo.url ? <img src={salesInfo.url} alt={salesInfo.Year + " " + salesInfo.Make + " " + salesInfo.Model + " " + salesInfo.Category} className='w-80' /> : <img src={car1} alt="Display Car." className='w-80' /> }
        <div className='p-2 text-center space-y-2'>
            {/* <p>{JSON.stringify(cartItems)}</p> */}
            <h2 className='font-bold text-purple-800 text-lg'>{salesInfo.Year + " " + salesInfo.Make + " " + salesInfo.Model + " " + salesInfo.Category}</h2>
            { salesInfo.Transmission && <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '>Transmission: {salesInfo.Transmission}</p>}
            { salesInfo.Color && <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '>Color : {salesInfo.Color}</p>}
            { salesInfo.Mileage && <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '>Mileage : {salesInfo.Mileage} </p>}
            { salesInfo.Price && <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '>Price: {salesInfo.Price} </p>}
            { salesInfo.Seats && <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '>Seats : {salesInfo.Seats} </p>}
            { salesInfo.Bags && <div className='p-1 bg-violet-400 rounded text-white font-bold font-mono '>
                <p>Luggage Capacity :</p>
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
            <button onClick={addToCart} className='text-white font-bold bg-purple-700 p-3 text-lg rounded-xl hover:bg-purple-900 active:bg-green-600'>PURCHASE CAR</button>
        </div>
    </div> </>
    )
}

export default SalesItemInfo;