// frontend/src/screens/StubScreen.tsx
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import axiosInstance from "../fetcher";
import UserI from "../interfaces/user";
import StubScreenUI from "../components/StubScreenUI/StubScreenUI.tsx";
import ReferralsCountI from "../interfaces/referrals_count.ts";
import cl from '../components/StubScreenUI/StubScreenUI.module.scss'
import copy_button from '../assets/images/stub/copy_button.svg'
import info_icon from '../assets/images/stub/info_icon.png'
import {retrieveLaunchParams} from "@telegram-apps/sdk";

import CountdownTimer from "../components/CountdownTimer";
import Wheel from "../components/Wheel/Wheel.tsx";
import {BlockInfo} from "../components/StubScreenUI/blockInfo";
import {SecondColl} from "../components/StubScreenUI/secondColl";
import {Friend} from "../components/StubScreenUI/refferals/friend";
import {Gift} from "../components/StubScreenUI/gift";
import {BackIcon} from "../assets/icons/BackIcon.tsx";
import {useNavigate} from "react-router-dom";
import ReferralsProgramI from "../interfaces/referral_programm.ts";
import {Bounce, ToastContainer} from "react-toastify";

const {initDataRaw} = retrieveLaunchParams();


const StubScreen: React.FC = () => {

    const {t: t_stub} = useTranslation('stub');
    // const {t: t_common} = useTranslation('common');

    const [user, setUser] = useState<UserI | null>(null);
    const [referralsCount, setReferralsCount] = useState<ReferralsCountI | null>(null);
      const [targetDate, setTargetDate] = useState<number>(0);

    const [referralsProgram, setReferralsProgram] = useState<ReferralsProgramI | null>(null);

    // @ts-ignore
    const app_link = import.meta.env.VITE_APP_LINK

    console.log(initDataRaw)

    useEffect(() => {
        axiosInstance.get('/v1/get_user_info')
            .then(response => {
                const userData: UserI = response.data;
                setUser(userData);
                 setTargetDate(userData.time_to_possible_spin)
                // alert(targetDate)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    useEffect(() => {
        axiosInstance.get('/v1/get_user_referrals_count')
            .then(response => {
                const referrals_count: ReferralsCountI = response.data;
                setReferralsCount(referrals_count);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        axiosInstance.get('/v1/points/get-referral-program')
            .then(response => {
                const referral_program: ReferralsProgramI = response.data;
                setReferralsProgram(referral_program);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            // toast.info('Ссылка скопирована', {
            // position: "top-center",
            // autoClose: 5000,
            // hideProgressBar: false,
            // closeOnClick: true,
            // pauseOnHover: true,
            // draggable: true,
            // progress: undefined,
            // theme: "colored",
            // transition: Bounce,
            // });
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    const [isBlockVisible, setIsBlockVisible] = useState(false);
    const [isFortuneVisible, setIsFortuneVisible] = useState(false);

    const toggleBlockVisibility = () => {
        setIsBlockVisible(!isBlockVisible);
    };

    const toggleFortuneVisibility = () => {
        axiosInstance.get('/v1/get_user_info')
            .then(response => {
                const userData: UserI = response.data;
                setUser(userData);
            })
            .catch(error => {
                console.error(error);
            });
        setIsFortuneVisible(!isFortuneVisible);
    };

    const nav = useNavigate()


    return (
        <StubScreenUI>
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
            {isFortuneVisible && (
                <div className={cl.FortuneBlock}>
                    <div onClick={toggleFortuneVisibility} className={cl.backBlock}>
                        <BackIcon/>
                    </div>
                    <Wheel/>
                </div>
            )}
            {isBlockVisible && referralsProgram && (
                <>
                    <div className={cl.blur} onClick={toggleBlockVisibility}></div>
                    <div className={cl.popup} onClick={toggleBlockVisibility}>
                        <div className={cl.modalHeaderClose} onClick={toggleBlockVisibility}>
                            <BackIcon/>
                        </div>
                        <div className={cl.back}></div>
                        <div className={cl.modal}>
                            <div className={cl.modalHeader}>
                                <div className={cl.modalHeaderTitle}>Подробнее <br/>о вознаграждении</div>
                            </div>
                            <div className={cl.modalBody}>
                                <div className={cl.columns}>
                                    <div className={cl.column}>
                                        <div className={cl.headerFriend}>
                                            Друзья без <br/> Premium
                                        </div>
                                        <div className={cl.rows}>
                                            <div className={cl.row}>{referralsProgram.default.FIRST_LEVEL_REFERRAL} EVP
                                                за 1 уровень
                                            </div>
                                            <div className={cl.row}>{referralsProgram.default.SECOND_LEVEL_REFERRAL} EVP
                                                за 2 уровень
                                            </div>
                                            <div className={cl.row}>{referralsProgram.default.THIRD_LEVEL_REFERRAL} EVP
                                                за 3 уровень
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{
                                        borderRadius: '10px',
                                        background: 'rgba(255, 255, 255, 0.20)',
                                        width: '1px'
                                    }}></div>
                                    <div className={cl.column}>
                                        <div className={cl.headerFriend} style={{textAlign: 'right'}}>
                                            Друзья с <br/> Premium
                                        </div>
                                        <div className={cl.rows}>
                                            <div
                                                className={cl.row}>{referralsProgram.tg_premium.FIRST_LEVEL_REFERRAL} EVP
                                                за 1 уровень
                                            </div>
                                            <div
                                                className={cl.row}>{referralsProgram.tg_premium.SECOND_LEVEL_REFERRAL} EVP
                                                за 2 уровень
                                            </div>
                                            <div
                                                className={cl.row}>{referralsProgram.tg_premium.THIRD_LEVEL_REFERRAL} EVP
                                                за 3 уровень
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>

            )}
            {user && (
                <>
                    <img src={info_icon} className={cl.info_icon} alt="Coins" onClick={toggleBlockVisibility}/>
                    <div className={cl.inviteFriends}>
                        <span onClick={() => nav('/test')} className={cl.inviteFriendsTitle}>
                            {t_stub('Invite friends')}
                        </span>

                        <div className={cl.blockSubTitle}>
                            <span className={cl.inviteFriendsSubTitle}>
                                {t_stub('HTML_increase_your_social_capital')}
                            </span>
                            <span className={cl.inviteFriendsSubTitle}>
                                {t_stub('Two')}
                            </span>
                        </div>

                    </div>

                    <div className={cl.secondBlock}>
                        <div className={cl.firstCol}>
                            <BlockInfo title={'Ваш баланс'} value={user.points_balance} type={'EVP'}/>
                            <BlockInfo title={'Всего друзей'} value={referralsCount?.all} type={'чел'}/>
                        </div>
                        <SecondColl/>
                    </div>

                    {referralsCount && (
                        <div className={cl.refferals}>

                            <div className={cl.refferalsCount}>
                                <Friend title={'Друг'} level={1} referralsCount={referralsCount.first_level}/>
                                <Friend title={'Друзей'} level={2} referralsCount={referralsCount.second_level}/>
                                <Friend title={'Друзей'} level={3} referralsCount={referralsCount.third_level}/>
                            </div>
                            {/*<img src={radian_friend} className={cl.radian} />*/}
                            <div className={cl.refferalsLink}>
                                <div className={cl.link}>
                                    {app_link}?startapp={user.telegram_id}
                                </div>
                                <img src={copy_button} alt="Copy link"
                                     onClick={() => copyToClipboard(`${app_link}?startapp=${user.telegram_id}`)}/>
                            </div>
                        </div>
                    )}

                    <div className={cl.wheel} onClick={toggleFortuneVisibility}>
                        <span className={cl.wheel_title}>Колесо фортуны</span>
                        <div className={cl.wheel_timer}>
                            <div className={cl.title}>Будет доступно</div>
                            <div className={cl.time}>
                                <CountdownTimer targetSeconds={targetDate}/>
                            </div>
                        </div>
                    </div>

                    <Gift/>

                </>
            )}
        </StubScreenUI>
    );
}

export default StubScreen;