import { use, useId } from "react";


function Lec49Use_id() {
    return (
        <div>
            <h1>Lec49 UseId Hook</h1>
            <UserForm />
            <hr />
            <UserForm />
        </div>
    )
}

function UserForm(){
    

    const user= useId();


    return(
        <div>
            <form action="">
                <label htmlFor={user + "name"}>Name :</label>
                <input type="text" id={user + "name"} placeholder="Enter Use Name"/>
                <br /><br />
                <label htmlFor={user + "password"}>Password :</label>
                <input type="password" id={user + "password"} placeholder="Enter passWord"/>
                <br /><br />

                <label htmlFor={user + "skills"}>Skills :</label>
                <input type="text" id={user + "skills"} placeholder="Enter Skills "/>
                                <br /><br />
                <label htmlFor={user + "terms"}>Terms and Conditions :</label>
                <input type="checkbox" id={user + "terms"} />
            </form>
        </div>

    )
}

export default Lec49Use_id;