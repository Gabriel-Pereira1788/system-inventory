import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Card, Info, Percentage } from "./styles";

type Props = {
  title: string;
  value: number;
  subTitle: string;
};

const CardControl = ({ title, value, subTitle }: Props) => {
  const percentage = 60;
  return (
    <Card>
      <Info>
        <h3>{title}</h3>
        <span>{value}</span>
        <h3>{subTitle}</h3>
      </Info>
      <Percentage>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#BBB2B2",
            trailColor: "#fff",
            pathColor: `rgba(19, 19, 19, ${percentage / 100} )`,
          })}
        />
      </Percentage>
    </Card>
  );
};

export default CardControl;
