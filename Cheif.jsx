import React, { useState } from "react";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Chat from './Chats/Chats.jsx';
import {useContext,useEffect} from "react";
import {DataContext} from "../DataContext.jsx";

function Cheif() {


let alphabetProfile= <div className="h-[100px] w-[100px] 
rounded-full mt-[-10px] bg-[green]">  </div>

// Array for mapping
let chatMapArr= new Array(10);
for (let i=0; i<=10; i++) {
   chatMapArr[i]=1;
  
}

// Shared storage with insideChat.jsx
const {setMessage} = useContext(DataContext);

// Second shared storage with insideChat.jsx
const{setMessageSec}=useContext(DataContext);

// Txt color while bg change
const[txtClr,setTxtClr]=useState("text-black");

 let chats=[
  { id:0,
    marginTop:"mt-[140px]",
   profilePicSrc:"../src/Icons/camera-iconw.png",
    accountName:"Camera",
    textColor:txtClr
  },
  { id:1,
    marginTop:"mt-[20px]",
    profilePicSrc:"../src/Icons/red diamond.png",
     accountName:"Red diamond",
     textColor:txtClr
  },
  { id:2,
    marginTop:"mt-[20px]",
    profilePicSrc:"../src/Icons/shazam.png",
     accountName:"Shazam",
     textColor:txtClr
  },
  {id:3,
    marginTop:"mt-[20px]",
    profilePicSrc:"../src/Icons/Superman.png",
     accountName:"Superman",
     textColor:txtClr
  },
  {id:4,
    marginTop:"mt-[20px]",
    profilePicSrc:"../src/Icons/triangle.png",
     accountName:"Triangle",
     textColor:txtClr
  },
  {id:5,
    marginTop:"mt-[20px]",
    profilePicSrc:"../src/Icons/IMG_20260326_084332_436.jpg",
     accountName:"Zain",
     width:"w-[100px]",
     textColor:txtClr
  },
  {id:6,
    marginTop:"mt-[20px]",
    profilePicSrc:"",
     accountName:"Atif",
     textColor:txtClr
  },
  { id:7,
    marginTop:"mt-[20px]",
    profilePicSrc:"",
     accountName:"Nauman",
     textColor:txtClr
  },
  { id:8,
    marginTop:"mt-[20px]",
    profilePicSrc:"../src/Icons/Whatsapp icon.bmp",
     accountName:"WhatsApp",
     textColor:txtClr
  },
  {id:9,
    marginTop:"mt-[20px]",
    profilePicSrc:"",
     accountName:"Zain",
     textColor:txtClr
  },
  {id:10,
    marginTop:"mt-[20px]",
    profilePicSrc:"",
     accountName:"Zain",
     textColor:txtClr
  },
  {id:11,
    marginTop:"mt-[20px]",
    profilePicSrc:"",
     accountName:"Zain",
     textColor:txtClr
  },
  {id:12,
    marginTop:"mt-[20px]",
    profilePicSrc:"",
     accountName:"Zain",
     marginBottom:"mb-[400px]",
     textColor:txtClr  },
];

const[passDataNum,setPassDataNum]=useState(0);
// Passing the data from shared storage
useEffect(()=>{
  setMessage(chats);

}, []);

// Bg color
const[BgClrForFooter,setBgClrForFooter]=useState("");

// Icons change while bg change
const[chatsSrc,setChatsSrc]=useState("../src/Icons/chat%20iconw.png")
const[updatesSrc,setUpdatesSrc]=useState("../src/Icons/Update%20iconw.png")
const[communitiesSrc,setCommunitiesSrc]=useState("../src/Icons/community%20iconw.png")
const[callsSrc,setCallsSrc]=useState("../src/Icons/Phone%20icon4.png")

// Overall bg color 
const[mainBgClr,setMainBgClr]=useState("bg-white");

  return(

<>
{/* Background-page */}
<div className={`flex flex-wrap  
 ${mainBgClr} h-100 w-100 `}>

{/* Header */}
<Header setBgClrForFooter={setBgClrForFooter} 
setTxtClr={setTxtClr} setChatsSrc={setChatsSrc}
setUpdatesSrc={setUpdatesSrc} setCommunitiesSrc={setCommunitiesSrc}
setCallsSrc={setCallsSrc} setMainBgClr={setMainBgClr}
/>

{
  chats.map((chat)=>{
    return <Chat lock={chat.id} 
    marginTop={chat.marginTop}
    marginBottom={chat.marginBottom}
    profilePicSrc={chat.profilePicSrc} 
    accountName={chat.accountName}
     alphabetProfile={alphabetProfile}
     setPassDataNum={setPassDataNum}
     setMessageSec={setMessageSec}
     width={chat.width}
     textColor={chat.textColor}/>
  })
}




<h3 className={`text-[white] text-[15px] font-semibold
 mt-[-380px] ml-[150px] ${txtClr}
`}>Your all personal messages are end-to-end ecrypt</h3>

{/* Footer */}
<Footer BgClrForFooter={BgClrForFooter} txtClr={txtClr} chatsSrc={chatsSrc} updatesSrc={updatesSrc}
communitiesSrc={communitiesSrc} callsSrc={callsSrc} 
/>


</div>
</>

  )

}

export default Cheif;