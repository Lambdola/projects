import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import CartInfo from '../components/CartInfo';
import Remove from '../components/Remove';
import RemovePrompt from '../components/RemovePrompt';

function Cart({isSignIn, setIsSignIn, setCartItems, cartItems, count, setCount, cartCount}) {
    const [ removePrompt, setRemovePrompt ] = useState("hide");
    const [repairItem, setRepairItem]= useState({});


    function showPrompt(param, items) {
        setRepairItem(n => items);
        if (param === "show"){
            setRemovePrompt("show");
        }
        if (param === "hide") {
            setRemovePrompt("hide")
        }
    }

    useEffect(()=>{
        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        if(user.loggedIn === "true"){
            setIsSignIn(n => true);
            let cart = localStorage.getItem(user.email);
            try {
                cart = JSON.parse(cart);
                if (cart.length > 0){
                    setCartItems(cart);
                }
            } catch (error) {
                setCartItems([])
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
        { removePrompt === "show" && <RemovePrompt setRemovePrompt={setRemovePrompt} cartItems={cartItems} setCartItems={setCartItems} repairItem={repairItem} setRepairItem={setRepairItem} tag="Repairs" /> }
        {/* <Header isSignIn={isSignIn} /> */}
        <h1 className='font-bold text-xl text-center'>CART</h1>
        <div className='border-2 border-black m-2'></div>
        <ul>
            { flag === "yes" && cartItems.length > 0  ? 
                cartItems.map( items => {
                    if (items.objectId) {
                        return <CartInfo key={items.objectId} salesInfo={items} image={items.url} setCartItems={setCartItems} cartItems={cartItems} setCount={setCount} cartCount={cartCount} />
                    } else if (items.title) {
                        return (
                            <>
                                <div className=' w-80 h-[29.5rem] mx-auto mb-10 px-3 py-2 pb-3 rounded-lg border-4 border-purple-900 space-y-2'>
                                    <p className='text-purple-900 text-md text-center font-roboto font-bold -mb-2'>{items.title}</p>
                                    <div className='border-2 border-violet-700 flex'></div>
                                    <p className='font-bold text-purple-800 text-lg text-center'>{items.year + " " + items.make + " " + items.model + " " + items.category}</p>
                                    <p className='border-4 border-purple-900 rounded-xl font-bold text-black p-2 w-20 text-center mx-auto'>{items.tag}</p>
                                    <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Date: </span>{items.date}<span className='ml-3'>(YYYY-MM-DD)</span></p>
                                    <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Time: </span>{items.time}</p>
                                    <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Client Name:</span> {items.name}</p>
                                    <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Phone:</span> {items.phone}</p>
                                    <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>E-mail:</span> {items.email}</p>
                                    <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Location:</span> {items.location}</p>
                                    {items.address && <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Address:</span> {items.address}</p>}
                                    <div className='text-center flex w-40 mx-auto justify-center'>
                                        <Remove showPrompt={showPrompt} items={items} />
                                    </div>
                                   
                                </div>
                            </>
                        )
                    }
                } ) : 
                <h2 className='text-black text-4xl font-bold text-center font-roboto'>No Items Yet</h2>
            }
        </ul>
    </>
    )
}

export default Cart;