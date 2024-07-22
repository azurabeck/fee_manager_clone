import React, { useState, useEffect, KeyboardEvent } from "react";
import { useAuthStore } from "@/@core/store";
import Image from "next/image";
import Button from "@/@core/components/Button";
import TextField from "@/@core/components/TextField";
import Notification from "@/@core/components/Notification";
import ForgotPasswordModal from "./ForgotPasswordModal";
import errorCloseIcon from "@/assets/svg/error-circle-color.svg";
import SafraLogo from "@/assets/logo/safra-logo.svg";
import { useNavigate } from "react-router-dom";

import { Form, MainContainer } from "./styles";
import { AuthProvider } from "@/services/authProvider";
import { IAuthParams } from "@/services/authProvider/types";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState(false);
  const { doLogin, isLoading } = AuthProvider();
  const navigate = useNavigate();

  const submitLogin = () => {
    try {
      const userCredentials = Object.assign({
        userName,
        password,
      }) as IAuthParams;
      doLogin(userCredentials);
    } catch (error) {
      setIsPasswordOrUsernameError(true);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      submitLogin();
    }
  };

  const { isAuth, isPasswordOrUsernameError, setIsPasswordOrUsernameError } =
    useAuthStore((state) => state);

  useEffect(() => {
    if (isAuth) {     
        navigate("/app/dashboard");      
    }
  }, [])

  useEffect(() => {
    if (isAuth) {
      setTimeout(() => {
        navigate("/app/dashboard");
      }, 1000);
    }
  }, [isAuth, navigate]);

  return (
    <MainContainer>
      <Form>
        <Image src={SafraLogo} width={72} height={72} alt="logo" />
        {isPasswordOrUsernameError ? (
          <Notification
            type="error"
            icon={errorCloseIcon}
            label="Username or Password is incorrect."
          />
        ) : null}
        <TextField
          error={errors}
          label="Username"
          width="100%"
          height="48px"
          fontSize="16px"
          onChange={(text) => setUserName(String(text))}
          onKeyDown={handleKeyPress}
        />
        <TextField
          error={errors}
          label="Password"
          type="password"
          width="100%"
          height="48px"
          fontSize="16px"
          onChange={(text) => setPassword(String(text))}
          onKeyDown={handleKeyPress}
        />
        <Button
          onClick={() => submitLogin()}
          disabled={String(userName) !== "" ? false : true}
          loading={isLoading}
        >
          Login
        </Button>
        <ForgotPasswordModal />
      </Form>
    </MainContainer>
  );
}
