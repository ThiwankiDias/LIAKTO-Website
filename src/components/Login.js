import "./Login.css";

function SignUp(){
    return(
        
        <div className="signup-container">
            <h1>Login / Sign UP</h1>
            <form action="">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter email"></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password"></input>
                    <div className="sign-up-in-buttons">
                    <button className="loginBtn">Login</button>
                    <button className="SignUpBtn">Sign Up</button>
                    </div>
            </form>

        </div>
    );
}
export default SignUp;
