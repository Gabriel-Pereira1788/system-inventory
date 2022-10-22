import { Box, Modal, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";
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
  Form,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProduct } from "../../schemas/schemaProduct";
import { IProduct } from "../../interfaces/IProduct/IProduct";
import { initialValues } from "./initialValues";
import {
  formatCurrency,
  formatValueSubmit,
} from "../../utils/transformCurrency";

type Props = {
  openModal: boolean;
  handleClose: () => void;
};

const ModalCreate = ({ openModal, handleClose }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    setError,
  } = useForm({
    resolver: yupResolver(schemaProduct),
    defaultValues: initialValues,
  });

  const { user } = useSelector((slice: RootState) => slice.user);
  const { loading } = useSelector((slice: RootState) => slice.products);

  const dispatch = useAppDispatch();

  const createProduct: SubmitHandler<IProduct> = async (data: IProduct) => {
    if (data.price_purchased > data.price_saled) {
      setError("price_purchased", {
        message: "Preço de venda não pode ser maior que o preço de compra!",
      });
      return;
    }

    if (user) {
      const dataComplete: IProduct = { ...data, id_user: user.uid };
      await dispatch(asyncCreateProduct(dataComplete));

      handleClose();
    }
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name as keyof IProduct;
    const value = e.target.value;

    if (isNaN(formatValueSubmit(value))) {
      setValue(key, formatCurrency(value));
      return;
    }

    setValue(key, formatCurrency(value));
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
        <Form component="form" onSubmit={handleSubmit(createProduct)}>
          <TextField
            type="text"
            error={errors.name_product ? true : false}
            helperText={errors.name_product && errors.name_product.message}
            variant="outlined"
            label="Nome do produto"
            {...register("name_product")}
          />
          <Stack spacing={3} />
          <TextField
            type="text"
            error={errors.price_saled ? true : false}
            helperText={errors.price_saled && errors.price_saled.message}
            variant="outlined"
            label="Preço de venda"
            {...register("price_saled")}
            onChange={handleChangeText}
          />
          <Stack spacing={3} />
          <TextField
            type="text"
            error={errors.price_purchased ? true : false}
            helperText={
              errors.price_purchased && errors.price_purchased.message
            }
            variant="outlined"
            label="Preço de compra"
            {...register("price_purchased")}
            onChange={handleChangeText}
          />
          <Stack spacing={3} />
          <TextField
            type="number"
            error={errors.storage ? true : false}
            helperText={errors.storage && errors.storage.message}
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
        </Form>
      </Paper>
    </ModalForm>
  );
};

export default ModalCreate;
