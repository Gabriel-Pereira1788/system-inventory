import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CellButton, CellRow, ContainerRow, Wrapper } from "./styles";
import InfoProduct from "../InfoProduct";

type Props = {};

const Row = (props: Props) => {
  const [show, setShow] = useState(false);

  const handleShowInformation = () => {
    setShow(!show);
  };
  return (
    <Wrapper>
      <ContainerRow>
        <CellRow>Tenis</CellRow>
        <CellRow>59.99</CellRow>
        <CellRow>59.99</CellRow>
        <CellRow>40</CellRow>
        <CellButton showInformation={show} width="250px">
          <KeyboardArrowDownIcon onClick={handleShowInformation} />
        </CellButton>
      </ContainerRow>
      <InfoProduct showInformation={show} />
    </Wrapper>
  );
};

export default Row;
