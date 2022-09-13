import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  IStatiticsPerMonth,
  IStatiticsTotal,
} from "../../interfaces/Date/IDate";
import { calculatePercentage } from "../../utils/calculatePercentage";

import { Alert, Card, CardAlert, Info, Percentage } from "./styles";

type Props = {
  title: string;
  value: number;
  subTitle?: string;
  data?: IStatiticsPerMonth;
  dataTotal?: IStatiticsTotal;
  width?: string;
  showPercentage?: boolean;
  alert?: boolean;
};

const CardControl = ({
  title,
  value,
  subTitle,
  data,
  dataTotal,
  width,
  showPercentage,
  alert,
}: Props) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (dataTotal) {
      const calculate = calculatePercentage(value, dataTotal.total_storage);
      setPercentage(calculate);
    }

    if (data) {
      const calculate = calculatePercentage(
        data.total_piece_sales,
        data.storage_month
      );
      setPercentage(calculate);
    }
  }, [data, dataTotal]);
  return (
    <Card width={width}>
      <Info>
        <h3>{title}</h3>
        <span>{value}</span>
        <h3>{subTitle}</h3>
      </Info>
      {showPercentage && (
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
      )}
      {alert && (
        <CardAlert>
          <Alert>Dados insuficientes</Alert>
        </CardAlert>
      )}
    </Card>
  );
};

export default CardControl;
