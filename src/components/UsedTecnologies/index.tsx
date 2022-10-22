import React from "react";
import { Container, Grid, Icon, Tecnologie } from "./styles";
import ReduxIcon from "../../assets/redux-icon.png";
import StyledIcon from "../../assets/styled-components.svg";
import ReactIcon from "../../assets/react-js-icon.png";
import MongoIcon from "../../assets/mongodb-icon.png";
import FirebaseIcon from "../../assets/google-firebase-icon.png";
import NodeIcon from "../../assets/node-js-icon.png";
import TypescriptIcon from "../../assets/typescript-programming-language-icon.png";
const chartIcon = "https://www.chartjs.org/img/chartjs-logo.svg";

type Props = {};
const UsedTecnologies = (props: Props) => {
  return (
    <Container>
      <Grid>
        <Tecnologie>
          <Icon src={ReactIcon} alt="" width="50px" />
        </Tecnologie>
        <Tecnologie>
          <Icon src={StyledIcon} width="50px" />
        </Tecnologie>
        <Tecnologie>
          <Icon src={ReduxIcon} width="50px" />
        </Tecnologie>
        <Tecnologie>
          <Icon src={TypescriptIcon} width="50px" />
        </Tecnologie>

        <Tecnologie>
          <Icon src={chartIcon} width="50px" />
        </Tecnologie>
        <Tecnologie>
          <Icon src={FirebaseIcon} width="30px" />
        </Tecnologie>
        <Tecnologie>
          <Icon src={NodeIcon} width="35px" />
        </Tecnologie>
        <Tecnologie>
          <Icon src={MongoIcon} width="25px" />
        </Tecnologie>
      </Grid>
    </Container>
  );
};

export default UsedTecnologies;
