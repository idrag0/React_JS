import { Activity, useState } from "react";


export default function Activity70(){

    const [showHome, setShowHome] = useState(true);

    return(
        <div>
            <h1>Activity 70 React 19.2</h1>

            <button onClick={() => setShowHome(true)}>Home</button>
            <button onClick={() => setShowHome(false)}>User</button>

            <Activity mode={showHome == true?'visible':'hidden'} >
                <Home />
            </Activity>

            <Activity mode={showHome == false?'visible':'hidden'} >
                <UserFrom />
            </Activity>


        </div>
    )
}


function Home(){

    return(
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page. Here you can find the latest news, updates, and featured content.</p>
        </div>
    )
}


function UserFrom(){

    return(
        <div>
            <h1>User Page</h1>

            <input type="text" placeholder="Enter your name" /><br /><br />
            <input type="email" placeholder="Enter your email" /><br /><br /> 
            <input type="tel" placeholder="Enter your phone number" />

        </div>
    )
}
