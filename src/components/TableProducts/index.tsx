import React from "react";
import Row from "./Row";
import { AiOutlineSearch } from "react-icons/ai";
import { Column, ContainerTable, LabelSearch, Search, Thead } from "./styles";

type Props = {};

const TableProducts = (props: Props) => {
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
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </ContainerTable>
    </>
  );
};

export default TableProducts;
