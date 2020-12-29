import React from 'react'

const box={
    position: "absolute",
    width: "1245px",
    height: "530px",
    left: "15%",
    top: "15%",
    background: "#FFFFFF",
    boxShadow: "0px 4px 27px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    zIndex:"10",
    }
    const content={
        position: "absolute",
        top:"130px",
        left:"40px",
        width:"1400px",
    }

    const text={
        position: "absolute",
        width: "533px",
        height: "42px",
        left: "35px",
        top: "20px",

        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "26px",
        lineHeight: "42px",
        letterSpacing:" 0.1em",
        color: "#000000"
    }
    const heading={
        position: "absolute",
        top:"100px",
        left:"30px",
        width:"1400px",
        // borderBottom:"2px solid black"
    }
    
    
    const liHead={
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "23px",
    letterSpacing: "0.1em",
    color: "#000000",
    marginRight:"23%",
    
    
    }
   
    const lis ={
        fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "12px",
    lineHeight: "23px",
    letterSpacing: "0.1em",
    color: "#000000",
    marginRight:"23%",
    
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
function Box2() {
    return (
        <div style={box}>
            <div><span style={text}>Appointments<span style={{ fontSize:"20px" }}>>>New Apponitement </span> </span></div>
            <div>
            <ul style={heading} class="row">
     
                <li style={liHead}>
                Patient ID
                </li>
                <li style={liHead}>
               Consultant
                </li>
                <li style={liHead}>
                Procedure details
                </li>
                

            </ul>
            </div>
            <div>
            <ul style={ content } class="row">
            <li style={lis}>
                 MK2031
                </li> 
                <li style={lis}>
                Dr. Ramesh
                </li>
                <li style={lis}>
                Upper GI <br />Inspection 
                </li>
                
               
               
            </ul>

            <div style={ { margin: "200px 0 0 100px" }} class="row">
            <div><button  class="btn btn-primary">Cancel</button></div>
            <div style={{ marginRight:"1%" }} ></div>
            <div><button class="btn btn-success">Save</button></div>
            </div>


            </div>
        
        </div>
    )
}

export default Box2
