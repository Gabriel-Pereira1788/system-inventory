import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CellButton, CellRow, ContainerRow, Wrapper } from "./styles";
import InfoProduct from "../InfoProduct";
import { IProduct } from "../../interfaces/IProduct/IProduct";

type Props = {};

const Row = (product: IProduct) => {
  const { name_product, price_purchased, price_saled, storage } = product;
  const [show, setShow] = useState(false);

  const handleShowInformation = () => {
    setShow(!show);
  };
  return (
    <Wrapper>
      <ContainerRow>
        <CellRow>{name_product}</CellRow>
        <CellRow> {price_purchased} </CellRow>
        <CellRow> {price_saled} </CellRow>
        <CellRow> {storage} </CellRow>
        <CellButton showInformation={show} width="250px">
          <KeyboardArrowDownIcon onClick={handleShowInformation} />
        </CellButton>
      </ContainerRow>
      <InfoProduct showInformation={show} product={product} />
    </Wrapper>
  );
};

export default Row;
