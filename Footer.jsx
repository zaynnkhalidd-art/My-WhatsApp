import React from "react";
import { useState } from "react";


function Footer({BgClrForFooter,txtClr,chatsSrc,
  updatesSrc,communitiesSrc,callsSrc
}) {
//Use State For buttons background colours
const[btnBgClrChat,setBtnBgClrChat]=useState("");
const[btnBgClrCommunity,setBtnBgClrCommunity]=useState("");
const[btnBgClrUpdate,setBtnBgClrUpdate]=useState("");
const[btnBgClrPhone,setBtnBgClrPhone]=useState("");

// For fonts of name under the button icons
const[fontChat,setFontChat]=useState("font-semibold");
const[fontCommunity,setFontCommunity]=useState("font-semibold");
const[fontUpdate,setFontUpdate]=useState("font-semibold");
const[fontPhone,setFontPhone]=useState("font-semibold");


let Chat=()=>{
  setBtnBgClrCommunity("bg-[transparent] ")
  setBtnBgClrPhone("bg-[transparent]")
  setBtnBgClrUpdate("bg-[transparent]")
  setFontPhone("font-semibold")
  setFontCommunity("font-semibold")
  setFontUpdate("font-semibold")
}
let Update=()=>{
  setBtnBgClrCommunity("bg-[transparent]")
  setBtnBgClrPhone("bg-[transparent]")
  setBtnBgClrChat("bg-[transparent]")
  setFontCommunity("font-semibold")
  setFontPhone("font-semibold")
  setFontChat("font-semibold")
}
let Community=()=>{
  setBtnBgClrChat("bg-[transparent]")
  setBtnBgClrPhone("bg-[transparent]")
  setBtnBgClrUpdate("bg-[transparent]")
  setFontUpdate("font-semibold")
  setFontChat("font-semibold")
  setFontPhone("font-semibold")
}
let Phone=()=>{
  setBtnBgClrCommunity("bg-[transparent]")
  setBtnBgClrChat("bg-[transparent]")
  setBtnBgClrUpdate("bg-[transparent]")
  setFontUpdate("font-semibold")
  setFontCommunity("font-semibold")
  setFontChat("font-semibold")
}


    return(
        <>

  <div className={`fixed z-20 flex justify-evenly
   h-[120px]  w-full
   ${BgClrForFooter} mt-[775px]  `}>

{/* Chat icon */}
<button 
    onClick={()=>{
      setBtnBgClrChat("bg-[lightgreen] animate-[pulse_1s_ease-in-out]")
 Chat()
setFontChat("font-bold")
    }}


className={`h-[70px] w-[140px] lg:w-[200px]
 mt-[20px]
rounded-full bg-[lightgreen] ${btnBgClrChat}
 border-[1px] border-[lightgreen] `}>
  <img src={chatsSrc} alt="" 
  className="h-[80px] ml-[20px] lg:ml-[50px]
   -mt-[3px]"/>
   </button>

{/* Name under chat icon */}
<p className={`absolute text-[20px] ${fontChat}
self-end left-0 ml-[55px] lg:ml-[190px]
sm:ml-[90px]
${txtClr}`}>Chats</p>


{/* Updates icon */}
<button 
        onClick={()=>{
setBtnBgClrUpdate("bg-[lightgreen]  animate-[pulse_1s_ease-in-out]");
Update()
setFontUpdate("font-bold")
        }}

className={`h-[70px] w-[140px] lg:w-[200px]
mt-[20px]
${btnBgClrUpdate} 
rounded-full border-[1px] border-[lightgreen] `}>
  <img src={updatesSrc} alt=""
  className={`h-[60px] ml-[35px] lg:ml-[70px]`} />
 </button>

{/* Name under Update icon */}
<p className={`text-[20px] ${fontUpdate}
self-end absolute mr-[150px] lg:mr-[260px]
sm:mr-[190px]
${txtClr}`}>Updates</p>


{/* Community icon */}
<button 
        onClick={()=>{
          setBtnBgClrCommunity("bg-[lightgreen]  animate-[pulse_1s_ease-in-out]");
      Community()
      setFontCommunity("font-bold")
        }}        
className={`h-[70px] w-[140px] lg:w-[200px]
mt-[20px]
${btnBgClrCommunity}
rounded-full border-[1px] border-[lightgreen]
`}>
  <img src={communitiesSrc} alt=""
  className="h-[140px] -mt-[30px] " />
  </button>

{/* Name under Community icon */}
<p className={`text-[20px] ${fontCommunity}
self-end absolute ml-[150px] lg:ml-[270px]
sm:ml-[190px]
 ${txtClr}`}>Communities</p>

{/* Phone icon */}
<button  
 onClick={()=>{
  setBtnBgClrPhone("bg-[lightgreen]  animate-[pulse_1s_ease-in-out]");
Phone()        
setFontPhone("font-bold")
}}
  
className={`h-[70px] w-[140px] lg:w-[200px]
 mt-[20px]
${btnBgClrPhone}
rounded-full border-[1px] border-[lightgreen]
        `}>
 <img src={callsSrc} alt=" " 
 className={`h-[70px] ml-[8px] lg:ml-[40px]`}/>
 </button>

{/* Name under phone */}
<p className={`absolute text-[20px] ${fontPhone}
self-end right-0 mr-[55px] lg:mr-[190px] sm:mr-[100px]
 ${txtClr} `}>Calls</p>

   </div>
        </>
    )
}

export default Footer;