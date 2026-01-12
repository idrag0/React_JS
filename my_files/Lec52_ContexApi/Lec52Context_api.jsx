//lec 52 Context API in React JS

import { useState } from "react";
import Lec52_Cllg from "./Lec52_Cllg";
import { SubjectContext } from "./Lec52Context_Data";

// Prop drilling : it is the process of passing data from parent component to child component via props, even if some intermediate components do not need that data.

// Context API : it is a way to share data between components without passing props through every level of the component tree.

function Lec52Context_api(){
    const [sunject, setsubject] = useState('');
    return(
        <div style={{backgroundColor :"orange", padding : 10}}>
            <SubjectContext.Provider value={sunject}>
            <select value={sunject} onChange={(event) => setsubject(event.target.value)}>
                <option value=''>Select Subject</option>
                <option value="Maths">Maths</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="Computer Science">Computer Science</option>
                <option value="English">English</option>
            </select>

            <h1>Context API in React JS</h1>
            <Lec52_Cllg/>
            <button onClick={()=>setsubject('')}>Clear Subject</button>
            </SubjectContext.Provider>
        </div>
    )
}

export default Lec52Context_api;
