import React, { useEffect, useState } from "react";
import { Button, Circle, Container, Text, Wrapper } from "./styles";
import { MdShoppingBasket } from "react-icons/md";
import Table from "../../components/Table";
import ModalCreate from "../../components/ModalCreate";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { asyncLoadProducts } from "../../store/Products/Products.store";
import { asyncGetStatistics } from "../../store/Statistics/Statistics.store";
type Props = {};

const Products = (props: Props) => {
  const { user } = useSelector((slice: RootState) => slice.user);
  const { updatedProduct } = useSelector((slice: RootState) => slice.products);

  const dispatch = useAppDispatch();

  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = (action: "open" | "close") => {
    return () => {
      if (action === "open") setOpenModal(true);
      if (action === "close") setOpenModal(false);
    };
  };

  useEffect(() => {
    if (user) {
      dispatch(asyncGetStatistics(user.uid));
      dispatch(asyncLoadProducts(user.uid));
    }
  }, [updatedProduct]);
  return (
    <>
      <Container>
        <Wrapper>
          <Button onClick={handleToggleModal("open")}>
            <Text>Adicionar Produto</Text>
            <Circle>
              <MdShoppingBasket color="black" />
            </Circle>
          </Button>
          <Table />
        </Wrapper>
      </Container>
      <ModalCreate
        openModal={openModal}
        handleClose={handleToggleModal("close")}
      />
    </>
  );
};

export default Products;
