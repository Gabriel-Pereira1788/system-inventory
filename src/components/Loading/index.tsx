import React from "react";
import Lottie from "react-lottie";
import LoadingAnimation from "./animation/data.json";
import { Wrapper } from "./styles";
type Props = {};

const Loading = (props: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Wrapper>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Wrapper>
  );
};

export default Loading;
