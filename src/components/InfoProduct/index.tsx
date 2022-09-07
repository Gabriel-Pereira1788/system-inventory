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
import { IProduct } from "../../interfaces/IProduct/IProduct";

type Props = {
  showInformation: boolean;
  product: IProduct;
};

const InfoProduct = ({ showInformation, product }: Props) => {
  const { name_product, price_purchased, price_saled, storage } = product;
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
                value={storage}
              />
            </ContainerCard>
            <Form>
              <WrapperInputs>
                <Label>
                  <Text>Nome:</Text>
                  <Input type="text" value={name_product} />
                  <BsFillPencilFill />
                </Label>
                <Label>
                  <Text>Preço C.:</Text>
                  <Input type="text" value={price_purchased} />
                  <BsFillPencilFill />
                </Label>
                <Label>
                  <Text>Preço V:</Text>
                  <Input type="text" value={price_saled} />
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
