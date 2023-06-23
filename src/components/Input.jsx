import React from "react";
import { useState } from "react";
import { styled, css } from "styled-components";

function Input({ type, title }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  return (
    <StInput
      type={type}
      value={title === "name" ? name : price}
      onChange={({ target }) => {
        title === "name" ? setName(target.value) : setPrice(target.value);
      }}
    />
  );
}

export default Input;

const StInput = styled.input`
  width: 150px;
  height: 30px;
  margin-left: 10px;
  padding-left: 5px;
  border: 0.5px solid #707070;
  border-radius: 8px;
`;

export function Form({ children, onSubmitHandler }) {
  return <StForm onSubmit={onSubmitHandler}>{children}</StForm>;
}

const StForm = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`;
