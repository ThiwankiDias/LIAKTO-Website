import "./Login.css";
import { useNavigate } from "react-router-dom";
function SignUp(){
    const navigate=useNavigate();
    return(
        <div className="login-container">
            <h1>Login to access your account</h1>
            <form action="">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter email"></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password"></input>
                    <div className="sign-up-in-buttons">
                    <button className="loginBtn">Login</button>
                    <button className="SignUpBtn" onClick={()=>navigate("/signup")}>Sign Up</button>
                    </div>
            </form>

        </div>
    );
}
export default SignUp;
