import React, { useEffect } from "react";
import Row from "./Row";
import { AiOutlineSearch } from "react-icons/ai";
import { Column, ContainerTable, LabelSearch, Search, Thead } from "./styles";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";

type Props = {};

const Table = (props: Props) => {
  const { products } = useSelector((slice: RootState) => slice.products);

  return (
    <>
      <Thead>
        <Column>Nome</Column>
        <Column>Preço de compra</Column>
        <Column>Preço de venda</Column>
        <Column>Estoque</Column>
        <Column width="250px">
          <LabelSearch>
            <AiOutlineSearch size={25} />
            <Search type="text" />
          </LabelSearch>
        </Column>
      </Thead>
      <ContainerTable>
        {products.length > 0 &&
          products.map((product) => (
            <Row {...product} key={product.id_product} />
          ))}
      </ContainerTable>
    </>
  );
};

export default Table;
