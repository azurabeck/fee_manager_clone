import styled, { css } from "styled-components";

interface ITextFieldParams {
  fontSize?: string | number;
  width?: string | number;
  error?: boolean;
  disabled?: boolean;
  height?: string | number;
  showException?: boolean;
}

export const InputWrapper = styled.div<ITextFieldParams>`
  position: relative;
  width: ${(props) => props.width || "100%"};
`;
export const InputField = styled.input<ITextFieldParams>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px;
  gap: 8px;
  width: 100%;
  height: ${(props) => props.height || "36px"};
  background: #ffffff;
  border: 1px solid #8a8c98;
  border-radius: 4px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  color: #636574;
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: "Figtree";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
    props.error === true &&
    css`
      border: 1px solid #ca3d3d;
      :hover {
        border: 1px solid #ca3d3d;
      }
      :focus {
        box-shadow: 0 0 0 2px rgba(202, 61, 61, 0.1);
        border-inline-end-width: 1px;
        outline: 0;
        border: 2px solid #ca3d3d;
      }
    `}
  ${(props) =>
    props.disabled === true &&
    css`
      background: #f7f7f8;
      cursor: not-allowed;
      :hover {
        border: 1px solid #636574;
      }
    `}

    ${(props) =>
    props.showException === true &&
    css`
      padding-right: 90px;
    `}
`;
export const EyeIcon = styled.div`
  position: absolute;
  top: 72%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
  background: transparent;
`;

export const Exception = styled.div`
  font-family: "Figtree";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  position: absolute;
  top: 8px;
  right: 12px;
  display: flex;
  align-items: center;
  letter-spacing: 0.12px;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 1px 8px;
  width: 73px;
  height: 20px;
  background: #c75300;
  border-radius: 16px;
`;
