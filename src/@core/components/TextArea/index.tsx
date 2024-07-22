import React from "react";
import { TextAreaWrapper } from "./styles";

interface ITextArea {
  maxLength?: number | undefined;
  disabled?: boolean;
  onChangeText: (text: string) => void;
  value?: string;
}

const TextArea = ({ maxLength, disabled, onChangeText, value }: ITextArea) => {
  return (
    <TextAreaWrapper
      maxLength={maxLength}
      disabled={disabled}
      onChange={(e) => onChangeText(e.target.value)}
      value={value}
    />
  );
};

export default TextArea;
