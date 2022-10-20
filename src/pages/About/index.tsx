import React, { useState } from "react";
import about from "../../constants/about";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Card, Container, Text, Title, Wrapper } from "./styles";
import carouselData from "../../mock/carouselData";
import Carousel from "../../components/Carousel";
import UsedTecnologies from "../../components/UsedTecnologies";

type Props = {};

const renderData = (dataRender: { title: string; content: string }) => {
  if (dataRender.title === "Tecnologias") {
    return (
      <>
        <Title>{dataRender.title}</Title>
        <Text>Teste render condicional</Text>
        <UsedTecnologies />
      </>
    );
  }

  return (
    <>
      <Title>{dataRender.title}</Title>
      <Text>{dataRender.content}</Text>
    </>
  );
};

const About = (props: Props) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Carousel dataRender={carouselData} renderMethod={renderData} />
        </Wrapper>
      </Container>
    </>
  );
};

export default About;
