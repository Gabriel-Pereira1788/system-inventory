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
import { IRelevantStatistics } from "../../interfaces/IStatistics/IStatistics";
import { ChartOptions } from "chart.js";
import { IChart } from "../../interfaces/IChart/IChart";
type Props = {};

const ContainerControl = (props: Props) => {
  const { user } = useSelector((state: RootState) => state.user);
  const { statisticsMonths, statisticsTotal } = useSelector(
    (slice: RootState) => slice.statistics
  );
  console.log(statisticsMonths);

  const [labels, setLabels] = useState<string[]>([]);
  const [statisticsRelevant, setStatisticsRelevant] =
    useState<IRelevantStatistics | null>(null);
  const [optionChart, setOptionChart] = useState<IChart>({
    label: "test",
    data: [],
    borderColor: "#ECD64F",
    backgroundColor: "#ECD64F",
    tension: 0.4,
  });

  useEffect(() => {
    if (statisticsMonths) {
      const keys = Object.keys(statisticsMonths);
      const relevantData = getRelevantStatistics(statisticsMonths);
      const dataChart = Object.values(statisticsMonths).map(
        (month) => month.total_piece_sales
      );
      setLabels(keys);
      setStatisticsRelevant(relevantData);
      setOptionChart((prevState) => ({ ...prevState, data: dataChart }));
    }
  }, [statisticsMonths]);

  const optionsChart = {
    labels: labels,
    datasets: [optionChart],
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
            <span>{statisticsTotal && statisticsTotal.total_pieces_sales}</span>
          </Info>
          <Info>
            <h3>disponiveis</h3>
            <span>{statisticsTotal && statisticsTotal.total_storage}</span>
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
        <LineChart chartData={optionsChart} />
      </div>
    </Container>
  );
};

export default ContainerControl;
