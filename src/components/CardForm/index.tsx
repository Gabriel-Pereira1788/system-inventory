import React, { ReactNode } from "react";
import {
  Container,
  ContainerTitle,
  Title,
  Paper,
  Wrapper,
  Img,
  Text,
} from "./styles";
import { Box, TextField, Stack, Typography, Button } from "@mui/material";
import image from "../../assets/inventory_box.png";
type Props = {
  children: ReactNode;
};

const CardForm = ({ children }: Props) => {
  return (
    <Container>
      <Paper>
        <Box display="flex" height="90vh" width="100%" justifyContent="center">
          {children}
          <Wrapper>
            <Img src={image} alt="box" />
            <ContainerTitle>
              <Text>Organize seu inventario de forma segura e simples</Text>
            </ContainerTitle>
          </Wrapper>
        </Box>
      </Paper>
    </Container>
  );
};

export default CardForm;
