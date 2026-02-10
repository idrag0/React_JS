
import './Router2.css'
import "tailwindcss";


function Login() {
    return (
        <div className="loginPage">
            <h1>Login Page</h1>
            <p>Please enter your credentials to log in.</p>
            
            <input className="inputfield bg-red-500"s type="text" placeholder="Username" /> <br /><br />
            <input className="inputfield" type="password" placeholder="Password" />
            <br /><br />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' id='loginbnt'>Login</button>
        
        </div>
    )
}

export default Login;