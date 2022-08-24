import React from "react";
import { ContainerTitle, Title, ButtonC } from "./style";
import { Box, TextField, Stack, Button } from "@mui/material";
import CardForm from "../../components/CardForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { IForm, initialValue } from "../../interfaces/IForm/IForm";
import { useAppDispatch } from "../../store/store";

import { registerUser } from "../../store/User/User.store";
type Props = {};

const Register = (props: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: initialValue,
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IForm> = (data: IForm) => {
    dispatch(registerUser(data));
  };
  return (
    <CardForm>
      <Box
        component="form"
        width="60%"
        sx={{ padding: "0px 40px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <ContainerTitle>
          <Title>Junte-se a nos</Title>
        </ContainerTitle>
        <Stack spacing={3}>
          <TextField variant="outlined" label="Nome" {...register("name")} />
          <TextField variant="outlined" label="Email" {...register("email")} />
          <TextField
            variant="outlined"
            label="Senha"
            {...register("password")}
          />
          <TextField
            variant="outlined"
            label="Confirmar senha"
            {...register("confirmPassword")}
          />
          <ButtonC type="submit">Registar-se</ButtonC>
        </Stack>
      </Box>
    </CardForm>
  );
};

export default Register;
