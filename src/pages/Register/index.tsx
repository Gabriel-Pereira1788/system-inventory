import React from "react";
import { ContainerTitle, Title, ButtonC } from "./style";
import { Box, TextField, Stack, Button } from "@mui/material";
import CardForm from "../../components/CardForm";
type Props = {};

const Register = (props: Props) => {
  return (
    <CardForm>
      <Box component="form" width="60%" sx={{ padding: "0px 40px" }}>
        <ContainerTitle>
          <Title>Junte-se a nos</Title>
        </ContainerTitle>
        <Stack spacing={3}>
          <TextField variant="outlined" label="Nome" />
          <TextField variant="outlined" label="Email" />
          <TextField variant="outlined" label="Senha" />
          <TextField variant="outlined" label="Confirmar senha" />
          <ButtonC>Registar-se</ButtonC>
        </Stack>
      </Box>
    </CardForm>
  );
};

export default Register;
