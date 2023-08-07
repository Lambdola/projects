import React, { useState } from 'react';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { red } from '@mui/material/colors';
import RemovePrompt from './RemovePrompt';
import Remove from './Remove';


function CartInfo({salesInfo, image, setCartItems, cartItems}) {
    const [ removePrompt, setRemovePrompt ] = useState("hide");


    function addToCart(param) {
        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        let cartItem;
        let newCartItems;
        for (let items of cartItems) {
            // alert(items)
            if (items.objectId === salesInfo.objectId){
                if (param === "add"){
                    items = {...items, "Count":items.Count++};
                    newCartItems = [...cartItems];
                }
                if (param === "minus"){
                    items = {...items, "Count":items.Count--};
                    newCartItems = [...cartItems];
                }
                localStorage.setItem(`${user.email}`, JSON.stringify(newCartItems));
            }
        }
        setCartItems(newCartItems)
    }

    function showPrompt(param) {
        // alert("yo")
        if (param === "show"){
            setRemovePrompt("show");
        }
        if (param === "hide") {
            setRemovePrompt("hide")
        }
    }

    function handleRemoveItem(){
        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        for (let items of cartItems) {
            // alert(items)
            if (items.objectId === salesInfo.objectId){
                while (salesInfo.Count !== 0 ){
                    addToCart("minus");
                }
            }
        }
        setRemovePrompt("hide");
    }

   

  return (
    <>
    { removePrompt === "show" && <RemovePrompt setRemovePrompt={setRemovePrompt} cartItems={cartItems} setCartItems={setCartItems} salesInfo={salesInfo} /> }
    
    {/* <p>Yes</p> */}
    { salesInfo.Count > 0 && 
    <div className=' w-80 mx-auto mb-10 p-1 pb-3 rounded-lg border-4 border-purple-900'>
        {salesInfo.url ? <img src={salesInfo.url} alt={salesInfo.Year + " " + salesInfo.Make + " " + salesInfo.Model + " " + salesInfo.Category} className='w-80' /> : <img src={image} alt="Display Image Car." className='w-80' /> }
        <div className='p-2 text-center space-y-2'>
            {/* <p>{JSON.stringify(cartItems)}</p> */}
            <h2 className='font-bold text-purple-800 text-lg'>{salesInfo.Year + " " + salesInfo.Make + " " + salesInfo.Model + " " + salesInfo.Category}</h2>
            <p className='border-4 border-purple-900 rounded-xl font-bold text-black p-2 w-16 text-center mx-auto'>{salesInfo.Tag}</p>
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
        <div className='w-full mx-auto text-center mt-5'>
            {
                salesInfo.Count > 0 && 
                <>
                    <Remove showPrompt={showPrompt} />
                    <div className=' flex justify-end mr-2'>
                        <div className=' w-10 flex justify-center'>
                            <button onClick={()=>addToCart("minus")} className='text-white w-full font-bold bg-red-600 p-3 text-lg rounded-xl active:bg-red-400'>-</button>
                        </div>
                        <div className=' w-14 flex justify-center'>
                            <button className='text-black w-full font-bold p-3 text-lg rounded-xl'>{salesInfo.Count}</button>
                        </div>
                        <div className=' w-10 flex justify-center'>
                            <button onClick={()=>addToCart("add")} className='text-white w-full font-bold bg-green-600 p-3 text-lg rounded-xl active:bg-green-400'>+</button>
                        </div>
                    </div>
                </>
            }
        </div>
    </div> } </>
        
  )
}

export default CartInfo;