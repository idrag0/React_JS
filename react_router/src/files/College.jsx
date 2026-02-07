
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Student6 from "./Student6";
import Details6 from "./Details6";
import Faculty6 from "./Faculty6";
import Depart6 from "./Depart6";



export default function College() {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>College Page</h1>
                <NavLink to="student">Student</NavLink>
                <NavLink to="department">Department</NavLink>
                <NavLink to="faculty">Faculty</NavLink>
                <NavLink to="details">College Details</NavLink>
            </div>
            {/* <Routes>
                <Route path="student" element={<Student6 />} />
                <Route path="department" element={<Depart6 />} />
                <Route path="faculty" element={<Faculty6 />} />
                <Route path="details" element={<Details6 />} />
            </Routes> */}
            <Outlet />
        </>
    )
}