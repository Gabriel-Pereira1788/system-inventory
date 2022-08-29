import React, { useEffect, useState } from "react";
import { dataC, dataSales } from "../../mock/data";
import { calculatePerMonth } from "../../utils/calculatePerMonth";
import CardControl from "../CardControl";
import LineChart from "../LineChart";
import { Container, ContainerInfos, Info, InfoProduct } from "./styles";
type Props = {};

const ContainerControl = (props: Props) => {
  const testData = {
    labels: ["Janeiro", "Feveireiro", "Abril", "Maio", "Junho", "Julho"],
    datasets: [
      {
        label: "test",
        data: dataC.map((dt) => dt.price),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.1,
      },
    ],
  };

  useEffect(() => {
    calculatePerMonth("xxx1", dataSales);
  }, []);
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
        <CardControl title="Total" value={2000} subTitle="ultimo mes" />
        <CardControl title="Total" value={2000} subTitle="ultimo mes" />
        <CardControl title="Total" value={2000} subTitle="ultimo mes" />
      </div>
      <div className="graph-line card">
        <LineChart chartData={testData} />
      </div>
    </Container>
  );
};

export default ContainerControl;
