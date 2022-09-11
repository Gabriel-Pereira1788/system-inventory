import { Box, Modal, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Product } from "../../modules/Product/Product";
import { asyncCreateProduct } from "../../store/Products/Products.store";
import { RootState, useAppDispatch } from "../../store/store";
import {
  Container,
  ConfirmButton,
  Exit,
  ButtonExit,
  ModalForm,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProduct } from "../../schemas/schemaProduct";
import { IProduct } from "../../interfaces/IProduct/IProduct";
import { initialValues } from "./initialValues";

type Props = {
  openModal: boolean;
  handleClose: () => void;
};

const ModalCreate = ({ openModal, handleClose }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schemaProduct),
    defaultValues: initialValues,
  });

  const { user } = useSelector((slice: RootState) => slice.user);
  const { loading } = useSelector((slice: RootState) => slice.products);

  const dispatch = useAppDispatch();

  const createProduct: SubmitHandler<IProduct> = async (data: IProduct) => {
    if (user) {
      const dataComplete: IProduct = { ...data, id_user: user.uid };
      await dispatch(asyncCreateProduct(dataComplete));

      handleClose();
    }
  };
  return (
    <ModalForm
      open={openModal}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Paper style={{ height: "551px", textAlign: "center" }} elevation={3}>
        <Exit>
          <ButtonExit onClick={handleClose}>X</ButtonExit>
        </Exit>
        <Typography
          variant="h3"
          mt={3}
          fontSize="2rem"
          fontWeight="bold"
          color="#00000059"
        >
          Adicionar Produto
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          padding="35px"
          height="85%"
          width="29vw"
          component="form"
          onSubmit={handleSubmit(createProduct)}
        >
          <TextField
            type="text"
            variant="outlined"
            label="Nome do produto"
            {...register("name_product")}
          />
          <Stack spacing={3} />
          <TextField
            type="number"
            variant="outlined"
            label="Preço de venda"
            {...register("price_saled")}
          />
          <Stack spacing={3} />
          <TextField
            type="number"
            variant="outlined"
            label="Preço de compra"
            {...register("price_purchased")}
          />
          <Stack spacing={3} />
          <TextField
            type="number"
            variant="outlined"
            label="Estoque inicial"
            {...register("storage")}
          />
          {!loading && (
            <ConfirmButton variant="contained" type="submit">
              Confirmar
            </ConfirmButton>
          )}
          {loading && (
            <ConfirmButton variant="contained" type="submit" disabled>
              Aguarde...
            </ConfirmButton>
          )}
        </Box>
      </Paper>
    </ModalForm>
  );
};

export default ModalCreate;
