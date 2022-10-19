import { memo, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CellButton, CellRow, ContainerRow, Wrapper } from "./styles";
import InfoProduct from "../InfoProduct";
import { IProduct } from "../../interfaces/IProduct/IProduct";
import { IRelevantStatistics } from "../../interfaces/IStatistics/IStatistics";
import { formatCurrency } from "../../utils/transformCurrency";

type Props = {
  relevantStatistics: IRelevantStatistics;
  product: IProduct;
};

const Row = ({ relevantStatistics, product }: Props) => {
  const { name_product, price_purchased, price_saled, storage } = product;
  const [show, setShow] = useState(false);

  const handleShowInformation = () => {
    setShow(!show);
  };
  return (
    <Wrapper>
      <ContainerRow>
        <CellRow>{name_product}</CellRow>
        <CellRow> {formatCurrency(price_purchased.toFixed(2))} </CellRow>
        <CellRow> {formatCurrency(price_saled.toFixed(2))} </CellRow>
        <CellRow> {storage} </CellRow>
        <CellButton showInformation={show} width="250px">
          <KeyboardArrowDownIcon onClick={handleShowInformation} />
        </CellButton>
      </ContainerRow>
      <InfoProduct
        showInformation={show}
        product={product}
        relevantStatistics={relevantStatistics}
      />
    </Wrapper>
  );
};

export default memo(Row);
