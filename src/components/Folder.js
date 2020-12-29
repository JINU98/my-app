import React from 'react'

const files={
position: "absolute",
width: "280px",
height: "320px",
left: "52px",
top: "200px",

/* Logo base colour */

background: "linear-gradient(0deg, #1D99D6, #1D99D6)",
boxShadow: "0px 4px 27px rgba(0, 0, 0, 0.25)",
borderRadius: "36px 0px 0px 36px",
}

const text={
// position: "absolute",
width: "144px",
height: "21px",
fontFamily: "Roboto",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "10px",
lineHeight: "21px",
/* identical to box height */

letterSpacing: "0.1em",
color: "white"
}

const icon ={
    FontSize:"18px",
    color:"white",
    margin:"40px 20px 40px 30px"
}
const icon1 ={
    FontSize:"18px",
    color:"#1d99d6",
    margin:"20px 20px 30px 30px"
}

const spa={
    
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "10px",
        lineHeight: "21px",
        letterSpacing: "0.1em",
        color: "#FFFFFF",
                
}

const span={
    position: "absolute",
    top:"20px",
    left:"65px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "10px",
    lineHeight: "21px",
    letterSpacing: "0.1em",
    color: "#1d99d6",

}
const div1={

background:"#FFFFFF",
boxShadow: "0px 4px 27px rgba(0, 0, 0, 0.25)",
borderRadius: "36px 0px 0px 36px",
height:"50px",

}

function Folder() {
    return (
        <>
        <div style={files}>
        <div style={ div1 }>
   
   <i class="fa fa-calendar" style={icon1} aria-hidden="true"></i>
   <span style={span}>Appointements</span>

  </div>
  <div>
   <i class="fa fa-file" style={icon} aria-hidden="true"></i>
   <span style={spa}>Reports</span>
  </div>
  <div>
   <i class="fa fa-bookmark" style={icon} aria-hidden="true"></i>
   <span style={spa}>Bookmarks</span>
  </div>
  <div>
   <i class="fa fa-trash" style={icon} aria-hidden="true"></i>
   <span style={spa}>Bin</span>
  </div>
        </div>
        
        </>
    )
}

export default Folder
