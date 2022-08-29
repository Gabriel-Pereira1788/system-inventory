import React from "react";
import { ContainerDots, ContainerIcons, Wrapper } from "./styles";
import { TbGridDots } from "react-icons/tb";
import PieChartIcon from "@mui/icons-material/PieChart";
import WorkIcon from "@mui/icons-material/Work";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

type Props = {};

const NavVertical = (props: Props) => {
  return (
    <Wrapper>
      <ContainerDots>
        <TbGridDots size={40} style={{ color: "rgb(203 198 198)" }} />
      </ContainerDots>
      <ContainerIcons>
        <Link to="/system">
          <PieChartIcon />
        </Link>
        <Link to="/products">
          <WorkIcon />
        </Link>
        <Link to="about">
          <InfoIcon />
        </Link>
      </ContainerIcons>
    </Wrapper>
  );
};

export default NavVertical;
