import styles from './Gift.module.scss'
import gift from '../../..//assets/images/stub/grant.png'

export const Gift = () => {
    return (
        // <div className={cl.gift}>
        //     <GiftIcon/>
        //     <div className={cl.text}>
        //         <span className={cl.title}>Вознаграждение за приглашение</span>
        //         <span className={cl.subTitle}>
        //             Пригласи самое большое количество друзей и получи приз в виде 100 USDT
        //         </span>
        //     </div>
        //     <img src={dollar} className={cl.dollar}/>
        // </div>
        <div className={styles.grant}>
            <img src={gift}/>
        </div>

    );
};

