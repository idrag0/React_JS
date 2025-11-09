

// Lec32.jsx
// Inline CSS in React using style objects
// style objects for reusability


import React from "react";

function Lec32() {
    // style using objects

    const cardStyle = {
                        border:"2px solid #000000ff", 
                        width:"200px",
                        boxShadow :"1px 2px 3px 0px #919096ff",
                        margin:"20px"
                    
                    };
    
    const imageStyle = {
                        width:"200px",
                        height:"350px"
                    };

    return(
        <div>
                <h1 style={{color:"green", backgroundColor:"lightblue"}}>Inline css Lec 32</h1> {/* inline style */}
                <div style={{display:"flex"}}>
                    <div style={cardStyle}>
                    <img style={imageStyle} src="https://cdn.pixabay.com/photo/2021/08/08/09/52/man-6530416_960_720.jpg" alt="" />
                    <div>
                        <h4>SomeOne</h4>
                        <p>Web Developer</p>
                    </div>
                </div>

                <div style={cardStyle}>
                    <img style={imageStyle} src="https://cdn.pixabay.com/photo/2021/08/08/09/52/man-6530416_960_720.jpg" alt="" />
                    <div>
                        <h4>SomeOne</h4>
                        <p>Web Developer</p>
                    </div>
                </div>

                <div style={cardStyle}>
                    <img style={imageStyle} src="https://cdn.pixabay.com/photo/2021/08/08/09/52/man-6530416_960_720.jpg" alt="" />
                    <div>
                        <h4>SomeOne</h4>
                        <p>Web Developer</p>
                    </div>
                </div>

                <div style={cardStyle}>
                    <img style={imageStyle} src="https://cdn.pixabay.com/photo/2021/08/08/09/52/man-6530416_960_720.jpg" alt="" />
                    <div>
                        <h4>SomeOne</h4>
                        <p>Web Developer</p>
                    </div>
                </div>
                </div>
`
            
        </div>
    )
}

export default Lec32;