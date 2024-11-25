import React from "react";
import WalletIcon from "../../../../shared/assets/images/finances/wallet_icon.svg";

interface WalletStatusProps {
    isWalletConnected: boolean;
    walletNumber: string;
    buttonText: string;
    onConnectWallet: () => void;
    onButtonClick: () => void;
}

const WalletStatus: React.FC<WalletStatusProps> = ({ isWalletConnected, walletNumber, buttonText, onConnectWallet, onButtonClick }) => {
    return (
        <>
            {isWalletConnected ? (
                <>
                    <div className="user-wallet">
                        <img src={WalletIcon} alt="Wallet Icon" />
                        <span>{walletNumber}</span>
                    </div>
                    <button className="replenish-balance-button" onClick={onButtonClick}>
                        {buttonText}
                    </button>
                </>
            ) : (
                <div className="connect-wallet">
                    <button onClick={onConnectWallet}>Подключить кошелёк</button>
                </div>
            )}
        </>
    );
};

export default WalletStatus;