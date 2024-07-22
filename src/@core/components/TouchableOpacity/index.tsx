import React from "react";
import { ButtonWrapper } from "./styles";

interface ITouchableOpacity {
  children?: any | string | React.JSXElementConstructor<any> | undefined,
  style?: React.CSSProperties;
  onClick?: () => void;
}

const TouchableOpacity = ({ children, style, onClick }: ITouchableOpacity) => {
  return (
    <ButtonWrapper style={{ ...style }} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default TouchableOpacity;
