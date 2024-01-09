import { NavLink } from "react-router-dom";
import style from "./login.style.module.scss";

const LoginWindow = () => {
    // const activeLink = ({ isActive }) => (isActive ? style.activeLink : null);

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
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
        </div>
    );
};

export default LoginWindow;
