import cl from "./BlockInfo.module.scss";

interface IBlockInfo {
    title: string
    value: number | undefined
    type: string
}

export const BlockInfo = ({title, value = 0, type}: IBlockInfo) => {
    return (
        <div className={cl.block}>
            <div className={cl.grayText}>{title}</div>
            <div className={cl.balanceBlock}>
                <div className={cl.value}>{value} {type}</div>
            </div>
        </div>
    );
};

