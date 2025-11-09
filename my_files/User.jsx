import React from 'react';
import{ useState } from 'react';


// function User({ obj }) {   /// object as props   
//     return (
//         <div>
//             <h1>User component</h1>
//             <p>Name: {obj.name}</p>
//             <p>Email: {obj.email}</p>
//             <p>Age: {obj.age}</p>
//             <p>School: {obj.school}</p>
//             <p>University: {obj.university}</p>
//         </div>
//     );
// }

// function User({user}){
//     return(
//         <div>  // array as props
//             <h1> College Names</h1>
//             <h2>{user[0]}</h2>
//             <h2>{user[1]}</h2>
//             <h2>{user[2]}</h2>
//             <h2>{user[3]}</h2>
//         </div>
//     )
// }


// states as props
function User({name}){
    return(
        <div>
            <h1>User component</h1>
            <p>Name: {name}</p>
        </div>
    );
}

export default User;
