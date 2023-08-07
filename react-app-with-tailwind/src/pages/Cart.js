import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import CartInfo from '../components/CartInfo';
// import Remove from '../components/Remove';

function Cart({isSignIn, setIsSignIn, setCartItems, cartItems}) {
    // const [ removePrompt, setRemovePrompt ] = useState("hide");

    useEffect(()=>{
        // alert("cart")
        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        if(user.loggedIn === "true"){
            setIsSignIn(n => true);
            let cart = localStorage.getItem(user.email);
            if (cart !== "undefined") {
                cart = JSON.parse(cart);
                if (cart.length > 0 ){
                    setCartItems(cart);
                }
            }
        }
    },[]);

    // function showPrompt(param) {
    //     // alert("yo")
    //     if (param === "show"){
    //         setRemovePrompt("show");
    //     }
    //     if (param === "hide") {
    //         setRemovePrompt("hide")
    //     }
    // }

    let flag;
    try {
        if (cartItems.length > 0) {
            flag = "yes";
        }
    } catch (error) {
        flag = "no";
    }

    return (
    <>
        <Header isSignIn={isSignIn} />
        {/* <p>{isSignIn ? "true" : "false"}</p> */}
        {/* <p>{cartItems.length}</p> */}
        <h1 className='font-bold text-xl text-center'>CART</h1>
        <div className='border-2 border-black m-2'></div>
        <ul>
            { flag === "yes" ? 
                cartItems.map( items => {
                    if (items.objectId) {
                        // alert("!repair");
                        return <CartInfo key={items.objectId} salesInfo={items} image={items.url} setCartItems={setCartItems} cartItems={cartItems} />
                    } else {
                        return (
                            <>
                                <div className=' w-80 mx-auto mb-10 p-1 pb-3 rounded-lg border-4 border-purple-900'>
                                    {/* {salesInfo.url ? <img src={salesInfo.url} alt={salesInfo.Year + " " + salesInfo.Make + " " + salesInfo.Model + " " + salesInfo.Category} className='w-80' /> : <img src={image} alt="Display Image Car." className='w-80' /> } */}
                                    <p>{items.title}</p>
                                    <p>{items.year + " " + items.make + " " + items.model + " " + items.category}</p>
                                    <p className='border-4 border-purple-900 rounded-xl font-bold text-black p-2 w-20 text-center mx-auto'>{items.tag}</p>
                                    <p>Date: {items.date}<span className='ml-3'>(YYYY-MM-DD)</span></p>
                                    <p>Time: {items.time}</p>
                                    <p>Client Name: {items.name}</p>
                                    <p>Phone: {items.phone}</p>
                                    <p>E-mail: {items.email}</p>
                                    {items.address && <p>Address: {items.address}</p>}
                                    {/* <div>
                                        <Remove showPrompt={showPrompt} />
                                    </div> */}
                                   
                                </div>
                            </>
                        )
                    }
                } ) : 
                <h2>No Items Yet</h2>
            }
        </ul>
    </>
    )
}

export default Cart;