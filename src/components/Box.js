import React,{ useState,useRef } from 'react';
import Plus from '../Vector (2).png';
import BoxContent from './BoxContent';



const box={
    position: "absolute",
    width: "1245px",
    height: "530px",
    left: "15%",
    top: "15%",
    background: "#FFFFFF",
    boxShadow: "0px 4px 27px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    zIndex:"12"
    }

    const appoin={
position: "absolute",
width: "267px",
height: "42px",
left: "90px",
top: "35px",
fontFamily: "Roboto",
fontStyle: "normal",
fontWeight: "300",
fontSize: "30px",
lineHeight: "42px",
letterSpacing: "0.1em",
color: "#000000",
    }
const i={
color:"white",
fontSize:"10px",
padding:"2.5px",
height:"22px",
backgroundColor:"#1d99d6"
    }


const appoint ={
    position: "absolute",
    top:"38px",
    right:"80px",
    backgroundColor: "#1d99d6",
    color: "white",
    borderRadius:"10px",
    height:"30px",
    width:"160px"
		
}
const text ={
    position: "absolute",
    fontFamily: "Roboto",
    // margin:"0 0 0 0",
    top:"4px",
    left:"35px",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    // lineHeight: "18px",
    // textAlign: "center",
    letterSpacing: "0.1em",
    fontVariant: "small-caps",
    color: "#FFFFFF",
}


function Box() {
    const initial=useRef(null);

    const onButtonClick = () => {
        // `current` points to the mounted text input element
        initial.style.zIndex = "1";
      };
    

    return (
        <div ref={initial} style={box}>
            <span style={appoin}>Appointments</span>
            <button id="neww" onClick={onButtonClick} style={appoint} class="btn"><img style={ {position:"absolute",top:"3px",left:"10px"} } src={Plus} height="20px" ></img> 
            <div style={text}> new appointment </div> 
            </button>
            <BoxContent />
        </div>
    )
}

export default Box
