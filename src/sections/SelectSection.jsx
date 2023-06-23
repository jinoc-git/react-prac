import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import Option from "../components/Option";
import { styled } from "styled-components";

function SelectSection() {
  const values = ["리액트", "자바", "스프링", "리액트네이티브"];
  const [option, setOption] = useState("리액트");
  const [isOpen, setIsopen] = useState(false);
  const isOpenHandler = () => {
    setIsopen((prev) => !prev);
  };
  const selectOption = (idx) => {
    setOption(values[idx]);
  };
  return (
    <Wrapper>
      <h1>Select</h1>
      <div>
        <StSelect
          onClick={isOpenHandler}
          onBlur={() => {
            setIsopen(false);
          }}>
          <StInnerBtnWrapper>
            {option}
            <span>▼</span>
          </StInnerBtnWrapper>
        </StSelect>
        {isOpen && (
          <Option
            list={values}
            selectOption={selectOption}
            setIsopen={setIsopen}
          />
        )}
      </div>
    </Wrapper>
  );
}

export default SelectSection;

const StSelect = styled.button`
  cursor: pointer;
  position: relative;
  width: 200px;
  height: 36px;
  font-size: 16px;
  border: 0.5px solid #dcdcdc;
  border-radius: 8px;
  background-color: transparent;
  &:hover {
    background-color: #dcdcdc;
  }
`;

const StInnerBtnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
