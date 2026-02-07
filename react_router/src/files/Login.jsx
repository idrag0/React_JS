
import './Router2.css'

function Login() {
    return (
        <div className="loginPage">
            <h1>Login Page</h1>
            <p>Please enter your credentials to log in.</p>
            
            <input className="inputfield" type="text" placeholder="Username" /> <br /><br />
            <input className="inputfield" type="password" placeholder="Password" />
            <br /><br />
            <button id='loginbnt'>Login</button>
        </div>
    )
}

export default Login;