import React, { useState } from "react";
import styles from "./infopages.module.css";
import ProgressBar from "./ProgressBar";
import { Button } from "../../../shared/UI/Button";
///<reference types="vite-plugin-svgr/client" />
import Arrow from "../../../shared/assets/images/onboarding/arrow.svg?react";
import Play from "../../../shared/assets/images/onboarding/play.svg?react";
import {
  HandsImageFC,
  HatImageFC,
  PggyImageFC,
  GraphsImageFC,
  PeopleImageFC,
} from "./ImagesFC/ImagesFC";

const pagesContent = [
  {
    name: (
      <>
        Welcome
        <br /> to Evo Project!
      </>
    ),
    description: (
      <>
        We are glad to see you in our innovative <br />
        an environment where knowledge is combined
        <br /> with technology.
        <br />
        <br />
        Let's go on an exciting adventure together
        <br />
        a journey where every step brings you closer
        <br />
        to new heights!
      </>
    ),
    images: <HandsImageFC />,
  },
  {
    name: "Earn $EVP!",
    description:
      <>In Evo Project you can earn $EVP,<br/> 
      completing various tasks and receiving achievements. <br/>
      <br/>
      Your every success and progress brings you<br/>
       rewards that can be used <br/>
      on the platform or sell it later. <br/>
      <br/>
      Our lessons open up new ones for you <br/>
      opportunities for growth and development!</>,
    images: <PggyImageFC />,
  },
  {
    name: <>Launch a startup <br/>with us!</>,
    description:
      <>Are you interested in the activities of blockchain projects?<br/>
        <br/>
      Evo Project provides a unique opportunity <br/>
      launch your own startup directly on <br/>
      platform! <br/>
      <br/>
      Create innovative projects <br/>
      get support from the community and follow <br/>
      their success in real time. <br/>
      <br/>
      Your ideas can change the world!</>,
    images: <GraphsImageFC />,
  },
  {
    name: <>Create a team <br/>
right in the game!</>,
    description:
      <>To achieve great results it is important<br/>
      work as a team. In Evo Project you can <br/>
      create your own team, <br/>
      gather like-minded people and work together <br/>
      move towards your goals. <br/>
      <br/>
      Work together, share knowledge and <br/>
      experience and achieve outstanding results!</>,
    images: <PeopleImageFC />,
  },
  {
    name: <>Learn together<br/>
with us!</>,
    description:
      <>Our blockchain training course offers<br/>
      you have a deep understanding of this advanced <br/>
      technologies. Master the basics and advanced concepts<br/>
      blockchain that will help you secure <br/>
      your knowledge and successfully manage <br/>
      with your projects. <br/>
      <br/>
      Discover the opportunities that <br/>
      provides blockchain, and put them into practice!</>,
    images: <HatImageFC />,
  },
];

type InfoPagesProps = {
  onFinish: () => void;
};

const PageInfo: React.FC<InfoPagesProps> = ({ onFinish }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const handleNext = () => {
    if (currentPage < pagesContent.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      onFinish();
    }
  };

  return (
    <div className={styles.layout}>
      <ProgressBar
        filledCells={currentPage + 1}
        totalCells={pagesContent.length}
      />
      <h2 className={styles.title}>{pagesContent[currentPage].name}</h2>
      <p className={styles.infoText}>{pagesContent[currentPage].description}</p>
      {pagesContent[currentPage].images}
        <Button onClick={handleNext} className={styles.btnNext}>
          {currentPage < pagesContent.length - 1 ? (
            <>
              <p>Next</p>
              <Arrow style={{ marginTop: "3px" }} />
            </>
          ) : (
            <>
              <Play />
              <p style={{ marginTop: "-3px" }}>Play</p>
            </>
          )}
        </Button>
    </div>
  );
};

export default PageInfo;
