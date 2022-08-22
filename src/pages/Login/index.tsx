import React from "react";

import { ContainerTitle, Title, ButtonC } from "./style";
import { Box, TextField, Stack, Button } from "@mui/material";
import CardForm from "../../components/CardForm";
type Props = {};

const Login = (props: Props) => {
  return (
    <CardForm>
      <Box component="form" width="60%" sx={{ padding: "0px 40px" }}>
        <ContainerTitle>
          <Title>Entrar</Title>
        </ContainerTitle>
        <Stack spacing={3}>
          <TextField variant="outlined" label="Email" />
          <TextField variant="outlined" label="Senha" />
          <ButtonC>Entrar</ButtonC>
        </Stack>
      </Box>
    </CardForm>
  );
};

export default Login;
