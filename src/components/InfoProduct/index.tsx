import React from "react";
import {
  Container,
  ContainerInfo,
  ContainerCard,
  WrapperInputs,
  Form,
  Input as input,
  Label,
  Input,
  Text,
  Trash,
  ConfirmButton,
} from "./styles";
import InventoryIcon from "@mui/icons-material/Inventory";
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsCheckCircle,
} from "react-icons/bs";
import CardControl from "../CardControl";

type Props = {
  showInformation: boolean;
};

const InfoProduct = ({ showInformation }: Props) => {
  return (
    <ContainerInfo showInformation={showInformation}>
      {showInformation && (
        <>
          <InventoryIcon style={{ fontSize: "8em" }} />
          <Container>
            <Trash>
              <BsFillTrashFill color="red" cursor="pointer" />
            </Trash>
            <ContainerCard>
              <CardControl
                showPercentage
                width="20%"
                title="Renda total"
                subTitle="Ultimo més"
                value={200}
              />
              <CardControl
                showPercentage
                width="20%"
                title="Renda total"
                subTitle="Més atual"
                value={200}
              />
              <CardControl
                showPercentage
                width="20%"
                title="Em estoque"
                value={200}
              />
            </ContainerCard>
            <Form>
              <WrapperInputs>
                <Label>
                  <Text>Nome:</Text>
                  <Input type="text" value="tenis" />
                  <BsFillPencilFill />
                </Label>
                <Label>
                  <Text>Preço C.:</Text>
                  <Input type="text" value="59.99" />
                  <BsFillPencilFill />
                </Label>
                <Label>
                  <Text>Preço V:</Text>
                  <Input type="text" value="59.99" />
                  <BsFillPencilFill />
                </Label>
                <Label>
                  <Text>Vendas:</Text>
                  <Input type="text" placeholder="Vender" />
                  <input type="checkbox" name="sale" className="check" />
                </Label>
                <Label>
                  <Text>Reposição:</Text>
                  <Input type="text" placeholder="repor estoque?" />
                  <input type="checkbox" name="purchase" className="check" />
                </Label>
              </WrapperInputs>
              <ConfirmButton>
                <span>Confirmar</span>
                <BsCheckCircle />
              </ConfirmButton>
            </Form>
          </Container>
        </>
      )}
    </ContainerInfo>
  );
};

export default InfoProduct;
