import React from 'react'

const content={
    // position: "absolute",
    
    width:"1400px",
}
const lis ={
    fontFamily: "Roboto",
fontStyle: "normal",
fontWeight: "300",
fontSize: "12px",
lineHeight: "23px",
letterSpacing: "0.1em",
color: "#000000"
}
const tick={
    backgroundColor:"#BBBBBB",
    fontSize:"10px",
    marginRight:"20px",
    color:"white",
    borderRadius:"100%"
}
const time ={
    fontFamily: "Roboto",
fontStyle: "normal",
fontWeight: "300",
fontSize: "12px",
lineHeight: "23px",
letterSpacing: "0.1em",
color:"#1D99D6"

}
function Appointments() {
    return (
        <div>
             <ul style={ content } class="row">
            <li style={lis}>
         <i style={ tick } class="fa fa-check" aria-hidden="true"></i>

         MK2031
                </li> 
                <li style={lis}>
                Saruka Vasudevaan <br />
                F 32
                </li>
                <li style={lis}>
                Upper GI <br />Inspection 
                </li>
                <li style={lis}>
                Dr. Ramesh
                </li>
                <li style={lis}>
                Dr. Shayam
                </li>
                <li style={time}>
                11:30 AM
                </li>
            </ul>
        </div>
    )
}

export default Appointments
