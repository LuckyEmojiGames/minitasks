import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import "./Statistics.css";

type StatisticsData = {
    replenished: number;
    withdrawn: number;
    earned: number;
    paid: number;
};

const Statistics: React.FC = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("за сегодня");
    const [statistics, setStatistics] = useState<StatisticsData>({
        replenished: 0,
        withdrawn: 0,
        earned: 0,
        paid: 0
    });
    const [loading, setLoading] = useState(true);

    const handlePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPeriod(event.target.value);
    };

    useEffect(() => {
        const mockData: { [key: string]: StatisticsData } = {
            "за сегодня": { replenished: 100, withdrawn: 50, earned: 200, paid: 150 },
            "за 3 дня": { replenished: 300, withdrawn: 150, earned: 600, paid: 450 },
            "за 7 дней": { replenished: 700, withdrawn: 350, earned: 1400, paid: 1050 },
            "за месяц": { replenished: 3000, withdrawn: 1500, earned: 6000, paid: 4500 }
        };

        const fetchStatistics = async () => {
            setLoading(true);
            try {
                const data = mockData[selectedPeriod];
                setTimeout(() => {
                    setStatistics(data);
                    setLoading(false);
                }, 1500);
            } catch (error) {
                console.error("Failed to fetch statistics", error);
                setLoading(false);
            }
        };

        fetchStatistics();
    }, [selectedPeriod]);

    const Loader = () => (
        <ContentLoader
            speed={2}
            width={50}
            height={20}
            viewBox="0 0 50 20"
            backgroundColor="#0B1B35"
            foregroundColor="#1A2A4A"
        >
            <rect x="60%" y="0" rx="5" ry="5" width="20" height="20" />
        </ContentLoader>
    );

    return (
        <>
            <div className="statistics-header">
                <h2>Статистика</h2>
                <select value={selectedPeriod} onChange={handlePeriodChange} className="custom-dropdown">
                    <option value="за сегодня">за сегодня</option>
                    <option value="за 3 дня">за 3 дня</option>
                    <option value="за 7 дней">за 7 дней</option>
                    <option value="за месяц">за месяц</option>
                </select>
            </div>

            <div className="statistics-content">
                <div className="statistics-item">
                    Пополнено
                    <span className="loader-container">{loading ? <Loader /> : statistics.replenished}</span>
                </div>
                <div className="statistics-item">
                    Выведено
                    <span className="loader-container">{loading ? <Loader /> : statistics.withdrawn}</span>
                </div>
                <div className="statistics-item">
                    Заработано
                    <span className="loader-container">{loading ? <Loader /> : statistics.earned}</span>
                </div>
                <div className="statistics-item">
                    Оплачено
                    <span className="loader-container">{loading ? <Loader /> : statistics.paid}</span>
                </div>
            </div>
        </>
    );
};

export default Statistics;