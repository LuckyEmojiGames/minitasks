import cl from "./SecondColl.module.scss";
import tg_logo from "../../../assets/images/stub/tg_logo.svg";

export const SecondColl = () => {
    return (
        <div className={cl.secondColl}>
            <a href='https://t.me/evoprojectton' className={cl.tgLink}>
                <img src={tg_logo} alt="Telegram link"/>
                <div className={cl.text}>
                    Кликни, чтобы <br/>
                    присоединиться к нам!
                </div>
                <div className={cl.tg}>@evoprojectton</div>
            </a>

        </div>
    );
};

