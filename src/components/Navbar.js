import React from 'react';
import Arrow from '../arrow.png';
import Background from '../MIMYK LOGO_2019 - white version 2.png';
import Search from '../Vector (1).png';
import Plus from '../Vector (2).png';
import Upload from '../Vector (3).png';
import Info from '../Vector (4).png';
import Profile from '../Vector (5).png';


const nav={

position: "absolute",
width: "1920px",
height: "53px",
left: "0px",
top: "0px",
backgroundColor:"#1D99D6",
background: "linear-gradient(0deg, #1D99D6, #1D99D6), url(MIMYK LOGO_2019 - square.jpg)",
boxShadow: "0px 8px 30px rgba(29, 153, 214, 0.25)",
}

const arrow={
height: "20px",
width: "11px",
left: "6px",
top:"2px",
borderRadius: "0px",
position: "absolute",
left: "1%",
right: "10.96%",
top: "30%",
bottom: "8.33%",
}

const logo={
position: "absolute",
width: "100px",
height: "37px",
left: "80px",
top: "5px",
}
const i={
 position: "absolute",
left: "60%",
right: "6.25%",
top: "26.25%",
color:"white",
fontSize:"10px",
padding:"2.5px",
height:"28px",


}
const j={
   
    position: "absolute",
left: "64%",
right: "6.25%",
top: "26.25%",
color:"white",
fontSize:"10px",
padding:"2.5px",
height:"28px",

   }
   const k={
   
    position: "absolute",
left: "68%",
right: "6.25%",
top: "26.25%",
color:"white",
fontSize:"10px",
padding:"2.5px",
height:"28px",

   }

   const l={
   
    position: "absolute",
left: "72%",
right: "6.25%",
top: "26.25%",
color:"white",
fontSize:"10px",
padding:"2.5px",
height:"28px",

   }
   const m={
position: "absolute",
left: "76%",
right: "6.25%",
top: "26.25%",
color:"white",
fontSize:"10px",
padding:"2.5px",
height:"28px",

   }
function Navbar() {
    return (
        <div style={nav}>
           <div>< img style={arrow} src={Arrow}/></div>
           <div><img style={logo} src={Background} alt="jjhbdh"/></div>
           <div>
               <div>
                   <img style={i} src={Search} alt="" />
                   <img style={j} src={Plus} alt="" />
                   <img style={k} src={Upload} alt="" />
                   <img style={l} src={Info} alt="" />
                   <img style={m} src={Profile} alt="" />
               </div>
           </div>
        </div>
    )
}

export default Navbar
