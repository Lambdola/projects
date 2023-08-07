import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

function RemovePrompt({setRemovePrompt, cartItems, setCartItems, salesInfo}) {

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
    <div className='fixed top-0 bg-slate-900 opacity-50 h-full w-full'></div>
    <div className='fixed bg-white w-[21.5rem] h-40 top-1/3 ml-2 rounded-xl p-3 shadow-lg'>
        <div className=''>
            <div className='float-right hover:bg-gray-700 rounded-full'>
                <CloseIcon onClick={()=> showPrompt("hide")} sx={{fontSize:30}} />
            </div>
            <p className='font-bold text-lg'>Remove from cart</p>
            <p className='text-sm font-medium mt-3'>Do you really want to remove this item from cart?</p>
            <div className='bg-purple-700 text-center p-3 mt-5 shadow-lg hover:bg-purple-900 active:bg-green-600'>
                <div className='float-left'>
                    <DeleteForeverOutlinedIcon sx={{color:'white', fontSize: 30}} />
                </div>
                <div>
                    <button onClick={handleRemoveItem} className='text-white font-semibold'>REMOVE ITEM</button>
                </div>
            </div>
        </div>
    </div></>
    )
}

export default RemovePrompt;