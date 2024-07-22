import styled, { css } from "styled-components";

interface ITextAreaParams {
  disabled?: boolean;
}

export const TextAreaWrapper = styled.textarea<ITextAreaParams>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 12px;
  gap: 8px;
  width: 100%;
  height: 115px;
  background: #ffffff;
  border: 1px solid #8a8c98;
  border-radius: 4px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;

  font-family: "Figtree";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.12px;
  color: #636574;
  :hover {
    border: 1px solid #1c77cf;
  }
  :focus {
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    border-inline-end-width: 1px;
    outline: 0;
    border: 2px solid #1c77cf;
  }
  ${(props) =>
    props.disabled === true &&
    css`
      background: #f7f7f8;
      cursor: not-allowed;
      :hover {
        border: 1px solid #636574;
      }
    `}
`;
