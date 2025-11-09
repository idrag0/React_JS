/**
 *                                                               Lecture 18 - Props in React ( Users.jsx )
 */


// import User from '../../my_files/User'
// import { useState } from 'react'

// function App() {
//   // let obj = {
//   //   name: "drago",
//   //   email : "anrar@example.com",
//   //   age: 21,
//   //   school : "ips",
//   //   university : "abc university"
//   // }

//   const user = ["Galgotias", "IIT", "IPU", "LPU"]

//   const [ student , setStudent ] = useState("drago");  // state 
//     return(
//       <div>

//         {/* <User name="John Doe" email="abrar.ahmad@gmai.com" age={21} /> */} // passing props

//         {/* <User obj={obj} /> */}  // passing object as props

//         {/* <User user={user} /> */}  // passing array as props

//         { student ? <User name={student} /> : null }    // passing state as props in conditional rendering
//         <button onClick={()=>setStudent("")}>Remove Name</button>
//         <button onClick={()=>setStudent("abrar")}>Add Name</button>

//       </div>
//     )
// }


/**
 *                               Lecture 19 - more about props  (userII , wrapper)
 */

// import UserII from '../../my_files/UserII';
// import Wrapper from '../../my_files/Wrapper';

// function App() {
//   return (
//     <>
//       {/* <UserII name="aby" />
//       <UserII name="drago" /> */}

//       <Wrapper>
//         <h1>here you are !</h1>
//       </Wrapper>

//       <Wrapper>
//         <p style={{color:"red"}}>aaoge bsdk</p>
//       </Wrapper>
//     </>
//   );
// }
