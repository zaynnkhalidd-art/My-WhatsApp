import React from "react";

function Slider({marginLeft,setSlide}){

    return(<>
    
  <div className={`absolute z-20 h-[100vh] w-[40vw] 
  bg-[white] ${marginLeft} 
  rounded-[30px] 
  transition-ml duration-[0.8s] ease-in-out
  hover:border-2 hover:border-[lightgreen] `}>

<button onClick={()=>{setSlide("ml-[3380px]")}}
className={`h-[30px] w-[30px] 
text-[20px] font-black `}>X</button>

  </div>
    
    
    </>)
}

export default Slider;