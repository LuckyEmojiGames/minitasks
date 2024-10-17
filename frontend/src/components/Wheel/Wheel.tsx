import { useEffect, useState } from 'react';
import styles from './Wheel.module.scss';
import { Wheel } from "react-custom-roulette";
import axiosInstance from "../../fetcher.ts";
import { toast, ToastContainer, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [prizeNumberIndex, setPrizeNumberIndex] = useState(0);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


     useEffect(() => {
        axiosInstance.get('/v1/wheel-of-fortune/get-spin-values')
            .then(response => {
                const spinValuesData = response.data.values;
                const mappedData = spinValuesData.map((item: { value: number }) => ({
                    option: `${item.value} EVP`,
                    style: { backgroundColor: '#005499' }
                }));
                console.log(mappedData);
                setData(mappedData);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const handleSpinClick = () => {
        axiosInstance.get('/v1/wheel-of-fortune/spin')
            .then(response => {
                console.log(response.data);
                const spinData = response.data;
                if (spinData.is_possible === true) {
                    setPrizeNumberIndex(spinData.spin_value);
                    setPrizeNumber(data[spinData.spin_value]);
                    setMustSpin(true);
                }
                if (spinData.is_possible === false) {
                    alert(spinData.message);
                }
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    };



    if (loading) {
        return <div>Loading...</div>;
    }

    const handleStopSpinning = () => {
         // @ts-ignore
        toast.success(`Вы получили ${prizeNumber.option}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        setMustSpin(false);
    };

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
            <div className={styles.WheelBlock}>
                <div className={styles.titleBlock}>
                    <span className={styles.title}>Колесо фортуны</span>
                    <span className={styles.subTitle}>
                        Вы можете прокручивать колесо фортуны раз в 8 часов, получая из него EVP
                    </span>
                </div>
                <div className={styles.wheelText}>
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumberIndex}
                        data={data}
                        innerRadius={40}
                        perpendicularText={true}
                        textDistance={70}
                        fontSize={18.5}
                        backgroundColors={['#008CFF', '#008CFF']}
                        textColors={['#ACCDFF']}
                        outerBorderWidth={0}
                        radiusLineWidth={2}
                        spinDuration={0.3}
                        radiusLineColor={'rgba(46, 129, 255, 0.10)'}
                        onStopSpinning={handleStopSpinning}
                        pointerProps={{
                            src: '/src/assets/images/stub/roulet_arrow.svg',
                            style: {
                                transform: 'rotate(45deg)',
                                top: '-10px',
                                right: '-20px',
                                marginRight: '10px',
                                width: '120px',
                                height: '120px',
                            },
                        }}
                    />
                </div>
                <div className={styles.go_wrapper} onClick={handleSpinClick}>
                    <div className={styles.block}></div>
                    <button className={styles.go}>GO</button>
                </div>
            </div>
        </>
    );
};