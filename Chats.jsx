import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Chat({marginTop,marginBottom,accountName,width,
  profilePicSrc,setPassDataNum,lock,setMessageSec,
textColor}){

  // Machinery for Diplaying letter when image is not available

const [profilePic,setProfilePic]=useState(false);
let [alphaProfBG,setAlphaProfBG]=useState("bg-[lightgreen]");


 // String interpolation
  
let imageLetter=accountName[0];

let useImageLetter=<p className="inline text-[40px] text-white font-semibold
pt-[20px]  "> {imageLetter}</p>

// Navigate section
const navigate= useNavigate();


  // *****************************************************************
  // *****************************************************************
    return(
    
    <>
    
    {/* Main Chat Section */}
 <div className={` h-[100px] w-100 
   border-grey-900  border-b-2
    ${marginTop} ${marginBottom} `}
    onClick={()=>{
      
      navigate("/InsideChat");

      // Relate with combine storage between Cheif&InsideChat
        setPassDataNum(lock)
       
    }}
    onMouseEnter={()=>{
      console.log(lock);
      setMessageSec(lock)
    }}>
  

  {/* Profile-picture-holder(circle shape) */}
 <div className={`flex justify-center 
  h-[100px] w-[100px] rounded-full
  mt-[-10px] ${alphaProfBG} `}>

   
{/* Profile-Picture */}
 <img src={profilePicSrc} 
alt=" " 
onLoad={
  ()=>{setProfilePic(false)
   setAlphaProfBG("bg-[lightgreen]")  
  }
}
onError={()=>{
  setProfilePic(true);
  setAlphaProfBG("bg-[purple]")
}}
 className={`rounded-full ${width}`}

/>

{profilePic && useImageLetter } 


 </div>

 {/* Profile-Name */}
 <h2 className={`text-[40px] ${textColor} font-semibold
 ml-[120px] mt-[-100px] `}>{accountName}</h2>



    </div>
    
    
    </>
    

    )
}

export default Chat;

