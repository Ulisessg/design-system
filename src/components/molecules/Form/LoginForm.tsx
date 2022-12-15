import React, { useState, ChangeEventHandler } from "react";
import Form from "./Form";
import styled from "styled-components";
import { TextInput, CheckInput } from "../../atoms/Input";
import Button from "../../atoms/Button";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleShowPassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setShowPassword(e.currentTarget.checked);
  };
  return (
    <Form formTitle="Iniciar sesión">
      <TextInput
        id="1"
        label="Username" type="text" placeholder="Username"
        inputMode="text"
        name="username"
      />
      <TextInput
        id="2"
        label="Contraseña"
        type={showPassword ? "text" : "password"}
        placeholder="Contraseña"
        inputMode="text"
        name="password"
      />

      <ShowPasswordContainer>
        <p>Mostrar contraseña</p>
        <CheckInput
          id="X"
          onChange={toggleShowPassword}
          defaultChecked={false}
        />
      </ShowPasswordContainer>
      <Button size="100%" text="Login" type="button" colorMessage="continue" />
    </Form>
  );
}

const ShowPasswordContainer = styled.div`
  display: flex;
  justify-self: left;
  margin: 8px 0px;
  p {
    margin-right: 10px;
  }
`;
