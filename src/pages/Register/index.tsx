import React from "react";
import { ContainerTitle, Title, ButtonC, Box } from "./style";
import { TextField, Stack, Button } from "@mui/material";
import CardForm from "../../components/CardForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { IForm, initialValue } from "../../interfaces/IForm/IForm";
import { useAppDispatch } from "../../store/store";

import { registerUser } from "../../store/User/User.store";
import { schemaRegister } from "../../schemas/schemaRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
type Props = {};

const Register = (props: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(schemaRegister),
  });

  const { loading } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IForm> = (data: IForm) => {
    dispatch(registerUser(data));
  };
  return (
    <CardForm>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <ContainerTitle>
          <Title>Junte-se a nos</Title>
        </ContainerTitle>
        <Stack spacing={3}>
          <TextField
            error={errors.name ? true : false}
            helperText={errors.name && errors.name.message}
            variant="outlined"
            label="Nome"
            {...register("name")}
          />
          <TextField
            variant="outlined"
            error={errors.email ? true : false}
            helperText={errors.email && errors.email.message}
            label="Email"
            {...register("email")}
          />
          <TextField
            type="password"
            error={errors.password ? true : false}
            helperText={errors.password && errors.password.message}
            variant="outlined"
            label="Senha"
            {...register("password")}
          />
          <TextField
            error={errors.confirmPassword ? true : false}
            helperText={
              errors.confirmPassword && errors.confirmPassword.message
            }
            type="password"
            variant="outlined"
            label="Confirmar senha"
            {...register("confirmPassword")}
          />
          {!loading && <ButtonC type="submit">Registar-se</ButtonC>}
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

export default Register;
