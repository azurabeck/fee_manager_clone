import React from "react";
import { TextWapper } from "./styles";

interface IText {
  children: string;
  style?: {};
}

const Text = ({ children, style }: IText) => {
  return (
    <TextWapper style={{ ...style }}>{children}</TextWapper>
  )
};

export default Text;