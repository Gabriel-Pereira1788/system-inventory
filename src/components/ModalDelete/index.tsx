import React from "react";
import { Cancel, Confirm, ContainerButtons, Modal, Paper } from "./styles";
import { Typography } from "@mui/material";
import { RootState, useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { asyncDeleteProduct } from "../../store/Products/Products.store";

type Props = {
  openModal: boolean;
  handleClose: () => void;
  idProduct: string;
};

const ModalDelete = ({ openModal, handleClose, idProduct }: Props) => {
  const { loading } = useSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();

  const handleDeleteProduct = async () => {
    await dispatch(asyncDeleteProduct(idProduct));
  };

  return (
    <Modal open={openModal} onClose={handleClose}>
      <Paper
        style={{ height: "257px", textAlign: "center", width: "28vw" }}
        elevation={3}
      >
        <Typography
          variant="h3"
          mt={3}
          fontSize="2rem"
          fontWeight="bold"
          color="#00000059"
        >
          Deletar produto?
        </Typography>
        <ContainerButtons>
          {!loading && (
            <Confirm onClick={handleDeleteProduct}>Confirmar</Confirm>
          )}
          {loading && (
            <Confirm onClick={handleDeleteProduct} disabled>
              Aguarde...
            </Confirm>
          )}
          <Cancel onClick={handleClose}>Cancelar</Cancel>
        </ContainerButtons>
      </Paper>
    </Modal>
  );
};

export default ModalDelete;
