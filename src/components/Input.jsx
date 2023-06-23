import React from "react";
import { styled, css } from "styled-components";

function Input({ type, title, ...props }) {
  const { name, setName } = props;
  const { price, setPrice } = props;
  const addCommaPrice = (value) => {
    const remove = Number(value.replace(/[^0-9]/g, ""));
    setPrice(remove.toLocaleString());
  };
  return (
    <StInput
      type={type}
      value={title === "name" ? name : price}
      onChange={({ target }) => {
        title === "name" ? setName(target.value) : addCommaPrice(target.value);
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
