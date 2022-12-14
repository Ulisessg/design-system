import React, { ChangeEvent, FC, FocusEvent, FormEvent, ReactElement, useEffect, useState,  } from "react";
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
 const TextInput: FC<TextInputProps> = (props: TextInputProps): ReactElement => {
  const [checkInvalid, setCheckInvalid] = useState<boolean>(false)
  const handleBlur = (ev: FocusEvent<HTMLInputElement>) => {
    if(props.onBlur) props.onBlur(ev)
    ev.currentTarget.checkValidity()
    ev.currentTarget.reportValidity()
    setCheckInvalid(true)
  }
  
  const handleOnInput = (ev: FormEvent<HTMLInputElement>) => {
    if(props.onInput) props.onInput(ev)
    setCheckInvalid(true)
  }

  const handleOnChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if(props.onChange) props.onChange(ev)
    ev.currentTarget.checkValidity()
    ev.currentTarget.reportValidity()
  }

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
        <SampStyles>&nbsp;{props.acceptanceCriteria}</SampStyles>}
      
      {props.required === true &&
        <RequiredMark aria-hidden={true}>*</RequiredMark>}
      </p>
      <InputStyles  
        {...props}
        border={true}
        placeholder={props.placeholder}
        type={props.type}
        onBlur={handleBlur}
        checkInvalid={checkInvalid}
        onInput={handleOnInput}
        onChange={handleOnChange}
        aria-required={props.required || false}
      />
    </LabelStyles>
  );
}

export default TextInput

