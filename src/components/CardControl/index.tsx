import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import {
  IStatiticsPerMonth,
  IStatiticsTotal,
} from "../../interfaces/Date/IDate";
import { calculatePercentage } from "../../utils/calculatePercentage";
import CardInfo from "../CardInfo";
import CardInfoTotal from "../CardInfoTotal";

import {
  Alert,
  Card,
  CardAlert,
  ContainerAlert,
  Info,
  Percentage,
  Wrapper,
} from "./styles";

type Props = {
  title: string;
  value: number;
  subTitle?: string;
  data?: IStatiticsPerMonth;
  dataTotal?: IStatiticsTotal;
  width?: string;
  showPercentage?: boolean;
  alert?: boolean;
  information: string;
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
  information,
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
      <CardInfo information={information} />
      <Wrapper>
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
      </Wrapper>
      {alert && (
        <CardAlert>
          <CardInfo information={information} />
          <ContainerAlert>
            <Alert>Dados insuficientes</Alert>
          </ContainerAlert>
        </CardAlert>
      )}
    </Card>
  );
};

export default CardControl;
