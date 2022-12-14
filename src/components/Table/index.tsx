import React, { ChangeEvent, useEffect, useState } from "react";
import Row from "./Row";
import { AiOutlineSearch } from "react-icons/ai";
import { Column, ContainerTable, LabelSearch, Search, Thead } from "./styles";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import {
  asyncSearchProduct,
  searchProduct,
} from "../../store/Products/Products.store";
import Loading from "../Loading";

type Props = {};

const Table = (props: Props) => {
  const { displayProducts, loadingProducts } = useSelector(
    (slice: RootState) => slice.products
  );
  const dispatch = useAppDispatch();

  const handleSearchProduct = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    dispatch(searchProduct(value));
  };

  if (loadingProducts) {
    return (
      <>
        <Loading />
      </>
    );
  }

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
            <Search type="text" onChange={handleSearchProduct} />
          </LabelSearch>
        </Column>
      </Thead>
      <ContainerTable>
        {displayProducts.length > 0 &&
          displayProducts.map((data) => (
            <Row {...data} key={data.product.id_product} />
          ))}
      </ContainerTable>
    </>
  );
};

export default Table;
