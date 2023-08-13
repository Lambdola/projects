import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { purple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

function CartContent({cartCount}) {
    let navigate = useNavigate();
    return (
        <div onClick={()=> {window.scrollTo(0, 0); navigate("/cart")}} className='fixed bottom-8 left-5 h-10 w-10  z-20  box-content '>
            <div className='absolute -z-10 bg-red-600 h-6 w-5 pb-9 text-center left-4 bottom-5 text-white font-bold font-roboto'>
                <p className=''>{cartCount}</p>
            </div>
            <ShoppingCartIcon sx={{fontSize:50, color: purple[800], "&:hover": {color : 'black'} }} />
        </div>
      )
}

export default CartContent;