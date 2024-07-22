import styled from "styled-components";

interface ITouchableParams {
  fontSize?: string | number;
}

export const ButtonWrapper = styled.button<ITouchableParams>`
  font-family: 'Figtree';
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.12px;
  background:none;
  border:none;
  margin:0;
  padding:0;
  cursor: pointer;
  :focus{
    box-shadow: 0 0 0 2px #4289F5;
    border-inline-end-width: 1px;
    outline: 0;
    }
`;