import React from "react";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import { Form } from "../components/Input";
import Input from "../components/Input";
import { styled } from "styled-components";

function InputSection() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert('모르겠다..');
  };
  
  return (
    <Wrapper>
      <h1>Input</h1>
      <Form onSubmitHandler={onSubmitHandler}>
        <label>
          이름
          <Input type={"text"} title={'name'} />
        </label>
        <label>
          가격
          <Input type={"number"} title={'price'} />
        </label>
        <Button $bc={"teal"} color={"#fff"} $shadow={true}>
          저장
        </Button>
      </Form>
    </Wrapper>
  );
}

export default InputSection;
