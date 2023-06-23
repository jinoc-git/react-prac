import React, { useState } from "react";
import { styled, css } from "styled-components";
import { createPortal } from "react-dom";
import uuid from "react-uuid";

function Option({ list, selectOption }) {
  console.log(selectOption)
  return createPortal(
    <StUl>
      {list.map((item, idx) => {
        return (
          <StLi
            key={uuid()}
            onClick={() => {
              console.log("d");
              selectOption(idx);
            }}>
            {item}
          </StLi>
        );
      })}
    </StUl>,
    document.getElementById("modal-portal")
  );
}

export default Option;

const StUl = styled.ul`
  position: absolute;
  left: 20px;
  top: 617px;
  padding: 0;
  border: 0.5px solid #dcdcdc;
  border-radius: 8px;
`;

const StLi = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 35px;
  list-style: none;
  width: 200px;
  height: 40px;
  background-color: #fff;
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  &:hover {
    background-color: #dcdcdc;
  }
`;
