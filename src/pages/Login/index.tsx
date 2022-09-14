import React from "react";

import { ContainerTitle, Title, ButtonC } from "./style";
import { Box, TextField, Stack } from "@mui/material";
import CardForm from "../../components/CardForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { RootState, useAppDispatch } from "../../store/store";
import { IForm, initialValueLogin } from "../../interfaces/IForm/IForm";
import { loginUser } from "../../store/User/User.store";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../schemas/schemaLogin";
type Props = {};

const Login = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValueLogin,
    resolver: yupResolver(schemaLogin),
  });

  const { loading, messageError } = useSelector(
    (state: RootState) => state.user
  );
  console.log(messageError);
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
          <TextField
            type="email"
            variant="outlined"
            label="Email"
            {...register("email")}
          />
          <TextField
            type="password"
            variant="outlined"
            label="Senha"
            {...register("password")}
          />
          {!loading && <ButtonC type="submit">Entrar</ButtonC>}
          {loading && (
            <ButtonC type="submit" disabled>
              Aguarde...
            </ButtonC>
          )}
        </Stack>
      </Box>
    </CardForm>
  );
};

export default Login;
