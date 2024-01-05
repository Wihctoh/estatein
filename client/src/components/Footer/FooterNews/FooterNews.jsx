import { PiPlantLight } from "react-icons/pi";

import style from "./footerNews.style.module.scss";

import { gardenNews } from "../../../../data";

const FooterNews = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.gardenNewsBLock}>
                    <div className={style.news}>
                        {gardenNews.map(({ title, description }, index) => (
                            <div key={index} className={style.elem}>
                                <PiPlantLight size={64} />
                                <h4>{title}</h4>
                                <p>{description}</p>
                            </div>
                        ))}
                    </div>

                    <div className={style.subscribe}>
                        <h3> Would you like to join newsletters?</h3>
                        <div className={style.inputField}>
                            <input type='text' placeholder='enter your email address...' />
                            <button>Join</button>
                        </div>
                        <p>
                            We usually post offers and challenges in newsletter. We’re your online
                            houseplant destination. We offer a wide range of houseplants and
                            accessories shipped directly from our (green)house to yours!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterNews;
