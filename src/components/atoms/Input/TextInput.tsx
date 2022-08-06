import React from "react";
import InputStyles, { LabelStyles } from "./InputStyles";
import { TextInputProps } from "./InputProps";

export default function TextInput(props: TextInputProps) {
  return (
    <LabelStyles htmlFor={props.id}>
      {props.label}
      <InputStyles {...props} border={true} placeholder={props.placeholder} />
    </LabelStyles>
  );
}

/*type inputs =
  | "text"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "image"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "url";
*/
