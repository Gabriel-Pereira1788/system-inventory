import React from "react";
import { Link } from "react-router-dom";
import {
  AboutUs,
  BackgroundAbout,
  Button,
  TitleAbout,
  WrapperMain,
} from "../../styles";

type Props = {};

const ContentMain = (props: Props) => {
  return (
    <WrapperMain>
      <BackgroundAbout>
        <AboutUs>
          <TitleAbout>Conheça um pouco do projeto</TitleAbout>
          <Link to="/about">
            <Button>Sobre nós</Button>
          </Link>
        </AboutUs>
      </BackgroundAbout>
    </WrapperMain>
  );
};

export default ContentMain;
