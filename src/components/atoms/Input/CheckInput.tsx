import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

export default function CheckInput(props: CheckInputProps) {
  return <CheckInputStyles {...props} type="checkbox" />;
}

const CheckInputStyles = styled.input<CheckInputProps>`
  cursor: pointer;
`;

type CheckInputProps = InputHTMLAttributes<HTMLInputElement>;
