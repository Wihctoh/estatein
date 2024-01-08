import { NavLink } from "react-router-dom";
import style from "./login.style.module.scss";

const LoginWindow = () => {
    return (
        <div className={style.LoginContainer}>
            <div className={style.authBlock}>
                <NavLink>Login</NavLink>
                <NavLink>Register</NavLink>
            </div>

            <div className={style.modal}></div>
            <h3>Enter your username and password to login.</h3>

            <input type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />

            <p>Forgot Password?</p>

            <button>Login</button>
            <p>Or login with</p>

            <div className={style.loginGoogle}></div>
            <div className={style.loginFacebook}></div>
        </div>
    );
};

export default LoginWindow;
