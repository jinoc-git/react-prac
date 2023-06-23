import React from "react";
import { styled } from "styled-components";

function Wrapper({ children }) {
  return <StWrapper>{children}</StWrapper>;
}

export default Wrapper;

const StWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px;
  padding: 10px;
  border: 1px solid;
  overflow: hidden;
`;
