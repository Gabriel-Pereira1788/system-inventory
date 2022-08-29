// import { Container } from "@mui/material";
import React, { useEffect } from "react";
import NavVertical from "../../components/NavVertical";
import { RootState, useAppDispatch } from "../../store/store";
import { Wrapper, Container, Title, Text } from "./styles";
import { asyncLoadProducts } from "../../store/Products/Products.store";
import { useSelector } from "react-redux";
import ContainerControl from "../../components/ContainerControl";

type Props = {};

const DashBoard = (props: Props) => {
  const { user } = useSelector((slice: RootState) => slice.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(asyncLoadProducts(user.uid));
    }
  }, []);
  return (
    <Container>
      <Wrapper>
        <Title>
          <h2>
            Olá , <span>Gabriel</span>.
          </h2>
          <Text>Bem vindo de volta!</Text>
        </Title>
        <ContainerControl />
      </Wrapper>
    </Container>
  );
};

export default DashBoard;
