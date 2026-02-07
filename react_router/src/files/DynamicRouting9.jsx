

import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import './Router2.css'
import PageNotFound from './PageNotFound';
import College from './College';
import Student6 from './Student6';
import Faculty6 from './Faculty6';
import Depart6 from './Depart6';
import Details6 from './Details6';
import Login from './Login';
import User9 from './User9';
import UserDetails9 from './UserDetails9';


function Router7(){

    return(
        <div>
        <div className="header">
                <div>
                    <Link className='link' to="/"><h2>Logo</h2></Link>
                </div>
                <div>
                    <ul className='navBar'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/college">College</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/user/login">Login</Link></li>
                        <li><Link to="/users/list?">List</Link></li>

                    </ul>
                </div>
            </div>

            <Outlet />

        </div>
    )
}

function DynamicRouting9() {

    return (
        <div>
        {/* <Router7 /> */}
            <Routes>

                <Route element={<Router7 />} >
                    <Route path='/' element={<h1>Home Page</h1>} />
                    <Route path='/about' element={<h1>About Page</h1>} />
                    <Route path='/contact' element={<h1>Contact Page</h1>} />
                    <Route path='/users' element={<User9 />} />
                    <Route path='/user/login' element={<Login />} />
                    <Route path='/users/:id' element={<UserDetails9/>} />
                    <Route path='/users/list?' element={<User9 />} />
                
                </Route>

                
                <Route path='/college' element={<College />} >
                    <Route index element={<Student6 />} />
                    <Route path="student" element={<Student6 />} />
                    <Route path="faculty" element={<Faculty6 />} />
                    <Route path="department" element={<Depart6 />} />
                    <Route path="details" element={<Details6 />} />
                </Route>

                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default DynamicRouting9;