import React from "react";
import { IoLogInOutline, IoSearch, IoCartOutline } from "react-icons/io5";

import style from "./header.style.module.scss";

const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.headerLogo}></div>

            <nav>
                <p>Home</p>
                <p>Shop</p>
                <p>Plant Care</p>
                <p>Blogs</p>
            </nav>

            <div className={style.shopBlock}>
                <IoSearch />
                <IoCartOutline />

                <div className={style.loginBtn}>
                    <IoLogInOutline color='#fff' />
                    <p>Login</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
