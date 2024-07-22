import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Image from "next/image";
import Text from "@/@core/components/Text";
import visibilityOffIcon from "@/assets/svg/visibility-off-outline.svg";
import visibilityIcon from "@/assets/svg/visibility-outline.svg";
import { Tooltip } from "@mui/material";

import { InputWrapper, InputField, EyeIcon, Exception } from "./styles";

type ITextField = {
  type?: any;
  label?: string;
  placeholder?: string;
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
  onChange: (text: string) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  error?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  exception?: IResultException;
  value?: string;
  showException?: boolean;
};

interface IResultException {
  result: string;
}

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & ITextField;

const TextField = ({
  type,
  placeholder,
  label,
  width,
  height,
  fontSize,
  error,
  disabled,
  style,
  exception,
  onChange,
  onKeyDown,
  value,
  showException,
  ...rest
}: ITextField) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const renderValueWithTooltip = () => {
    if (disabled && value && value.length > 15) {
      return (
        <Tooltip title={value} placement="top" arrow>
          <div>
            <InputField
              error={error}
              disabled={disabled}
              type={isPasswordVisible ? "text" : type}
              placeholder={placeholder}
              height={height}
              fontSize={fontSize}
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={onKeyDown}
              value={value}
              showException={exception?.result ? true : false}
              {...rest}
            />
            {exception?.result === "EXCEPTION" ? (
              <Exception>Exception</Exception>
            ) : null}
          </div>
        </Tooltip>
      );
    } else {
      return (
        <>
          <InputField
            error={error}
            disabled={disabled}
            type={isPasswordVisible ? "text" : type}
            placeholder={placeholder}
            height={height}
            fontSize={fontSize}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            value={value}
            showException={exception?.result ? true : false}
            {...rest}
          />
          {exception?.result === "EXCEPTION" ? (
            <Exception>Exception</Exception>
          ) : null}
        </>
      );
    }
  };

  return (
    <InputWrapper width={width} style={{ ...style }}>
      {label && <Text>{label}</Text>}
      {renderValueWithTooltip()}
      {type === "password" && (
        <EyeIcon onClick={togglePasswordVisibility}>
          {isPasswordVisible ? (
            <Image
              src={visibilityOffIcon}
              width={24}
              height={24}
              alt="invisible"
            />
          ) : (
            <Image src={visibilityIcon} width={24} height={24} alt="visible" />
          )}
        </EyeIcon>
      )}
      {exception?.result === "EXCEPTION" ? (
        <Exception>Exception</Exception>
      ) : null}
    </InputWrapper>
  );
};

export default TextField;
