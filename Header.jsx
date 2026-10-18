import React from "react";
import Slider from './Slider.jsx';
import {useState} from "react";

function Header({setBgClrForFooter,setTxtClr,
    setChatsSrc,setUpdatesSrc,setCommunitiesSrc,
    setCallsSrc, setMainBgClr}) {

    const [slide,setSlide]=useState("ml-[2000px]");
    // bg color
    const[bgColor,setBgColor]=useState("bg-white")
    const[clrThreeDots,setClrThreeDots]=useState("text-black")
// Camera icon during bg change
const[cameraSrc,setCameraSrc]=
useState("../src/Icons/camera-iconw.png");


    // Parent(Cheif.jsx) function for footer's bg 
setBgClrForFooter(bgColor);

    return(
        <>


<div className={`fixed z-20 flex h-[120px]  w-full 
${bgColor} `}>

{/* Camera icon */}
<button className={`absolute  h-[100px] 
w-[100px]  ml-[450px]`}
onClick={()=>{
    if(bgColor=="bg-white"){
setBgColor("bg-black")
setClrThreeDots("text-white")
setTxtClr("text-white")
setCameraSrc("../src/Icons/camera-icon2.png")

setUpdatesSrc("../src/Icons/Update%20icon2.png")
setChatsSrc("../src/Icons/chat%20icon2.png")
setCommunitiesSrc("../src/Icons/community%20icon2.png")
setCallsSrc("../src/Icons/Phone%20icon2.png")

setMainBgClr("bg-black")
}
else{
    setBgColor("bg-white")
    setClrThreeDots("text-black")
    setTxtClr("text-black")
    setCameraSrc("../src/Icons/camera-iconw.png")
    
setUpdatesSrc("../src/Icons/Update%20iconw.png")
setChatsSrc("../src/Icons/chat%20iconw.png")
setCommunitiesSrc("../src/Icons/community%20iconw.png")
setCallsSrc("../src/Icons/Phone%20icon4.png")

setMainBgClr("bg-white")
}
}}>

<img src={cameraSrc} alt="Camera icon"
className={`absolute  self- h-[80px] w[80px] mt-[-58px]
ml-[20px] lg:ml-[500px] lg:h-[100px] lg:w-[100px]
sm:ml-[160px]`} />

 </button>

{/* Three dots */}
<div className={`absolute text-[90px] p-[-300px] 
ml-[580px] lg:ml-[1100px] lg:text-[95px]
sm:ml-[720px]
mt-[-82px] ${clrThreeDots}`} >

   <button onClick={()=>{setSlide("ml-[380px] lg:ml-[900px] sm:ml-[600px]")}} 
   className={`h-[140px]`} > 

   <p className="mb-[-120px]">.</p>
    <p className="mb-[-120px]">.</p>
    <p>.</p> 

    </button>

</div>

{/* Slider on the above three dots */}


<Slider marginLeft={slide} setSlide={setSlide} />

{/* Whatsapp name */}
<h1 className="text-[40px] lg:text-[50px] font-bold 
text-[lightgreen]  " >WhatsApp</h1>


{/* Search bar section */}
<div className=" bg-[lightgrey] self-center h-[40px] w-[360px] 
 rounded-full mt-[60px]  lg:w-[660px] 
 sm:w-[500px]
  ">

<img src="../../src\Icons\search barr.jpg" alt="Search bar"
className="h-[40px] w-[40px] ml-[20px] " />

</div>

<input  type="text" placeholder={`Ask Meta AI or Search`}
className={`absolute bg-[lightgrey] self-center
 w-[300px] h-[40px] mt-[60px] ml-[260px] rounded-full 
 pl-[10px] pr-[5px] outline-none
 text-xl font-semibold  `} />




           </div>

        </>
    )
}

export default Header;