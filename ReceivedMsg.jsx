import React from "react";
import { useState } from "react";

function ReceivedMsg({msg2nd,order2nd,marginTop}){


console.log("order2nd",order2nd);
    return(<>
    
    <div className={`relative  max-w-[40%] w-max     
 mb-3  ml-5 pl-2 pt-1 pr-2 
 bg-[gray] drop-shadow-lg    ${marginTop}  
 rounded-xl rounded-tl-none`}
 style={{order:order2nd}} >


<div className="absolute border-r-[18px] 
 border-r-[gray] -left-4 -top-0
border-b-[8px] border-b-transparent
drop-shadow-lg  "></div>

<p className={`tracking-wider font-semibold
 text-white`}>
{msg2nd}

</p>

<div className="flex justify-end pr-2">
   <p className={` text-white text-[13px] `}>8:55AM</p> 
</div>

</div>
    
    </>)
}

export default ReceivedMsg;