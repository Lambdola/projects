import React from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { purple } from '@mui/material/colors';

function BackToTop() {
  return (
    <div onClick={()=> window.scrollTo(0, 0)} className='fixed bottom-4 right-5 h-10 w-10 bg-white z-20 rounded-full hover:bg-purple-600 border-2 border-purple-900 box-content '>
        <ArrowCircleUpIcon sx={{fontSize:40, color: purple[800], "&:hover": {color : 'white'} }} />
    </div>
  )
}

export default BackToTop;