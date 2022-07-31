import React from 'react'
import { useEffect } from 'react';
import "./Style.css";
import { useState } from 'react';
const UseState = () => {
const [mynum,setmynum]=useState(10);
useEffect(()=>{
    document.title= `Chats(${mynum})`;
});
  return (
      
    <>
    <div className="center_div">
    <p>{mynum}</p>
    <div class="button2" onClick={()=> setmynum(mynum+1) }>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      INCR
    </div>
    <div class="button2" onClick={()=> mynum>0? setmynum(mynum-1) :setmynum(0) }>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      DECR
    </div>
  </div>
  </>
  )
}

export default UseState
