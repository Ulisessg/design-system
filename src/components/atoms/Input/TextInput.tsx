import React, { FC, ReactElement } from "react";
import InputStyles, { LabelStyles } from "./InputStyles";
import { TextInputProps } from "./InputProps";

/**
 * Text Input
 * @typedef {import('./InputProps').TextInputProps} props
 * @prop {string} id - Input id used in htmlFor prop in label element
 * @prop {"text" | "date" | "datetime-local" | "email" | "password" | "tel" | "url" | "search"} type - defines information field type
 * @prop {string} label - Input placeholder
 * @prop {string} name - Input name
 * @prop {"none | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";} inputMode - Keyboard input mode, mainly for mobile keyboards
 * @return {import('react').ReactElement} ReactElement
 */
 const TextInput: FC<TextInputProps> = (props: TextInputProps): ReactElement => {
  return (
    <LabelStyles htmlFor={props.id}>
      {props.label}
      <InputStyles  {...props}  border={true} placeholder={props.placeholder} type={props.type} />
    </LabelStyles>
  );
}

export default TextInput

