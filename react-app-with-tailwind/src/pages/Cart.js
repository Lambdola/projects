import React, {useEffect} from 'react';
// import SalesItemInfo from '../components/SalesItemInfo';
import Header from '../components/Header';
import CartInfo from '../components/CartInfo';

function Cart({isSignIn, setIsSignIn, setCartItems, cartItems}) {

    useEffect(()=>{
        // alert("Reload")
        let user = localStorage.getItem("user");
        let cart, email;
        user = JSON.parse(user)
        if(user.loggedIn === "true"){
          email = user.email;
          cart = localStorage.getItem(email);
          cart = JSON.parse(cart);
          setCartItems(n => setCartItems(cart));
          setIsSignIn(true);
          // setCartItems(cart);
    
        }
      },[])

    // function addToCart(param) {
    //     let cartItem;
    //     let newCartItems;
        // alert("yo")
        // if (param) {
            // alert("fill")
            // for (let items of cartItems) {
            //     // alert(items)
            //     if (items.objectId === salesInfo.objectId){
            //         if (param === "add"){
            //             items = {...items, "Count":items.Count++}
            //             newCartItems = [...cartItems];
            //         }
            //         if (param === "minus"){
            //             items = {...items, "Count":items.Count++}
            //             newCartItems = [...cartItems];
            //         }
                    // alert("update")
                    // items = {...items, "Count":items.Count++}
                    // newCartItems = [...cartItems];
                // } else {
                    // alert("add")
                    // cartItem = {...salesInfo,"Tag": "Sales", "Count": 1};
                    // newCartItems = [...cartItems, cartItem];
            //     }
            // }
            
        // } else{
        //     // alert("empty")
        //     cartItem = {...salesInfo,"Tag": "Sales", "Count": 1};
        //     newCartItems = [...cartItems, cartItem];
        // }
        // if (!cartItems) {
        //     cartItem = {...salesInfo,"Tag": "Sales", "Count": 1};
        //     newCartItems = [...cartItems, cartItem];
        // }
        // for (let items in cartItems) {
        //     alert(items)
        //     if (items.objectId === salesInfo.objectId){
        //         items = {...items, "Count":items.Count++}
        //         newCartItems = [...cartItems, items];
        //     } else {
        //         cartItem = {...salesInfo,"Tag": "Sales", "Count": 1};
        //         newCartItems = [...cartItems, cartItem];
        //     }
        // }
        // setCartItems(newCartItems)
    // }

    return (
    <>
        <Header isSignIn={isSignIn} />
        {/* <Header isSignIn={isSignIn} /> */}
        <p>{isSignIn ? "true" : "false"}</p>
        <h1 className='font-bold text-xl text-center'>CART</h1>
        <div className='border-2 border-black m-2'></div>
        {/* <p>{JSON.stringify(cartItems)}</p> */}
        <ul>
            { cartItems ? 
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