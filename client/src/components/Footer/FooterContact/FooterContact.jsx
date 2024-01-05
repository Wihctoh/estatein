import locationSvg from "../assets/Location.svg";
import messageSvg from "../assets/Message.svg";
import callingSvg from "../assets/Calling.svg";

import style from "./footerContact.style.module.scss";

const FooterContact = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.contactBlock}>
                    <div className={style.contactLogo}></div>

                    <div className={style.contact}>
                        <img src={locationSvg} alt='locationSvg' />
                        <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
                    </div>
                    <div className={style.contact}>
                        <img src={messageSvg} alt='messageSvg' />
                        <p>contact@greenshop.com</p>
                    </div>
                    <div className={style.contact}>
                        <img src={callingSvg} alt='callingSvg' />
                        <p>+88 01911 717 490</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterContact;
