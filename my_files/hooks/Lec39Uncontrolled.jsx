import React, { useRef } from "react";

function Lec39Uncontrolled() {

    const userRef = useRef(null);
    const passRef = useRef(null);

    const handleform = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const pass = e.target[1].value;
        console.log("Name:", name);
        console.log("Password:", pass);
    }

    const handleFormRef = (event) =>{
        event.preventDefault();

        const user = userRef.current.value;
        const pass = passRef.current.value;

        console.log("User by ref:", user);
        console.log("Password by ref:", pass);
        console.log("hadleFormRef");
    }

    return(
        <>
            <h1>Uncontrolled Component</h1>

            <form action="" method="post" onSubmit={handleform}>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Enter user name" />
                <br /><br />
                <label htmlFor="pass">Password:</label>
                <input type="password" placeholder="Enter password" />
                <br /><br />

                <button>Submit</button>
            </form>       

            <hr />

            <h1>Uncontroled Component using REf</h1>
            <form action="" method="post" onSubmit={handleFormRef}>
                <input ref={userRef} type="text" name="user" id="user" placeholder="Enter User Name"/><br /><br />
                <input ref={passRef} type="password" name="pass" id="pass" placeholder="Enter password" /><br /><br />

                <button>Submit by ref</button>
            </form>
        
        
        </>
    )

}
export default Lec39Uncontrolled;