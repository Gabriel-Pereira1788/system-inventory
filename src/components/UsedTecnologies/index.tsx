import React from "react";
import { Container, Grid, Tecnologie } from "./styles";

type Props = {};

const UsedTecnologies = (props: Props) => {
  return (
    <Container>
      <Grid>
        <Tecnologie>React</Tecnologie>
        <Tecnologie>Typescript</Tecnologie>
        <Tecnologie>Redux</Tecnologie>
        <Tecnologie>Styled Components</Tecnologie>
        <Tecnologie>Axios</Tecnologie>
        <Tecnologie>Chart JS</Tecnologie>
        <Tecnologie>Firebase</Tecnologie>
        <Tecnologie>NodeJs</Tecnologie>
        <Tecnologie>MongoDB</Tecnologie>
      </Grid>
    </Container>
  );
};

export default UsedTecnologies;
