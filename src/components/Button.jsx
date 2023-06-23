import React from "react";
import { styled, css } from "styled-components";

function Button({ children, fnc, ...props }) {
  return <StButton {...props} onClick={fnc}>{children}</StButton>;
}

export default Button;

const StButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 12px;
  color: ${({ color }) => color};
  background-color: ${({ $bc }) => ($bc ? $bc : "transparent")};
  &:hover {
    filter: brightness(0.8);
  }

  ${({ size }) => {
    switch (size) {
      case "L":
        return css`
          width: 200px;
          height: 60px;
          font-size: 20px;
        `;
      case "M":
        return css`
          width: 140px;
          height: 50px;
          font-size: 16px;
        `;
      case "S":
        return css`
          width: 100px;
          height: 40px;
          font-size: 14px;
        `;
      default:
        return css`
          width: 100px;
          height: 40px;
          font-size: 14px;
        `;
    }
  }}

  ${({ $border }) => {
    if ($border) {
      return css`
        border: 2px solid ${$border};
      `;
    }
  }}

  ${({ $shadow }) => {
    if ($shadow) {
      return css`
        box-shadow: rgba(100, 100, 111, 0.34) 0px 7px 14px 0px;
      `;
    }
  }}
`;
