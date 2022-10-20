import React, { useState } from "react";
import { Button, Card, ContainerCards, ContainerCarousel } from "./styles";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

type Props<T> = {
  dataRender: T[];
  renderMethod: (dataRender: T) => JSX.Element;
};

export default function Carousel<T extends Object>({
  dataRender,
  renderMethod,
}: Props<T>) {
  const [currentPosition, setCurrentPosition] = useState(1);

  const verifyPosition = (position: number) => {
    const lastPosition = dataRender.length - 1;
    const firstPosition = 0;
    if (position < 0) return lastPosition;
    if (position > dataRender.length - 1) return firstPosition;
    return position;
  };
  const handleToggleSlide = (action: "next" | "prev") => {
    return () => {
      if (action === "next")
        setCurrentPosition((position) => verifyPosition(position + 1));
      if (action === "prev")
        setCurrentPosition((position) => verifyPosition(position - 1));
    };
  };

  const setClassName = (index: number) => {
    if (index < currentPosition) return "left-side";
    if (index === currentPosition) return "center";
    if (index > currentPosition) return "right-side";
  };
  return (
    <ContainerCarousel>
      <Button onClick={handleToggleSlide("prev")}>
        <KeyboardArrowLeftIcon fontSize="large" />
      </Button>
      <ContainerCards>
        {dataRender.map((data, index) => {
          return (
            <Card key={index} className={setClassName(index)}>
              {renderMethod(data)}
            </Card>
          );
        })}
      </ContainerCards>
      <Button onClick={handleToggleSlide("next")}>
        <KeyboardArrowRightIcon fontSize="large" />
      </Button>
    </ContainerCarousel>
  );
}
