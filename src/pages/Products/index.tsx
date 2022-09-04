import React from "react";
import {
  Button,
  Circle,
  Container,
  ContainerTable,
  Table,
  Thead,
  Wrapper,
} from "./styles";
import { MdShoppingBasket } from "react-icons/md";
type Props = {};

const Products = (props: Props) => {
  return (
    <Container>
      <Wrapper>
        <Button>
          Adicionar
          <Circle>
            <MdShoppingBasket color="black" />
          </Circle>
        </Button>
        <Thead>Nome</Thead>
        <ContainerTable>
          <Table cellSpacing={0} cellPadding={0}>
            {/* <thead>
              <tr>
                <th style={{ borderRadius: "10px 0px 0px 0px" }}>Nome</th>
                <th>Preço de venda</th>
                <th>Preço de compra</th>
                <th>Estoque</th>
                <th style={{ borderRadius: "0px 10px 0px 0px" }}>
                  <input type="text" />
                </th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <td>Tenis</td>
                <td>59.99</td>
                <td>59.99</td>
                <td>40</td>
                <td></td>
              </tr>
              <tr>
                <td>Tenis</td>
                <td>59.99</td>
                <td>59.99</td>
                <td>40</td>
                <td></td>
              </tr>
              <tr>
                <td>Tenis</td>
                <td>59.99</td>
                <td>59.99</td>
                <td>40</td>
                <td></td>
              </tr>
              <tr>
                <td>Tenis</td>
                <td>59.99</td>
                <td>59.99</td>
                <td>40</td>
                <td></td>
              </tr>
              <tr>
                <td>Tenis</td>
                <td>59.99</td>
                <td>59.99</td>
                <td>40</td>
                <td></td>
              </tr>
              <tr>
                <td>Tenis</td>
                <td>59.99</td>
                <td>59.99</td>
                <td>40</td>
                <td></td>
              </tr>
              <tr>
                <td>Tenis</td>
                <td>59.99</td>
                <td>59.99</td>
                <td>40</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </ContainerTable>
      </Wrapper>
    </Container>
  );
};

export default Products;
