import React from "react";
import { Button, Circle, Container, Wrapper } from "./styles";
import { MdShoppingBasket } from "react-icons/md";
import TableProducts from "../../components/TableProducts";
type Props = {};

const Products = (props: Props) => {
  return (
    <Container>
      <Wrapper>
        <Button>
          <span>Adicionar Produto</span>
          <Circle>
            <MdShoppingBasket color="black" />
          </Circle>
        </Button>
        <TableProducts />
      </Wrapper>
    </Container>
  );
};

export default Products;
