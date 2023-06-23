import React from "react";
import Wrapper from "../components/Wrapper";
import { StBtnWrapper } from "./ButtonSection";
import Button from "../components/Button";
import { styled } from "styled-components";

function ModalSection() {
  return (
    <Wrapper>
      <h1>Modal</h1>
      <StBtnWrapper>
        <Button size={"S"} $bc={"#dcdcdc"}>
          open modal
        </Button>
        <Button size={"M"} $bc={"yellow"} $shadow={true}>
          open modal
        </Button>
      </StBtnWrapper>
    </Wrapper>
  );
}

export default ModalSection;
