import React from "react";
import Wrapper from "../components/Wrapper";
import Option from "../components/Option";
import { styled } from "styled-components";

function SelectSection() {
  return (
    <Wrapper>
      <h1>Select</h1>
      <div>
        <StSelect>
          <Option value="1">리액트</Option>
          <Option value="2">자바</Option>
          <Option value="3">스프링</Option>
          <Option value="4">리액트네이티브</Option>
        </StSelect>
      </div>
    </Wrapper>
  );
}

export default SelectSection;

const StSelect = styled.select`
  width: 200px;
  height: 30px;
  border-radius: 8px;
  overflow: hidden;
`