import React from "react";
import InputStyles, { LabelStyles } from "./InputStyles";
import { FileInputProps } from "./InputProps";

export default function FileInput(props: FileInputProps) {
  return (
    <LabelStyles htmlFor={props.id}>
      {props.label}
      <InputStyles {...props} border={false} />
    </LabelStyles>
  );
}
