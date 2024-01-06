import style from "./recommend.style.module.scss";

import { recommendData } from "../../../data";

const Recommend = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <h2>Related Products</h2>

                <div className={style.recommendBlock}>
                    {recommendData.map(({ image, title, price }, index) => (
                        <div key={index} className={style.item}>
                            <div className={style.back}>
                                <img src={image} alt='image' />
                            </div>

                            <h3>{title}</h3>
                            <p>{price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recommend;
