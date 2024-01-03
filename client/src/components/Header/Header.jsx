import { useState } from "react";
import style from "./header.style.module.css";

function Header() {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(!active);
    }

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.headerLogo}></div>

                <nav onClick={handleClick}>
                    <p className={active ? style.activeBtn : null}>Home</p>
                    <p>About Us</p>
                    <p>Properties</p>
                    <p>Services</p>
                </nav>

                <div className={style.contactBtn}>Contact Us</div>
            </div>
        </div>
    );
}

export default Header;
