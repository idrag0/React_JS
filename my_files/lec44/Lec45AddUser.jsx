import { useState } from "react";
import Lec45_displayUser from "./Lec45_displayUser";

function Lec45AddUser({setUser, user}) {

    

    return(
        <div>
            <h2>Add User</h2>
            <br />
            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter user name" />
             <hr />

             <h3>Herer we Displaying the Display again</h3>
                <Lec45_displayUser user={user} />
        </div>
    )
}

export default Lec45AddUser;