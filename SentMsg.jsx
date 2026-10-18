import React, { useState } from "react";

function SentMsg({msg,order,marginTop}){
  
  let marginLeft;
 if (msg.length>0 && msg.length<=15) {
  marginLeft="ml-[470px] lg:ml-[1120px]"
 }

 else if (msg.length>15 && msg.length<=25) {
    marginLeft="ml-[400px] lg:ml-[1050px]"
  }
  else if(msg.length>25 && msg.length<=30){
    marginLeft="ml-[350px] lg:ml-[1000px]"
  }
  else if (msg.length>30) {
    marginLeft="ml-[300px] lg:ml-[800px]"
  }

  console.log("order",order);
    return(<>
    
    <div className={`flex flex-column 
   w-max  max-w-[30%]  ${marginLeft}  mb-3
pl-2 pt-1 pr-2    ${marginTop}   
 bg-green-500 drop-shadow-lg
 rounded-xl rounded-tr-none`}
 style={{order:order}} >

<div className="absolute inline border-l-[18px] 
 border-l-green-500 -right-4 -top-0
border-b-[8px] border-b-transparent
drop-shadow-lg  "></div>

<p className={`text-white tracking-wider font-semibold`}>
{msg}
 </p>

 <div className="flex justify-end pr-2">
   <p className={` text-[13px] text-white `}>8:55AM</p>  
 </div>

</div>

    
    </>)
}

export default SentMsg;