import React from 'react'

const heading={
    position: "absolute",
    top:"100px",
    width:"1400px",
    // borderBottom:"2px solid black"
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

const liHead={
fontFamily: "Roboto",
fontStyle: "normal",
fontWeight: "500",
fontSize: "12px",
lineHeight: "23px",
letterSpacing: "0.1em",
color: "#000000"

}

function Boxhead() {
    return (
        <div>
             <ul style={heading} class="row">
            <li style={liHead}>
         <i style={ tick } class="fa fa-check" aria-hidden="true"></i>

                Patient&nbsp;ID
                </li> 
                <li style={liHead}>
                Patient details
                </li>
                <li style={liHead}>
                Procedure details
                </li>
                <li style={liHead}>
               Consultant
                </li>
                <li style={liHead}>
                Refferd by
                </li>
                <li style={liHead}>
                Time
                </li>
            </ul>
        </div>
    )
}

export default Boxhead
