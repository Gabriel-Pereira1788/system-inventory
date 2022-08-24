import React from "react";

import { ContainerTitle, Title, ButtonC } from "./style";
import { Box, TextField, Stack } from "@mui/material";
import CardForm from "../../components/CardForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/store";
import { IForm, initialValueLogin } from "../../interfaces/IForm/IForm";
import { loginUser } from "../../store/User/User.store";
type Props = {};

const Login = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValueLogin,
  });

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IForm> = (data: IForm) => {
    dispatch(loginUser(data));
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
          <Title>Entrar</Title>
        </ContainerTitle>
        <Stack spacing={3}>
          <TextField variant="outlined" label="Email" {...register("email")} />
          <TextField
            variant="outlined"
            label="Senha"
            {...register("password")}
          />
          <ButtonC type="submit">Entrar</ButtonC>
        </Stack>
      </Box>
    </CardForm>
  );
};

export default Login;
