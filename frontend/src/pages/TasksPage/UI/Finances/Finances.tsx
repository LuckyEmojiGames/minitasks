import React, { useEffect, useState } from "react";
import TopBar from "../../TopBar/TopBar.tsx";
import TonCoinIcon from "../../../../shared/assets/images/finances/toncoin_icon.svg";
import USDTIcon from "../../../../shared/assets/images/finances/usdt_icon.svg";
import WalletStatus from "./WalletStatus.tsx";
import UserBalance from "./UserBalance";
import "./Finances.css";
import TransactionHistory from "./TransactionHistory.tsx";
import Statistics from "./Statistics.tsx";

const Finances: React.FC = () => {
    const [activeTab, setActiveTab] = useState('replenish');
    const [tonBalance, setTonBalance] = useState<number | null>(null);
    const [usdtBalance, setUsdtBalance] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [withdrawalCrypto, setWithdrawalCrypto] = useState('ton');
    const walletNumber = 'wq221A12sdSDNsJa213LAS12Sa12hSyhhda4DS4sd';

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    const fetchUserBalance = async () => {
        try {
            // Simulate API call
            return await new Promise<{ ton: number, usdt: number }>((resolve) =>
                setTimeout(() => resolve({ ton: 250, usdt: 2 }), 1000)
            );
        } catch (error) {
            console.error("Failed to fetch user balance", error);
            return { ton: 0, usdt: 0 };
        }
    };

    useEffect(() => {
        const fetchBalances = async () => {
            const balances = await fetchUserBalance();
            setTonBalance(balances.ton);
            setUsdtBalance(balances.usdt);
        };

        fetchBalances().then(r => console.log("Balances fetched", r));
    }, []);

    const handleNumberClick = (number: string) => {
        setInputValue(number);
    };

    const handleConnectWallet = () => {
        setIsWalletConnected(true);
    };

    const handleCryptoWithdrawal = (crypto: string) => {
        console.log(`set ${crypto}`);
        setWithdrawalCrypto(crypto);
    }

    const handleReplenishBalance = () => {
        console.log('Replenish balance');
    }

    const handleWithdrawBalance = () => {
        console.log('Withdraw balance');
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'replenish':
                return (
                    <div className="replenish-content">
                        <UserBalance tonBalance={tonBalance} usdtBalance={usdtBalance} />
                        <div className="replenish-input">
                            <p>Укажите сумму пополнения</p>
                            <div className="input-area">
                                <input
                                    className="user-balance-input"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                                <div className="input-shortcut">
                                    {[700, 1000, 1500].map(number => (
                                        <button
                                            key={number}
                                            onClick={() => handleNumberClick(number.toString())}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <WalletStatus
                            isWalletConnected={isWalletConnected}
                            walletNumber={walletNumber}
                            buttonText={'Пополнить баланс'}
                            onConnectWallet={handleConnectWallet}
                            onButtonClick={handleReplenishBalance}
                        />
                    </div>
                );
            case 'withdraw':
                return (
                    <div className="withdraw-content">
                        <UserBalance tonBalance={tonBalance} usdtBalance={usdtBalance} />
                        <div className="withdrawal-input">
                            <div className="withdrawal-amount">
                                <p>Укажите сумму вывода</p>
                                <input className="withdraw-input-field"/>
                            </div>
                            <div className="withdrawal-crypto">
                                <p>Выберите криптовалюту</p>
                                <div className="crypto-select">
                                    <div className={`crypto-ton ${withdrawalCrypto === 'ton' ? 'active' : ''}`} onClick={() => handleCryptoWithdrawal('ton')}>
                                        <img src={ TonCoinIcon } alt=""/>
                                        <p>TON</p>
                                    </div>
                                    <div className={`crypto-usdt ${withdrawalCrypto === 'usdt' ? 'active' : ''}`} onClick={() => handleCryptoWithdrawal('usdt')}>
                                        <img src={ USDTIcon } alt=""/>
                                        <p>USDT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="withdrawal-info">
                                <p>Минимальная сумма вывода составляет 5 USDT или 10 TON. Удерживается комиссия блокчейна и комиссия платформы 2%.</p>
                            </div>
                        </div>
                        <WalletStatus
                            isWalletConnected={isWalletConnected}
                            walletNumber={walletNumber}
                            buttonText={'Запросить вывод'}
                            onConnectWallet={handleConnectWallet}
                            onButtonClick={handleWithdrawBalance}
                        />
                    </div>
                );
            case 'history':
                return <TransactionHistory />
            case 'stats':
                return <Statistics />;
            default:
                return null;
        }
    };

    return (
        <div>
            <TopBar pageName="money" onTabChange={handleTabChange} />
            {renderContent()}
        </div>
    );
};

export default Finances;