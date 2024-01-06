import { Link } from "react-router-dom";
import { IoLogInOutline, IoSearch, IoCartOutline } from "react-icons/io5";

import style from "./header.style.module.scss";

const Header = () => {
    return (
        <div className={style.container}>
            <Link to='/home'>
                <div className={style.headerLogo}></div>
            </Link>

            <nav>
                <p>
                    <Link to='/home'>Home</Link>
                </p>
                <p>
                    <Link to='/shop'>Shop</Link>
                </p>
                <p>
                    <Link to='/plant-care'>Plant Care</Link>
                </p>
                <p>
                    <Link to='/blogs'>Blogs</Link>
                </p>
            </nav>

            <div className={style.shopBlock}>
                <IoSearch />
                <IoCartOutline />

                <div className={style.loginBtn}>
                    <IoLogInOutline color='#fff' />

                    <p>
                        <Link to='/login'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
