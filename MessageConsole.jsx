import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";



function MessageConsole({setMsg,setMapArr,
  count,setCount,setMapArrCount,mapArrCount,setCountArr,
setMsgDiff}){
  
  


  // Message taken from user
const[input,setInput]=useState("");

// Section for button disableness
const[borderColor,setBorderColor]=useState("")
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
  lg:ml-[400px] `} > 
  
   
{/* For input */}
<div  
contentEditable="true"
ref={Ref}
onInput={(e)=>{
 setInput(e.currentTarget.innerText);
 if (input.length!=1) {
  if (input.length!=0) {
    setBorderColor("hover:border-[green]")
  }
 }
 else{
  setBorderColor("hover:border-[transparent]")
 }
  }}
   className={` w-full 
   outline-none   
  pl-[20px] pr-[20px]
  overflow-hidden `}></div>

{/* Message sending button */}
<button  className={` 
h-[40px] w-[40px]
 
rounded-full bg-[url('../src/Icons/Messagesent.png')]
 border-2 border-[transparent] border-dotted bg-cover
  bg-top bg-[-17px_2px]
transition-bg duration-[0.5s] ease-in-out
${borderColor}
animate-[pixelGrow_2s_infinite] 
[@keyframes_pixelGrow{from{width:40px}
to{width:60px}}] `}

onClick={()=>{
 if(input.length!=0){
  if(input.length!=1){
    setMapArrCount(prev=>prev+1);
 setCount(Prev=>Prev+1)
// Passing values to parent (insideChat) file
 
 setMsg(prev=> [...prev,input])  
 
// Incrementing the value of mapArr[];
setMapArr(Prev=> [...Prev,mapArrCount])
setCountArr(prev=>[...prev,count])

// Boolean for differencing
setMsgDiff(Prev=>[...Prev,true])

//  Erasing the console
Ref.current.innerText=""
 setInput("")
 
  } 
}

}
}></button> 
  

  </div> 


       
        </>
    )
}


export {MessageConsole};
