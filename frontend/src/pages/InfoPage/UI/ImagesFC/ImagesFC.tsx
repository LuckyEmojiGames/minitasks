import React from "react";
import hands from "../../../../shared/assets/images/onboarding/hands.png";
import piggy from "../../../../shared/assets/images/onboarding/piggy.png";
import graphs from "../../../../shared/assets/images/onboarding/graphs.png";
import people from "../../../../shared/assets/images/onboarding/manyPeople.png";
import hats from "../../../../shared/assets/images/onboarding/heat.png";

export const HandsImageFC: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${hands})`,
        width: "calc(100%)",
        height: "calc(60%)",
        position: "fixed", 
        bottom: "0px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
};

export const PggyImageFC: React.FC = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${piggy})`,
          width: "100%", 
          height: "60%", 
          position: "fixed", 
          bottom: "0",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
        }}
      />
    );
  };

  export const GraphsImageFC: React.FC = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${graphs})`,
          width: "100%", 
          height: "50%", 
          position: "fixed", 
          bottom: "0",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
        }}
      />
    );
  };

  export const PeopleImageFC: React.FC = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${people})`,
          width: "100%", 
          height: "70%", 
          position: "fixed", 
          bottom: "0",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
        }}
      />
    );
  };

  export const HatImageFC: React.FC = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${hats})`,
          width: "100%", 
          height: "60vh", 
          position: "fixed", 
          bottom: "0",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
        }}
      />
    );
  };
  
