import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IStatiticsPerMonth } from "../../interfaces/Date/IDate";
import { calculatePercentage } from "../../utils/calculatePercentage";

import { Card, Info, Percentage } from "./styles";

type Props = {
  title: string;
  value: number;
  subTitle: string;
  data?: IStatiticsPerMonth;
  width?: string;
};

const CardControl = ({ title, value, subTitle, data, width }: Props) => {
  const percentage = data
    ? calculatePercentage(data.total_piece_sales, data.storage_month)
    : 60;
  return (
    <Card width={width}>
      <Info>
        <h3>{title}</h3>
        <span>{value}</span>
        <h3>{subTitle}</h3>
      </Info>
      <Percentage>
        <CircularProgressbar
          value={percentage}
          text={`${percentage.toFixed(1)}%`}
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
