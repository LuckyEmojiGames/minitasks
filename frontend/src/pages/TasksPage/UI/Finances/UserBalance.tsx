import React from "react";
import TonCoinIcon from "../../../../shared/assets/images/finances/toncoin_icon.svg";
import USDTIcon from "../../../../shared/assets/images/finances/usdt_icon.svg";
import "./UserBalance.css";

interface UserBalanceProps {
    tonBalance: number | null;
    usdtBalance: number | null;
}

const UserBalance: React.FC<UserBalanceProps> = ({ tonBalance, usdtBalance }) => {
    return (
        <div className="user-balance">
            <p>Мой баланс</p>
            <div className="toncoin-balance">
                <img src={TonCoinIcon} alt="TonCoinIcon" />
                <span className="usr-ton-balance">
                    {tonBalance !== null ? tonBalance : <span className="shimmer"></span>} TON
                </span>
            </div>
            <div className="usdt-balance">
                <img src={USDTIcon} alt="USDTIcon" />
                <span>
                    {usdtBalance !== null ? usdtBalance : <span className="shimmer"></span>} USDT
                </span>
            </div>
        </div>
    );
};

export default UserBalance;