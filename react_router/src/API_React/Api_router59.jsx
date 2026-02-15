import { useEffect } from "react";
import { useState } from "react";
import './Api.css';
import { Link, Routes, Route } from "react-router-dom";
import AddUser59 from "./AddUser59";

function Api_router59() {

    return(
        <div>
            <ul className="navBar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/adduser">Add User</Link></li>

            </ul>


            <Routes>
                <Route index path="/" element={<HomeList />} />
                <Route path="/adduser" element={<AddUser59 />} />
            </Routes>


        </div>
    )

}

function HomeList() {

    const [loding, setLoading] = useState(false);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        setLoading(true);
        getUserData();
    }, [])

    const getUserData = async () => {
        const url = "http://localhost:3000/users";

        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setUsers(response);
        setLoading(false);
    }

    return (
        <div>

            


            <div>
                {
                    !loding ?
                        users.map((item) => (
                            <ul className="list" key={item.id}>
                                <li>Name : {item.name}</li>
                                <li>Email : {item.email}</li>
                                <li>Street : {item.address}</li>
                            </ul>
                        ))
                        : <h1>Loading...</h1>
                }

            </div>

        </div>
    )
}

export default Api_router59;