import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import { StBtnWrapper } from "./ButtonSection";
import Button from "../components/Button";
import Modal, { SecondModal } from "../components/Modal";

function ModalSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [secondIsOpen, setsecondIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen((prev) => !prev);
  };
  const openSecondModal = () => {
    setsecondIsOpen((prev) => !prev);
  };
  return (
    <Wrapper>
      <h1>Modal</h1>
      <StBtnWrapper>
        <Button size={"S"} $bc={"#dcdcdc"} fnc={openModal}>
          open modal
        </Button>
        {isOpen && <Modal fnc={openModal} />}
        <Button size={"M"} $bc={"yellow"} $shadow={true} fnc={openSecondModal}>
          open modal
        </Button>
        {secondIsOpen && <SecondModal fnc={openSecondModal} />}
      </StBtnWrapper>
    </Wrapper>
  );
}

export default ModalSection;
