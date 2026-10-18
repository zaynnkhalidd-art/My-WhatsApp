import React from "react";
import SentMsg from './SentMsg.jsx';
import ReceivedMsg from './ReceivedMsg.jsx';
import {MessageConsole} from './MessageConsole.jsx';
import {MessageConsole2nd} from "./MessagConsole2nd.jsx"
import ChatHeader from './ChatHeader.jsx';
import { useState } from "react";
import {useContext} from "react";
import {DataContext} from "../../DataContext.jsx";

function InsideChat(){

// Boolean for sent and receive differencing
const[msgDiff,setMsgDiff]=useState([]);

// Common counter
const[count,setCount]=useState(-1);
const[countArr,setCountArr]=useState([]);

  // For sending message
  // **********************
const [msg,setMsg]=useState([]);


// Using map to repeat the component
const[mapArr,setMapArr]=useState([])
// COunter for map array
const[mapArrCount,setMapArrCount]=useState(0);

// *****************************

// For Receiving message
// *********************
const [msg2nd,setMsg2nd]=useState([]);

// Using map to repeat the component
const[mapArr2nd,setMapArr2nd]=useState([])
// Counter for map array
const[mapArr2ndCount,setMapArr2ndCount]=useState(0);


// ***********************

// Shared storage with Cheif.jsx
const {message}=useContext(DataContext);
const[dataOfCombStor,setDataOfCombStor]=useState([]);
// console.log(message[0]);

// Second Shared storage with Cheif.jsx
const{messageSec}=useContext(DataContext);

// Machinery for setting letter at the place of image
const[imageLetter,setImageLetter]=useState('');
console.log(imageLetter);
let arrForLetter=message[messageSec]

// Margin top for messages
let marginTop=["mt-[160px]"]

    return(
<>
  

{/* HEADER */}
<ChatHeader imageSrc={dataOfCombStor}
imageLetter={imageLetter} />


{/* <MessageConsole for second user/> */}
<MessageConsole2nd setMsg2nd={setMsg2nd} 
 marginTop="mb-[100px]" rotate="rotate-[180deg]" 
 count={count} setCount={setCount}
 setMapArr2nd={setMapArr2nd} setMapArr2ndCount={setMapArr2ndCount}
 mapArr2ndCount={mapArr2ndCount} 
 setCountArr={setCountArr} setMapArr={setMapArr}
 mapArrCount={mapArrCount} setMapArrCount={setMapArrCount}
 setMsg={setMsg}   setMsgDiff={setMsgDiff}  />

{/* Message console */}
< MessageConsole setMsg={setMsg} 
setMapArr={setMapArr}  setMapArrCount={setMapArrCount}
  mapArrCount={mapArrCount}
count={count} setCount={setCount} setCountArr={setCountArr}
  setMsgDiff={setMsgDiff} 
/>

{/*Main Frame  */}
<div className="flex flex-column 
bg-green-300 min-h-[100vh] w-[100vw]"
onMouseOver={()=>{
     setDataOfCombStor(message[messageSec]);    
     setImageLetter(arrForLetter.accountName[0]);
    
}}>

{/* DIV for  */}


{/* MESSAGES */}
{/* Sending */}
{mapArr.map((e)=>{

   
  if(msgDiff[e]==true){
  return <SentMsg key={e} msg={msg[e]} 
 order={countArr[e]} marginTop={marginTop[e]} />
 }
else{
  return <ReceivedMsg key={e} msg2nd={msg[e]}
 order2nd={countArr[e]} marginTop={marginTop[e]} />

}


})}


{/* { displayMsg && <SentMsg msg={msg} /> } */}
 
{/* <SentMsg/> */}
{/* <SentMsg/>
<SentMsg/>
<SentMsg/>
 <SentMsg/>
<SentMsg/>
<SentMsg/>  */}
 

</div>
  
 {/* Invisible section for solving a bug */}
 <div className={` bg-green-300  
h-[200px] w-[100vw]`}></div>

  </>
    )
}

export default InsideChat;