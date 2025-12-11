
/**
 * Lecture 33
 * Dynamic and Conditional Styling in React
 * 
 */

import React, { useState } from "react";

function Lec33() {

    const [cardStyle, setCardStyle] = useState({
        border: "2px solid #000000ff",
        width: "200px",
        boxShadow: "1px 2px 3px 0px #919096ff",
        margin: "20px"
    });

    const imageStyle = {
        width: "200px",
        height: "350px"
    };

    const updateTheme = (bgColor, textColor) => {
        setCardStyle({ ...cardStyle, backgroundColor: bgColor, color: textColor });
    }

    const [grid, setGrid] = useState(true);  // true -> grid view, false -> block view

    return (
        <div>
            <h1 style={{ color: "green", backgroundColor: "lightblue" }}>Dynamic and Conditional Styling Lec 33</h1> {/* inline style */}

            <button onClick={() => updateTheme("gray", "green")}>Gray Theme</button>
            <button onClick={() => updateTheme("white", "black")}>Default Theme</button>
            <button onClick={() => setGrid(!grid)}>Toggle Grid</button>

            <div style={{ display: grid ? "grid" : "block", gridTemplateColumns: "repeat(3, 1fr)" }}>
                <div style={cardStyle}>
                    <img style={imageStyle} src="https://cdn.pixabay.com/photo/2021/08/08/09/52/man-6530416_960_720.jpg" alt="" />
                    <div>
                        <h4>SomeOne</h4>
                        <p>Web Developer</p>
                    </div>
                </div>

                <div style={cardStyle}>
                     <img style={imageStyle} src="https://picsum.photos/200/350?random=2" alt="Person 2" />
                    <div>
                        <h4>Jane Smith</h4>
                        <p>UI/UX Designer</p>
                    </div>
                </div>
                   
                <div style={cardStyle}>
                    <img style={imageStyle} src="https://picsum.photos/200/350?random=3" alt="Person 3" />
                    <div>
                        <h4>Alex Johnson</h4>
                        <p>Frontend Engineer</p>
                    </div>
                </div>

                <div style={cardStyle}>
                    <img style={imageStyle} src="https://picsum.photos/200/350?random=4" alt="Person 4" />
                    <div>
                        <h4>Maria Garcia</h4>
                        <p>Product Manager</p>
                    </div>
                </div>

                <div style={cardStyle}>
                    <img style={imageStyle} src="https://picsum.photos/200/350?random=5" alt="Person 5" />
                    <div>
                        <h4>Lee Wong</h4>
                        <p>DevOps Engineer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Lec33;