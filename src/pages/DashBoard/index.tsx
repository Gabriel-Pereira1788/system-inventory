// import { Container } from "@mui/material";
import { RootState } from "../../store/store";
import {
  Wrapper,
  Container,
  ContainerTitle,
  Text,
  Title,
  UserName,
} from "./styles";

import { useSelector } from "react-redux";
import ContainerControl from "../../components/ContainerControl";

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
