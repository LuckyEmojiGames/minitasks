import styles from "./homePage.module.css";
///<reference types="vite-plugin-svgr/client" />
import Referral from "../../../shared/assets/images/mainPage/referall.svg?react";
import Projects from "../../../shared/assets/images/mainPage/projects.svg?react";
import Labor from "../../../shared/assets/images/mainPage/labor.svg?react";
import Invest from "../../../shared/assets/images/mainPage/invest.svg?react";
import Quest from "../../../shared/assets/images/mainPage/taskFlag.svg?react";
import Team from "../../../shared/assets/images/mainPage/people.svg?react";
import Lock from "../../../shared/assets/images/mainPage/lock.svg?react";
import Evo from "../../../shared/assets/images/mainPage/evo.svg?react";
import Project from "../../../shared/assets/images/mainPage/Project.svg?react";
import { Link } from "react-router-dom";

const MainNavHex = [
  {
    name: "referall",
    text: (
      <>
        Referral
        <br /> system
      </>
    ),
    icon: <Referral width={44} height={45} />,
    show: true,
    path: "referalls",
  },
  {
    name: "projects",
    text: <>Projects</>,
    icon: <Projects width={40} height={40} />,
    show: false,
    path: "projects",
  },
  {
    name: "labor",
    text: (
      <>
        Labor
        <br /> exchange
      </>
    ),
    icon: <Labor width={40} height={40} />,
    show: true,
    path: "laborExchange",
  },
  {
    name: "invest",
    text: (
      <>
        Investment
        <br /> department
      </>
    ),
    icon: <Invest width={40} height={40} />,
    show: false,
    path: "investment",
  },
  {
    name: "quest",
    text: <>Quests</>,
    icon: <Quest width={38} height={38} />,
    show: false,
    path: "quests",
  },
  {
    name: "team",
    text: <>Team</>,
    icon: <Team width={43} height={43} />,
    show: false,
    path: "team",
  },
];

const HomePage = () => {
  return (
    <>
      <div className={styles.layout} />
      <div className={styles.info}>
        <h1 className={styles.title}>Ecosystem map</h1>
        <main className={styles.main}>
          <div className={styles.logo}>
            <Evo className={styles.evo} /> <Project className={styles.project}/>
          </div>
          {MainNavHex.map((el, i) => {
            return (
              <Link to={el.path} key={i} className={styles[el.name]}>
                <Lock
                  style={
                    el.show
                      ? { display: "none" }
                      : { position: "absolute", width: 40, height: 60, top: 5 }
                  }
                />
                <div className={el.show ? "" : styles.blur}>
                  {el.icon}
                  <p className={styles.textCard}>{el.text}</p>
                </div>
              </Link>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default HomePage;
