import React, { useEffect } from 'react'
import "./Style.css";
import { useState } from 'react';
const UseEffect = () => {
    const [mynum,setmynum]=useState(0);
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
  </div>
   </>
  );
};

export default UseEffect;
