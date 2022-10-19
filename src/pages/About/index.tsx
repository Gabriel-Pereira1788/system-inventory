import React from "react";
import about from "../../constants/about";
import { Card, Container, Text, Title, Wrapper } from "./styles";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Card>
            <Title>Proposta</Title>
            <Text>{about.ABOUT_TEXT}</Text>
          </Card>
        </Wrapper>
      </Container>
    </>
  );
};

export default About;
