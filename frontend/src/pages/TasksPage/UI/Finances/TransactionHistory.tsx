import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import NoneIcon from "../../../../shared/assets/images/finances/None.svg";
import "./TransactionHistory.css";

interface Transaction {
    id: number;
    date: string;
    time: string;
    amount: number;
    type: string;
}

const TransactionHistory: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchTransactionHistory = async () => {
        try {
            const mockData: Transaction[] = [
                { id: 1, date: "2024-11-25", time: "23:43", amount: -990, type: "Оплата подписки" },
                { id: 2, date: "2023-10-01", time: "23:32", amount: 990, type: "Пополнение счёта" },
                { id: 3, date: "2023-09-30", time: "20:21", amount: -990, type: "Оплата подписки" },
                { id: 4, date: "2023-09-29", time: "20:17", amount: 1000, type: "Пополнение счёта" },
                { id: 5, date: "2024-09-29", time: "10:12", amount: 6000, type: "Пополнение счёта" },
            ];
            await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate network delay
            setTransactions(mockData);
        } catch (error) {
            console.error("Failed to fetch transaction history", error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        if (date.toDateString() === today.toDateString()) {
            return "Сегодня";
        } else if (date.toDateString() === yesterday.toDateString()) {
            return "Вчера";
        } else {
            const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
            return date.toLocaleDateString('ru-RU', options);
        }
    };

    useEffect(() => {
        fetchTransactionHistory().then(r => console.log("Transaction history fetched", r));
    }, []);

    if (loading) {
        return (
            <div className="transaction-history-loading">
                <ContentLoader
                    speed={2}
                    width="100%"
                    height={60}
                    backgroundColor="#0B1B35"
                    foregroundColor="#1A2A4A"
                >
                    <rect x="5%" y="15" rx="5" ry="5" width="10%" height="10"/>
                    <rect x="5%" y="35" rx="5" ry="5" width="20%" height="10"/>
                    <rect x="80%" y="15" rx="5" ry="5" width="15%" height="10"/>
                    <rect x="85%" y="35" rx="5" ry="5" width="10%" height="10"/>
                </ContentLoader>
            </div>
        );
    }

    if (transactions.length === 0) {
        return <div className="empty-history">
            <img src={NoneIcon} alt=""/>
            <h2>История финансов пуста</h2>
            <p>Пока-что вы не проводили никаких транзакций.</p>
        </div>;
    }

    return (
        <div className="transaction-history">
            {transactions.map(transaction => (
                <div key={transaction.id} className="transaction">
                    <div className="transaction-info">
                        <p className={`text-amount ${transaction.amount < 0 ? 'negative' : 'positive'}`}>
                            {transaction.amount < 0 ? transaction.amount : `+${transaction.amount}`}
                        </p>
                        <p className="text-type">{transaction.type}</p>
                    </div>
                    <div className="transaction-date">
                        <p className="text-date">{formatDate(transaction.date)}</p>
                        <p className="text-time">{transaction.time}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TransactionHistory;