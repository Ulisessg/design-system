import React, { FC, FocusEvent, ReactElement, useState } from "react";
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
  const [checkInvalid, setCheckInvalid] = useState<boolean>(false)
  const handleFocus = (ev: FocusEvent<HTMLInputElement>) => {
    if(props.onFocus) props.onFocus(ev)
    if(checkInvalid === true) return
    setCheckInvalid(true)
  }
  

  return (
    <LabelStyles htmlFor={props.id}>
      {props.label}
      <InputStyles  
        {...props}
        border={true}
        placeholder={props.placeholder}
        type={props.type}
        onFocus={handleFocus}
        checkInvalid={checkInvalid}
      />
    </LabelStyles>
  );
}

export default TextInput

