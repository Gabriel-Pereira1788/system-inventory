import React from "react";

import { ContainerTitle, Title, ButtonC, Box } from "./style";
import { TextField, Stack } from "@mui/material";
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

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IForm> = (data: IForm) => {
    dispatch(loginUser(data));
  };

  return (
    <CardForm>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <ContainerTitle>
          <Title>Entrar</Title>
        </ContainerTitle>
        <Stack spacing={3}>
          <TextField
            error={messageError || errors.email ? true : false}
            helperText={
              (errors.email && errors.email.message) ||
              (messageError && messageError)
            }
            type="email"
            variant="outlined"
            label="Email"
            {...register("email")}
          />
          <TextField
            error={messageError || errors.password ? true : false}
            helperText={
              (errors.password && errors.password.message) ||
              (messageError && messageError)
            }
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
