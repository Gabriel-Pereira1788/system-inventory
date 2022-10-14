import styled from "styled-components";

export const WrapperIcon = styled.div`
  position: relative;
  box-shadow: 0px 2px 4px #00000024;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
`;

export const Alert = styled.span`
  position: absolute;
  border-radius: 50%;
  top: -3%;
  right: 0;
  width: 12px;
  height: 12px;
  background: red;
`;
