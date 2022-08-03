import React, { InputHTMLAttributes } from "react";

export default function CheckInput(props: CheckInputProps) {
  return <input {...props} type="checkbox" />;
}

type CheckInputProps = InputHTMLAttributes<HTMLInputElement>;
