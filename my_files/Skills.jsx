import { useState } from "react";

/**
 *    lecture 22 checkbox
 */

// function Skills(){
//     const [skill, setSkill] = useState([]);

//     const handleSkills = (event) => {
//         const { value, checked } = event.target;
//         if (checked) {
//             setSkill(prev => [...prev, value]);
//         } else {
//             setSkill(prev => prev.filter(item => item !== value));
//         }
//     };

//     return(
//         <div>
//             <h3>
//                 Select Your Skills
//             </h3>
//             <input onChange={handleSkills} type="checkbox" id="cpp" value="cpp" />
//             <label htmlFor="cpp">C++</label>
//             <br />

//             <input onChange={handleSkills} type="checkbox" id="js" value="javsScript" />
//             <label htmlFor="js">Js</label>
//             <br />

//             <input onChange={handleSkills} type="checkbox" id="php" value="php" />
//             <label htmlFor="php">PHP</label>
//             <br />

//             <input onChange={handleSkills} type="checkbox" name="java" id="java" value="java" />
//             <label htmlFor="java">Java</label>

//             <h2>{skill.toString()}</h2>
//         </div>
//     )
// }


/**
 *            lecture RAdio button and drop down
 */

function Skills(){
    const [gender, setGender] = useState('female');
    const [city , setCity] = useState('g.noida');
    return(
        <div>
            <h1>Handle Radio Button And Dropdown</h1>
            <br />

            <h2> Radio button</h2>
            <input type="radio" onClick={(event)=> setGender(event.target.value)} name="gender" id="male" checked={gender == 'male'} value="male" />
            <label htmlFor="male">Male</label>
            <br />
            <input type="radio" onClick={(event)=> setGender(event.target.value)} name="gender" id="female" checked={gender == 'female'} value="female"/> <label htmlFor="female">Female</label> 
            <br />
            <h3>Selected Gender : {gender}</h3>
            <br /><br /><br />

            <h2>DropDown</h2>
            <br />
            <h3>Select Cities</h3>
            <select onChange={(event) => setCity(event.target.value)} defaultValue={'g.noida'} name="city" id="city">
                <option value="delhi">Delhi</option>
                <option value="noida">Noida</option>
                <option value="g.noida">G.Noida</option>
                <option value="Gurugao">Gurugao</option>
                <option value="patna">Patna</option>
            </select>
            <h3>Selected City : {city}</h3>
        </div>
    )
}

export default Skills;
