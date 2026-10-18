import React from "react";
import { useState } from "react";


function ChatHeader({imageSrc,imageLetter
}){


// Machinery for Diplaying letter when image is not available
// Background
const [profilePic,setProfilePic]=useState(false);
let [alphaProfBG,setAlphaProfBG]=useState("bg-[lightgreen]");

// Alphabet 

let useImageLetter=<p className=" text-[40px] text-white font-semibold
text-center -mt-[72px] "> {imageLetter}</p>

    return(<>
    
    {/* HEADER */}
    <div className="flex justify-start
 fixed z-10 bg-gray-300
 h-[80px] w-[100vw]">

{/* Image section */}
 <div className={`h-[80px] w-[80px] ${alphaProfBG}  
 rounded-full 
 `}>

<img  src={imageSrc.profilePicSrc}
 
onLoad={
  ()=>{setProfilePic(false)
   setAlphaProfBG("bg-[lightgreen]")  
  }
}
onError={()=>{
  setProfilePic(true);
  setAlphaProfBG("bg-[purple]")
}}
 className={`rounded-full h-[80px] w-[100px]`}

/>

{profilePic && useImageLetter } 


 </div>

{/* Name section */}
<p className={`text-[40px] text-[white] font-semibold
ml-5 `}>
    {imageSrc.accountName}
</p>


 </div>


    
{/* Learn more section */}
<div className=" absolute bg-[gray]  max-w-[50%] 
 mb-[10px] ml-[30vw] mt-[80px]
 text-[16px]  text-[gold]        
 rounded-xl pl-[20px] pr-[10px] pb-2 pt-1
 text-center leading-none ">Messages and calls are end-to-end 
 encrypted. Only people in this chat can read, 
 listen to, or share them. <span className="font-bold 
 transition-text duration-[0.5s] ease-in-out
 hover:text-white "
 onClick={()=>{}}>Learn more</span> </div>

    </>)
}

export default ChatHeader;