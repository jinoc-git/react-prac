import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import { Form } from "../components/Input";
import Input from "../components/Input";
import { styled } from "styled-components";

function InputSection() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name === "" || price === 0) {
      alert("이름과 가격을 입력해 주세요.");
    } else {
      const removeComma = price.replaceAll(",", "");
      alert(`name: ${name}, price: ${removeComma}`);
    }
    setName("");
    setPrice(0);
  };
  return (
    <Wrapper>
      <h1>Input</h1>
      <Form onSubmitHandler={onSubmitHandler}>
        <label>
          이름
          <Input type={"text"} title={"name"} name={name} setName={setName} />
        </label>
        <label>
          가격
          <Input
            type={"text"}
            title={"price"}
            price={price}
            setPrice={setPrice}
          />
        </label>
        <Button $bc={"teal"} color={"#fff"} $shadow={true}>
          저장
        </Button>
      </Form>
    </Wrapper>
  );
}

export default InputSection;
