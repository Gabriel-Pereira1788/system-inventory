import React from "react";
import { Container, ContainerInfo } from "./styles";
import InventoryIcon from "@mui/icons-material/Inventory";
import CardControl from "../CardControl";
import { ContainerCard } from "../CardControl/styles";

type Props = {
  showInformation: boolean;
};

const InfoProduct = ({ showInformation }: Props) => {
  return (
    <ContainerInfo showInformation={showInformation}>
      <InventoryIcon style={{ fontSize: "8em" }} />
      <Container>
        <ContainerCard>
          <CardControl
            width="20%"
            title="Renda total"
            subTitle="Ultimo més"
            value={200}
          />
          <CardControl
            width="20%"
            title="Renda total"
            subTitle="Més atual"
            value={200}
          />
        </ContainerCard>
      </Container>
    </ContainerInfo>
  );
};

export default InfoProduct;
