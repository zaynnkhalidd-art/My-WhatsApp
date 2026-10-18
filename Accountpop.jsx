import React from "react";
import { useState } from "react";


function Accountpop({setVisible}) {

//  Tailwind stored in variables

// For inputs
let bg= "transition duration-1000 ease-in-out hover:text-[16px] " ;

// For input buttons
let btn="transition duration-1000 ease-in-out hover:rounded-[50%] hover:w-[30px] hover:h-[30px]  "

// For password hide n seek
const[show,setShow]=useState("password");

    return(

    <>
    
    <div className="flex justify-center items-center 
                     flex-wrap justify-evenly
     absolute z-20 h-[250px] 
    w-[250px] sm:w-[350px] lg:w-[450px]
    mt-[310px] ml-[210px] lg:ml-[350px]
    rounded-[50px] bg-[white]
    hover:bg-purple-200 
    transition-all duration-1000 
    ease-in-out"
    >

<input  placeholder="        Enter your name" 
className={`bg-[white] border-purple-200 border-2 
rounded-[50px]  text-[15px] sm:w-[200px]
lg:w-[280px]
 mt-[50px]  ${bg} `} type="text" />  

<button className={`bg-blue-100 rounded-[5px]
 mt-[50px] 
 h-[24px] w-[60px] ${btn} `} > -{'>'} </button>


<input  placeholder="       Enter your email"
 className= {` bg-[white] border-2 border-purple-200
   rounded-[50px]  text-[15px] sm:w-[200px]
   lg:w-[280px]
 mt-[20px]  ${bg} `}  type="text" />  

<button className={`bg-blue-100 rounded-[5px]
 mt-[20px] 
  h-[24px] w-[60px] ${btn}`}  >-{'>'} </button>


<input type={show}
placeholder="      Enter your password"
 className= {` bg-[white] border-2 border-purple-200 
 rounded-[50px]  text-[15px]  sm:w-[200px]
 lg:w-[280px]
 mt-[20px]  ${bg} `}  />  

<button onMouseEnter={()=>{
  setShow("text")
}}
onMouseLeave={()=>{
  setShow("password")
}}
className={`bg-blue-100 rounded-[50%] mt-[20px]
   h-[22px] w-[54px]  border-1 border-blue-100 
  transition duration-1000 ease-in-out
  hover:bg-purple-200 hover:text-purple-200 
   `}>O</button>

<button onClick={()=>{setVisible(false)}}
  className={`bg-[lightgreen] rounded-[50px]
 w-[70px]  border-3 border-[black]  
 sm:mr-[55px] sm:w-[100px] sm:ml-[40px]
 lg:w-[200px]
 transition-all duration-1000
 ease-in-out hover:border-4 hover:border-[purple]
  `} >Submit</button>


    </div>
    
  

    </>

    )
          

}

export default Accountpop;