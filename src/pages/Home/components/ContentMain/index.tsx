import React from "react";
import { AboutUs, BackgroundAbout, WrapperMain } from "../../styles";

type Props = {};

const ContentMain = (props: Props) => {
  return (
    <WrapperMain>
      <BackgroundAbout>
        <AboutUs>
          <h3>Conheça um pouco do projeto</h3>
          <button>Sobre nos</button>
        </AboutUs>
      </BackgroundAbout>
    </WrapperMain>
  );
};

export default ContentMain;
