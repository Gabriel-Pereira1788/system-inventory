import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dataC, dataSales } from "../../mock/data";
import { calculatePerMonth } from "../../utils/calculatePerMonth";
import CardControl from "../CardControl";
import LineChart from "../LineChart";
import { Container, ContainerInfos, Info, InfoProduct } from "./styles";
import { RootState } from "../../store/store";
import { MONTHS_DATA } from "../../mock/monthsData";
import { getRelevantStatistics } from "../../utils/relevantStatistics";
type Props = {};

const ContainerControl = (props: Props) => {
  const { user } = useSelector((state: RootState) => state.user);
  const { statisticsMonths, statisticsTotal } = useSelector(
    (slice: RootState) => slice.statistics
  );

  const statisticsRelevant =
    statisticsMonths && getRelevantStatistics(statisticsMonths);
  console.log(statisticsRelevant);

  const testData = {
    labels: ["Janeiro", "Feveireiro", "Abril", "Maio", "Junho", "Julho"],
    datasets: [
      {
        label: "test",
        data: dataC.map((dt) => dt.priceSale),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.1,
      },
    ],
  };

  // useEffect(() => {
  //   // if (user) calculatePerMonth(dataSales);
  // }, []);
  return (
    <Container>
      <InfoProduct className="main-graph card">
        <ContainerInfos>
          <Info>
            <h3>vendidos</h3>
            <span>2200</span>
          </Info>
          <Info>
            <h3>disponiveis</h3>
            <span>1100</span>
          </Info>
        </ContainerInfos>
        <Info>
          <h3>Preço de venda</h3>
          <span>1.500</span>
        </Info>
      </InfoProduct>
      <div className="cards">
        {statisticsRelevant?.data_last_month && (
          <CardControl
            title="Renda total"
            data={statisticsRelevant.data_last_month}
            value={statisticsRelevant.data_last_month.sales_amount}
            subTitle="ultimo mes"
          />
        )}
        {statisticsRelevant?.data_current_month && (
          <CardControl
            title="Total"
            data={statisticsRelevant.data_current_month}
            value={statisticsRelevant.data_current_month.sales_amount}
            subTitle="um mes"
          />
        )}
        <CardControl title="Total" value={2000} subTitle="Durante 5 meses" />
      </div>
      <div className="graph-line card">
        <LineChart chartData={testData} />
      </div>
    </Container>
  );
};

export default ContainerControl;
