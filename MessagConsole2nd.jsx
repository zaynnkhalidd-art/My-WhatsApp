import React from "react";
import { useState } from "react";
import { useRef } from "react";



function MessageConsole2nd({setMsg2nd,marginTop,
rotate,count,setCount,setMapArr2nd,
mapArr2ndCount,setMapArr2ndCount,setCountArr,setMapArr,
mapArrCount,setMapArrCount,setMsg,setMsgDiff}){
  
  // Message taken from user
const[input2nd,setInput2nd]=useState("");

// Section for button disableness
const[borderColor2nd,setBorderColor2nd]=useState("")
// Reference
const Ref=useRef(null)

return(
    <>
    
   {/* Message section  */}
<div type="text" placeholder="Message"

className={`fixed flex flex-center 
z-20 bg-white w-full bottom-2
 max-w-[550px] max-h-[200px]
ml-[20px]  pt-[2px] 
text-[20px] rounded-xl outline-none
${marginTop}
lg:ml-[400px] `} > 

{/* Message sending button */}
<button  className={` ${rotate}
h-[40px] w-[40px]
 
rounded-full bg-[url('../src/Icons/Messagesent.png')]
 border-2 border-[transparent] border-dotted bg-cover
  bg-top bg-[-17px_2px]
transition-bg duration-[0.5s] ease-in-out
${borderColor2nd}
animate-[pixelGrow_2s_infinite] 
[@keyframes_pixelGrow{from{width:40px}
to{width:60px}}] `}

onClick={()=>{
 if(input2nd.length!=0){
  if(input2nd.length!=1){
    setMapArrCount(prev=>prev+1)
    setMapArr2ndCount(prev=>prev+1);
    setCount(prev=>prev+1)
// Passing values to parent (insideChat) file

//  setMsg2nd(prev2nd=>[...prev2nd,input2nd])  
setMsg(prev2nd=>[...prev2nd,input2nd]) 

// Incrmenting values in mapArr2nd;
setMapArr(prev=>[...prev,mapArrCount])
setMapArr2nd(prev=>[...prev,mapArr2ndCount])
setCountArr(prev=>[...prev,count])

// Boolean for differencing
setMsgDiff(prev=>[...prev,false])

//  Erasing the console
Ref.current.innerText=""
 setInput2nd("")
 
  } 
}

}
}></button> 
  
  {/* For input2nd */}
<div  
contentEditable="true"
ref={Ref}
onInput={(e)=>{
 setInput2nd(e.currentTarget.innerText);
 if (input2nd.length!=1) {
  if (input2nd.length!=0) {
    setBorderColor2nd("hover:border-[green]")
  }
 }
 else{
  setBorderColor2nd("hover:border-[transparent]")
 }
  }}
   className={` w-full 
   outline-none   
  pl-[20px] pr-[20px]
  overflow-hidden `}></div>

</div> 


       
</>
)
}


export {MessageConsole2nd};
