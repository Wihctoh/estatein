import style from "./footer.style.module.css";
import { footerData } from "./footerData";

export default function Footer() {
    return (
        <>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.footerForm}>
                        <div className={style.footerLogo}></div>

                        <div className={style.footerInput}>
                            <div className={style.inputLogo}></div>
                            <input type='text' placeholder='Enter Your Email' />
                            <div className={style.inputSendImg}></div>
                        </div>
                    </div>

                    <div className={style.footerContact}>
                        {footerData.map((el, index) => (
                            <div key={index} className={style.footerBlock}>
                                <p className={style.footerTitleBlock}>{el.title}</p>

                                {el.data.map((el, index) => (
                                    <p key={index}>{el}</p>
                                ))}
                            </div>
                        ))}
                    </div>	
                </div>
            </div>
        </>
    );
}
