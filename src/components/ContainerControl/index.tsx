import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardControl from "../CardControl";
import LineChart from "../LineChart";
import { Container } from "./styles";
import { RootState, useAppDispatch } from "../../store/store";

import { IChart } from "../../interfaces/IChart/IChart";
import {
  asyncGetStatistics,
  returnDefaultState,
} from "../../store/Statistics/Statistics.store";
import Loading from "../Loading";
import CardInfoTotal from "../CardInfoTotal";
import { CARDS_DATA } from "../../constants/cards";
type Props = {};

const ContainerControl = (props: Props) => {
  const { user } = useSelector((state: RootState) => state.user);
  const { loading } = useSelector((slice: RootState) => slice.statistics);
  const { statisticsMonths, statisticsTotal, relevantStatistics } = useSelector(
    (slice: RootState) => slice.statistics
  );
  const dispatch = useAppDispatch();

  const [labels, setLabels] = useState<string[]>([]);

  const [optionChart, setOptionChart] = useState<IChart>({
    label: "test",
    data: [],
    borderColor: "#ECD64F",
    backgroundColor: "#ECD64F",
    tension: 0.4,
  });

  useEffect(() => {
    if (user) dispatch(asyncGetStatistics(user.uid));
  }, []);

  useEffect(() => {
    if (statisticsMonths) {
      const keys = Object.keys(statisticsMonths);
      const dataChart = Object.values(statisticsMonths).map(
        (month) => month.total_piece_sales
      );
      setLabels(keys);
      setOptionChart((prevState) => ({ ...prevState, data: dataChart }));
    }
  }, [statisticsMonths]);

  const optionsChart = {
    labels: labels,
    datasets: [optionChart],
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <CardInfoTotal />
      <div className="cards">
        {relevantStatistics?.data_last_month && (
          <CardControl
            information={CARDS_DATA.INFO_LAST_MONTH}
            showPercentage
            title="Renda total"
            data={relevantStatistics.data_last_month}
            value={relevantStatistics.data_last_month.sales_amount}
            subTitle="ultimo mes"
          />
        )}
        {!relevantStatistics?.data_last_month && (
          <CardControl
            information={CARDS_DATA.INFO_LAST_MONTH}
            alert
            showPercentage
            title="Renda total"
            value={1}
            subTitle="ultimo mes"
          />
        )}
        {relevantStatistics?.data_current_month && (
          <CardControl
            information={CARDS_DATA.INFO_CURRENT_MONTH}
            showPercentage
            title="Total"
            data={relevantStatistics.data_current_month}
            value={relevantStatistics.data_current_month.sales_amount}
            subTitle="Este mes"
          />
        )}
        {!relevantStatistics?.data_current_month && (
          <CardControl
            information={CARDS_DATA.INFO_CURRENT_MONTH}
            alert
            showPercentage
            title="Total"
            value={1}
            subTitle="um mes"
          />
        )}
        {statisticsTotal?.total_storage && (
          <CardControl
            information={CARDS_DATA.INFO_STORAGE}
            showPercentage
            title="Em estoque"
            dataTotal={statisticsTotal}
            value={statisticsTotal.total_storage}
            subTitle="Total"
          />
        )}
        {!statisticsTotal?.total_storage && (
          <CardControl
            alert
            information={CARDS_DATA.INFO_STORAGE}
            showPercentage
            value={1}
            title="Em estoque"
            subTitle="Total"
          />
        )}
      </div>
      <div className="graph-line card">
        <LineChart chartData={optionsChart} />
      </div>
    </Container>
  );
};

export default ContainerControl;
