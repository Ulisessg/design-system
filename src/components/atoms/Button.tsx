import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export default function Button(props: ButtonProps) {
  return <ButtonStyles {...props}>{props.text}</ButtonStyles>;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type: "button" | "submit" | "reset";
  size: "small" | "large" | "100%";
  colorMessage: "continue" | "info" | "cancel";
}

const ButtonStyles = styled.button<ButtonProps>`
  height: 50px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  padding: 8px;
  height: auto;
  font-size: ${({ size }) => {
    if (size === "small") return "15px";
    return "20px";
  }};

  width: ${({ size }) => {
    if (size === "small") return "160px";
    if (size === "large") return "200px";
    if (size === "100%") return "100%";
  }};

  color: ${({ colorMessage, theme }) => {
    if (colorMessage === "info") return "black";
    if (colorMessage === "continue") return "white";
    return theme.colors.dark1;
  }};

  background-color: ${({ theme, colorMessage }) => {
    if (colorMessage === "cancel") return theme.colors.error;
    if (colorMessage === "info") return theme.colors.warning;
    return theme.colors.dark2;
  }};

  :active {
    transform: scale(0.9);
  }
  :focus,
  :hover {
    box-shadow: 0px 1px 5px 0.2px ${({ theme }) => theme.colors.dark3};
  }
`;
