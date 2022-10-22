import React, { useState } from "react";
import about from "../../constants/about";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Card,
  Container,
  ContainerTitle,
  Text,
  Title,
  Wrapper,
} from "./styles";
import carouselData from "../../mock/carouselData";
import Carousel from "../../components/Carousel";
import UsedTecnologies from "../../components/UsedTecnologies";

type Props = {};

const renderData = (dataRender: { title: string; content: string }) => {
  if (dataRender.title === "Tecnologias") {
    return (
      <>
        <ContainerTitle>
          <Title>{dataRender.title}</Title>
        </ContainerTitle>
        <Text>{dataRender.content}</Text>
        <UsedTecnologies />
      </>
    );
  }

  return (
    <>
      <ContainerTitle>
        <Title>{dataRender.title}</Title>
      </ContainerTitle>
      <Text>{dataRender.content}</Text>
    </>
  );
};

const About = (props: Props) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Carousel
            dataRender={carouselData}
            renderMethod={renderData}
            autoSlide
          />
        </Wrapper>
      </Container>
    </>
  );
};

export default About;
