import React from "react";
import Accountpop from "./Accountpop";
import { useState } from "react";
import {useNavigate} from "react-router-dom"


 function  Login(){
  
  const [visible,setVisible]= useState(false);
const navigate= useNavigate();
 

    return ( 

   <>
   
   
   <img className="absolute ml-[200px] sm:ml-[300px]
 lg:ml-[500px]   mt-[300px] "
    src="../src/Icons/Whatsapp icon.bmp" 
    alt="Whatsapp icon" />

<h1 className="absolute z-10 text-white text-[50px]
 font-semibold mt-[500px] 
 ml-[140px] sm:ml-[240px] lg:ml-[420px] ">My WhatsApp</h1>

<div className="flex absolute bg-[lightgreen]
 h-[200px] w-[200px] bg-[black] mt-[550px] 
 ml-[200px] sm:ml-[300px] lg:ml-[480px]
 justify-center items-center  ">

<button  onClick={()=>{setVisible(true)}} className="absolute  
bg-[white] mb-[90px] text-[20px] w-[150px] sm:w-[300px]
 rounded-[50px]  ">New account</button>

<button className="absolute bg-[white] mb-[90px]
 self-end text-[20px] w-[150px] sm:w-[300px]
  h-[28px] pb-[15%]  
  rounded-[50px] "
  onClick={()=>{
    navigate("/Cheif");
  }}>Log in</button>


</div>

{visible && <Accountpop setVisible={setVisible} />}

  





<div className="h-[100vh] w-[100vw] 
bg-[lightgreen] "></div> 

      </>

    )


}



export default Login;