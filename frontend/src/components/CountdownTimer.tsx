import React, { useEffect, useState } from 'react';
import styles from './StubScreenUI/StubScreenUI.module.scss';

const CountdownTimer: React.FC<{ targetSeconds: number }> = ({ targetSeconds }) => {
    const calculateTimeLeft = (seconds: number) => {
        return {
            hours: Math.floor((seconds / 3600) % 24),
            minutes: Math.floor((seconds / 60) % 60),
            seconds: Math.floor(seconds % 60)
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetSeconds));
    const [secondsLeft, setSecondsLeft] = useState(targetSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                const newSecondsLeft = prev - 1;
                setTimeLeft(calculateTimeLeft(newSecondsLeft));
                return newSecondsLeft;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetSeconds]);

    const formatTime = (time: number) => time.toString();

    return (
        <div className={styles.time}>
            {secondsLeft > 0 ? (
                <>
                    Через {formatTime(timeLeft.hours)}ч {formatTime(timeLeft.minutes)}м {formatTime(timeLeft.seconds)}с
                </>
            ) : (
                'Время истекло'
            )}
        </div>
    );
};

export default CountdownTimer;