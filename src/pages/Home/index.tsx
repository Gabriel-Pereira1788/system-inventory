import React from "react";
import {
  Button,
  Container,
  ContainerImage,
  ContainerText,
  Image,
  Section,
  Text,
  Wrapper,
} from "./styles";
import img from "../../assets/inventory_cartoon.png";
import ContentMain from "./components/ContentMain";
import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return (
    <Container>
      <Section>
        <Wrapper>
          <ContainerImage>
            <Image src={img} alt="inventory cartoon" />
          </ContainerImage>
          <ContainerText>
            <Text>Organize seu estoque de maneira simples e eficiente</Text>
            <Link to="/register">
              <Button>Cadastrar</Button>
            </Link>
          </ContainerText>
        </Wrapper>
      </Section>
      <ContentMain />
    </Container>
  );
};

export default Home;
