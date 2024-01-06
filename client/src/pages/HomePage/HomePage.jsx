import Recommend from "../../components/Recommend/Recommend";
import style from "./homePage.style.module.scss";

const HomePage = () => (
    <>
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.titleBlock}>
                    <h3>Welcome to GreenShop</h3>
                    <h1>
                        Let’s Make a Better <span>Planet</span>
                    </h1>
                    <p>
                        We are an online plant shop offering a wide range of cheap and trendy
                        plants. Use our plants to create an unique Urban Jungle. Order your favorite
                        plants!
                    </p>

                    <button>SHOP NOW</button>
                </div>

                <div className={style.titleImg}>
                    <div className={style.littleImg}></div>
                </div>
            </div>
        </div>

        <Recommend />
    </>
);

export default HomePage;
