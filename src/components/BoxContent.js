import React from 'react'
import Vec from '../vec.png';
import Appointments from './Appointments';
import Boxhead from './Boxhead';



const day={
    fontFamily: "Roboto",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "10px",
lineHeight: "23px",
letterSpacing: "0.1em",
color:"#1D99D6"

}

const content={
    position: "absolute",
    top:"210px",
    left:"20px",
    width:"1400px",
}

const tick={
    backgroundColor:"#BBBBBB",
    fontSize:"10px",
    marginRight:"20px",
    color:"white",
    borderRadius:"100%"
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


function BoxContent() {
    return (
        <div>
           <Boxhead></Boxhead>
            <div style={{ position:"absolute",borderBottom:"1px solid black",width:"1160px",top:"150px",left:"30px" }}></div>
            <div style={{ position:"absolute", top:"170px",left:"50px"}}>
                <span style={day}>Today <img src={Vec} height="7px" alt="" /></span> 
            </div>
            <div style={{ marginTop:"17%" }}></div>
            <Appointments></Appointments>
            <Appointments></Appointments>
            <Appointments></Appointments>
            <Appointments></Appointments>
            <div style={{ position:"absolute", top:"430px",left:"50px"}}>
                <span style={day}>Tommorow <img src={Vec} height="7px" alt="" /></span> 
            </div>
            <Appointments></Appointments>

        </div>
    )
}

export default BoxContent
