import style from "./footerLinks.style.module.scss";

import paymentSystemsImg from "../assets/paymentSystems.png";
import facebookSvg from "../assets/Facebook.svg";
import instagramSvg from "../assets/Instagram.svg";
import twitterSvg from "../assets/Twitter.svg";
import linkedinSvg from "../assets/Linkedin.svg";
import unionSvg from "../assets/Union.svg";

import { gardenLinks } from "../../../../data";

const FooterLinks = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.linkBlock}>
                    {gardenLinks.map(({ title, links }, index) => (
                        <div key={index} className={style.links}>
                            <h3>{title}</h3>

                            {links.map((el, index) => (
                                <p key={index}>{el}</p>
                            ))}
                        </div>
                    ))}
                </div>

                <div className={style.socialBlock}>
                    <h3>Social Media</h3>

                    <div className={style.socialLinks}>
                        <div className={style.linkBorder}>
                            <img src={facebookSvg} alt='facebookSvg' />
                        </div>
                        <div className={style.linkBorder}>
                            <img src={instagramSvg} alt='instagramSvg' />
                        </div>
                        <div className={style.linkBorder}>
                            <img src={twitterSvg} alt='twitterSvg' />
                        </div>
                        <div className={style.linkBorder}>
                            <img src={linkedinSvg} alt='linkedinSvg' />
                        </div>
                        <div className={style.linkBorder}>
                            <img src={unionSvg} alt='unionSvg' />
                        </div>
                    </div>

                    <h3>We accept</h3>

                    <img
                        src={paymentSystemsImg}
                        alt='paymentSystemsImg'
                        className={style.paymentSystems}
                    />
                </div>
            </div>
        </div>
    );
};

export default FooterLinks;
