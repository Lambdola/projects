import React, {useEffect} from 'react';
import Header from '../components/Header';
import CartInfo from '../components/CartInfo';

function Cart({isSignIn, setIsSignIn, setCartItems, cartItems}) {

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
                cartItems.map(items => {
                    return (
                        <CartInfo key={items.objectId} salesInfo={items} image={items.url} setCartItems={setCartItems} cartItems={cartItems}  />
                    )
                }) : 
                <h2>No Items Yet</h2>
            }
        </ul>
    </>
    )
}

export default Cart;