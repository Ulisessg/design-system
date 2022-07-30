import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export default function Button(props: ButtonProps) {
  return <ButtonStyles {...props}>{props.text}</ButtonStyles>;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type: "button" | "submit" | "reset";
  size: "small" | "large";
}

const ButtonStyles = styled.button<ButtonProps>`
  width: ${({ size }) => (size === "small" ? "70px" : "120px")};
  height: 30px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.dark2};
  box-shadow: 0px 1px 5px 0.2px ${({ theme }) => theme.colors.dark3};
  :active {
    transform: scale(0.9);
  }
`;
