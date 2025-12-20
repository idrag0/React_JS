// Derived State in React.js
// --------------------------------------
// Derived state refers to state that can be computed from other state or props, rather than being stored directly in a component's state.
// Instead of duplicating data, you calculate derived values on the fly using existing state or props.
// This helps avoid bugs and keeps your state minimal and consistent.
//
// Example: If you have a list of items in state, and you want to display the count, you should compute the count from the list, not store it separately.
//
// In React, you can derive state using variables inside your render/return method, or with useMemo for expensive calculations.
//
// Avoid storing derived data in state unless you have a specific reason (like performance optimization).

import React, { useState } from "react";

function Lec44Drivedstate() {   
    const [users, setUsers] = useState([]);
    const [user,setUser] = useState("");

    const hadleAddUser = () => {
        setUsers([...users, user]);
    }

    const totalUsers = users.length;
    const lst = users[users.length - 1];
    const uniqueUsers = [...new Set(users)].length;

    return(
        <div>
            <h1>
                Derived State in React.js
            </h1>

            <h2>Total user : {totalUsers}</h2>
            <h2>Last User : {lst}</h2>
            <h2>Unique Users : {uniqueUsers}</h2>
            <input type="text" onChange={(event) =>setUser(event.target.value)} placeholder="add new User" />
            <button onClick={hadleAddUser}>Add User </button>

            {
                users.map((item, index)=>(
                    <h4 key={index}>{item}</h4>
                ))
            }
        </div>
    )
}


export default Lec44Drivedstate;