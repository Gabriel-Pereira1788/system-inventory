import React, { useEffect, useState } from "react";
import { Button, Circle, Container, Wrapper } from "./styles";
import { MdShoppingBasket } from "react-icons/md";
import Table from "../../components/Table";
import ModalCreate from "../../components/ModalCreate";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { asyncLoadProducts } from "../../store/Products/Products.store";
type Props = {};

const Products = (props: Props) => {
  const { user } = useSelector((slice: RootState) => slice.user);

  const dispatch = useAppDispatch();

  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = (action: "open" | "close") => {
    return () => {
      if (action === "open") setOpenModal(true);
      if (action === "close") setOpenModal(false);
    };
  };

  useEffect(() => {
    if (user) dispatch(asyncLoadProducts(user.uid));
  }, []);
  return (
    <>
      <Container>
        <Wrapper>
          <Button onClick={handleToggleModal("open")}>
            <span>Adicionar Produto</span>
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
