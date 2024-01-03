import style from "./header.style.module.css";

function Header() {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.headerLogo}></div>

                <nav>
                    <p>Home</p>
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
