// import style from "./footer.style.module.scss";

import FooterNews from "./FooterNews/FooterNews";
import FooterContact from "./FooterContact/FooterContact";
import FooterLinks from "./FooterLinks/FooterLinks";

const Footer = () => {
    return (
        <div>
            <FooterNews />
            <FooterContact />
            <FooterLinks />
        </div>
    );
};

export default Footer;
