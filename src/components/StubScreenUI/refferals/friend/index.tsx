import cl from './Friend.module.scss'
import icon_friend from "../../../../assets/images/stub/icon_friend.svg";

interface IFriend {
    title: string
    level: number
    referralsCount: number
}

export const Friend = ({title, level, referralsCount}: IFriend) => {
    return (
        <div className={cl.refferalsCountItem}>
            <div className={cl.firstRow}>
                <img src={icon_friend} alt="Friends"/>
                <div className={cl.count}>{referralsCount}</div>
            </div>
            <div className={cl.secondRow}>
                <span className={cl.friendLabel}>{title}</span>
                <span className={cl.levelLabel}>{level}-ого уровня</span>
            </div>
        </div>
    );
};

