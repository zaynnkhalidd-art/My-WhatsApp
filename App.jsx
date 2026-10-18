import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // This contains your Tailwind imports
import Login from './log in page/Login.jsx'
import Cheif from './Cheif page/Cheif.jsx'
import InsideChat from './Cheif page/Chats/InsideChat.jsx';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {useContext,useState } from 'react';
import {DataContext} from "./DataContext";

function App() {
   
  const[message,setMessage]=useState([]);
   const[messageSec,setMessageSec]=useState(0);
  return ( 
  <>
 <DataContext.Provider  value={{message,setMessage,messageSec,
setMessageSec}} >
 
 <BrowserRouter> 
  
  <Routes>

   <Route path='/' element={<Login/>} />
   <Route path='/Cheif' element={<Cheif/>} />
   <Route path='/InsideChat' element={<InsideChat/>} />

  </Routes>

</BrowserRouter> 


</DataContext.Provider>

  </>   
  )
}

export default App
