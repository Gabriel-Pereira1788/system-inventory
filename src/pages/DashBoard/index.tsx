// import { Container } from "@mui/material";
import React, { useEffect } from "react";
import NavVertical from "../../components/NavVertical";
import { RootState, useAppDispatch } from "../../store/store";
import {
  Wrapper,
  Container,
  ContainerTitle,
  Text,
  Title,
  UserName,
} from "./styles";
import { asyncLoadProducts } from "../../store/Products/Products.store";
import { useSelector } from "react-redux";
import ContainerControl from "../../components/ContainerControl";
import {
  asyncGetStatistics,
  getStatistics,
} from "../../store/Statistics/Statistics.store";
import { dataSales } from "../../mock/data";
import Loading from "../../components/Loading";

type Props = {};

const DashBoard = (props: Props) => {
  const { user } = useSelector((slice: RootState) => slice.user);

  return (
    <Container>
      <Wrapper>
        <ContainerTitle>
          <Title>
            Olá , <UserName>{user && user.name}</UserName>.
          </Title>
          <Text>Bem vindo de volta!</Text>
        </ContainerTitle>
        <ContainerControl />
      </Wrapper>
    </Container>
  );
};

export default DashBoard;
