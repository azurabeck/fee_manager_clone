import styled, { keyframes, css } from "styled-components";

interface ITitleTableParams {
  rotate?: boolean;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 0px 16px 0px;
  border-bottom: 2px solid #f7f7f8;
  border-radius: 0px 8px 0px 0px;
`;

export const Text = styled.a`
  font-family: "Figtree";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.12px;
  color: #484a55;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Button = styled.button<ITitleTableParams>`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.12px;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 0 2px #4289f5;
    border-inline-end-width: 1px;
    outline: 0;
    z-index: 1;
  }
  ${(props) =>
    props.rotate &&
    css`
      animation: ${rotate} 1s linear 1;
    `}
`;
