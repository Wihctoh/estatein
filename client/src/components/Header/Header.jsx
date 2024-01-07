import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoLogInOutline, IoSearch, IoCartOutline } from "react-icons/io5";

import style from "./header.style.module.scss";

const Header = () => {
    const activeLink = ({ isActive }) => (isActive ? style.activeBtn : null);
    const [visible, setVisible] = useState(false);

    return (
        <div className={style.container}>
            <NavLink to='/home'>
                <div className={style.headerLogo}></div>
            </NavLink>

            <nav>
                <p>
                    <NavLink className={activeLink} to='/home'>
                        Home
                    </NavLink>
                </p>
                <p>
                    <NavLink className={activeLink} to='/shop'>
                        Shop
                    </NavLink>
                </p>
                <p>
                    <NavLink className={activeLink} to='/plant-care'>
                        Plant Care
                    </NavLink>
                </p>
                <p>
                    <NavLink className={activeLink} to='/blogs'>
                        Blogs
                    </NavLink>
                </p>
            </nav>

            <div className={style.shopBlock}>
                {visible && (
                    <div className={style.search}>
                        <input type='text' placeholder='Search...' />
                        <IoSearch />
                    </div>
                )}
                {!visible && <IoSearch onClick={() => setVisible(true)} />}

                <IoCartOutline />

                <div className={style.loginBtn}>
                    <IoLogInOutline color='#fff' />

                    <p>
                        <NavLink to='/login'>Login</NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
