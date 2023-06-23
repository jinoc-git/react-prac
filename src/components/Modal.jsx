import React from "react";
import Button from "./Button";
import { StBtnWrapper } from "../sections/ButtonSection";
import { styled } from "styled-components";
import { createPortal } from "react-dom";

function Modal({ fnc }) {
  return createPortal(
    <Overlay>
      <Content>
        <p>외부 영역을 눌러도 모달이 닫히지 않는다</p>
        <StBtnWrapper>
          <Button $bc={"#ddd"} fnc={fnc}>
            닫기
          </Button>
          <Button $bc={"#ddd"}>확인</Button>
        </StBtnWrapper>
      </Content>
    </Overlay>,
    document.getElementById("modal-portal")
  );
}

export function SecondModal({ fnc }) {
  const clickOverlay = ({target, currentTarget}) => {
    if(target !== currentTarget) return false;
    fnc();
  }
  return createPortal(
    <Overlay onClick={clickOverlay}>
      <Content>
        <p>닫기 버튼 1개가 있고,<br /> 외부 영역을 누르면 모달이 닫힌다</p>
        <StBtnWrapper>
          <Button $bc={"#ddd"} fnc={fnc}>
            닫기
          </Button>
        </StBtnWrapper>
      </Content>
    </Overlay>,
    document.getElementById("modal-portal")
  );
}

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 300px;
  border-radius: 12px;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: #fff;
`;
