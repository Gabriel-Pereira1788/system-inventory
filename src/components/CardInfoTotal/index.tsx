import React from "react";
import { useSelector } from "react-redux";
import { CARDS_DATA } from "../../constants/cards";
import { RootState } from "../../store/store";
import CardInfo from "../CardInfo";
import { ContainerInfos, Info, InfoProduct } from "./styles";

type Props = {};

const CardInfoTotal = (props: Props) => {
  const { statisticsTotal } = useSelector(
    (slice: RootState) => slice.statistics
  );
  return (
    <InfoProduct className="main-graph card">
      <CardInfo information={CARDS_DATA.INFO_CARD_TOTAL} />
      <ContainerInfos>
        <Info>
          <h3>vendidos</h3>
          <span>
            {statisticsTotal ? statisticsTotal.total_pieces_sales : 0}
          </span>
        </Info>
        <Info>
          <h3>disponiveis</h3>
          <span>{statisticsTotal ? statisticsTotal.total_storage : 0}</span>
        </Info>
      </ContainerInfos>
      <Info>
        <h3>Preço de venda</h3>
        <span>
          {statisticsTotal ? statisticsTotal.total_price_saled.toFixed(2) : 0}
        </span>
      </Info>
      <Info>
        <h3>Preço de compra</h3>
        <span>
          {statisticsTotal
            ? statisticsTotal.total_price_purchased.toFixed(2)
            : 0}
        </span>
      </Info>
      <Info>
        <h3>Lucro Total:</h3>
        <span>
          {statisticsTotal ? statisticsTotal.total_sales.toFixed(2) : 0}
        </span>
      </Info>
    </InfoProduct>
  );
};

export default CardInfoTotal;
