import React from "react";
import "./progressbar.css";

interface ProgressBarProps {
  totalCells: number;
  filledCells: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalCells,
  filledCells,
}) => {
  return (
    <div className="cells">
      {Array.from({ length: totalCells }).map((_, index) => (
        <div
          className={ index < filledCells ? "cellItem_filled": "cellItem"}
          key={index}
        ><div className={ index < filledCells ? "shadow": "none"}></div></div>
      ))}
    </div>
  );
};

export default ProgressBar;
