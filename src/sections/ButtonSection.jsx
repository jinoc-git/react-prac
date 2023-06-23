import React from "react";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import { styled } from "styled-components";

function ButtonSection() {
  return (
    <Wrapper>
      <h1>Button</h1>
      <StBtnWrapper>
        <Button size={"L"} $bc="yellowgreen" $shadow={true}>
          Large
        </Button>
        <Button size={"M"} $bc="yellowgreen">
          Medium
        </Button>
        <Button size={"S"} $bc="yellowgreen">
          Small
        </Button>
      </StBtnWrapper>
      <StBtnWrapper>
        <Button size={"L"} $border="#dcdcdc" color="#707070">
          Large
        </Button>
        <Button size={"M"} $border="#dcdcdc" color="#707070" $shadow={true}>
          Medium
        </Button>
        <Button size={"S"} $border="#dcdcdc" color="#707070">
          Small
        </Button>
      </StBtnWrapper>
    </Wrapper>
  );
}

export default ButtonSection;

export const StBtnWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
