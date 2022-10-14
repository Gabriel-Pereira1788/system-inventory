import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Card, Container, Info, Wrapper } from "./styles";

type Props = {
  information: string;
};

const CardInfo = ({ information }: Props) => {
  const [showCard, setShowCard] = useState(false);

  const handleMouseMove = (action: "enter" | "leave") => {
    return () => {
      if (action === "enter") setShowCard(true);
      if (action === "leave") setShowCard(false);
    };
  };

  return (
    <Wrapper>
      <Container>
        <AiOutlineExclamationCircle
          onMouseEnter={handleMouseMove("enter")}
          onMouseLeave={handleMouseMove("leave")}
        />
      </Container>
      {showCard && (
        <Card>
          <Info>{information}</Info>
        </Card>
      )}
    </Wrapper>
  );
};

export default CardInfo;
