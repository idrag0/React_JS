import{ useState } from 'react';
import Clock from "./Clock";

function DClock(){
    const [color, setColor] = useState("yellow");
    return(
        <div>
            <h1>Digital Clock</h1>

            <h3>Select Color of Clock</h3>
            <select name="color" id="color" value={color} onChange={(event) => setColor(event.target.value)}>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
            </select>

            <Clock color={color}/>
        </div>
    )
}

export default DClock;
