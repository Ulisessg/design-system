import React, { FC, useEffect } from "react";
import InputStyles, { LabelStyles, SampStyles, RequiredMark } from "./InputStyles";
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
 const TextInput: FC<TextInputProps> = React.forwardRef<HTMLInputElement, TextInputProps>(function TextInput({inputInvalid = false,...props}, ref) {
  useEffect(() => {
    if(process.env.NODE_ENV !== 'production' && typeof props.placeholder === 'string') console.warn(`Placeholder attribute is
not recommendable for accessibility purposes.
      
More info: https://www.smashingmagazine.com/2018/06/placeholder-attribute/
      `);
  }, [props.placeholder])

  return (
    <LabelStyles htmlFor={props.id}>
      <p>
      {props.label}
      
      {typeof props.acceptanceCriteria === 'string' && 
        <SampStyles>{props.acceptanceCriteria}</SampStyles>}
      
      {props.required === true &&
        <RequiredMark aria-hidden={true}>*</RequiredMark>}
      </p>
      <InputStyles  
        {...props}
        border={true}
        placeholder={props.placeholder}
        type={props.type}
        inputInvalid={inputInvalid}
        aria-required={props.required || false}
        ref={ref}
        className={inputInvalid ? 'invalid-input-style': ' '}
      />
    </LabelStyles>
  );
})

export default TextInput
