import React, { FC, FocusEvent, useEffect, useState } from "react";
import  { borderPixels, InputCommonStyles, LabelCommonStyles, commonAcceptanceCriteriaStyles } from "./InputStyles";
import { InputWebProps } from "./InputProps";
import styled from 'styled-components'
import theme from '../../theme'

/**
 * Text Input
 * @typedef {import('./InputProps').InputProps} props
 * @prop {string} id - Input id used in htmlFor prop in label element
 * @prop {"text" | "date" | "datetime-local" | "email" | "password" | "tel" | "url" | "search"} type - defines information field type
 * @prop {string} label - Input placeholder
 * @prop {string} name - Input name
 * @prop {"none | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";} inputMode - Keyboard input mode, mainly for mobile keyboards
 * @return {import('react').ReactElement} ReactElement
 */
 const InputWeb: FC<InputWebProps> = React.forwardRef<HTMLInputElement, InputWebProps>(function InputWeb({inputInvalid = false,...props}, ref) {
  const [showAcceptanceCriteria, setShowAcceptanceCriteria] = useState<boolean>(false)
  const handleOnFocus = (ev: FocusEvent<HTMLInputElement>) => {
    props.onFocus?.(ev);
    if(typeof props.acceptanceCriteria === 'string') {
      setShowAcceptanceCriteria(true)
    }
  }
  const handleOnBlur = (ev: FocusEvent<HTMLInputElement>) => {
    props.onBlur?.(ev);
    setShowAcceptanceCriteria(false)
  }
  useEffect(() => {
    if(process.env.NODE_ENV !== 'production' && typeof props.placeholder === 'string') console.warn(`Placeholder attribute is
not recommendable for accessibility purposes.
      
More info: https://www.smashingmagazine.com/2018/06/placeholder-attribute/
      `);
  }, [props.placeholder])

  return (
    <LabelStyles {...props.labelProps} htmlFor={props.id}>
      <p>
      {props.label}
      
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
        className={inputInvalid ? `${props.className ?? ''} invalid-input-style` : ` ${props.className ?? ''}`}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <AcceptanceCriteriaStyles 
        style={{visibility: showAcceptanceCriteria ? 'initial' : 'hidden'}}
        aria-hidden={!showAcceptanceCriteria}
        aria-live='polite'
      >{props.acceptanceCriteria}</AcceptanceCriteriaStyles>
    </LabelStyles>
  );
})

const InputStyles = styled.input<{ border: boolean, inputInvalid: boolean }>`
  ${InputCommonStyles};
  :focus, :hover {
    box-shadow: 0px 0px 5px 1px ${theme.colors.light2};
    outline: 1px solid ${({theme}) =>theme.colors.light2};
  }
  &:valid {
    border: ${({ border }) =>
      border && `${borderPixels} solid ${ theme.colors.light2}`};
  }

  &:invalid {
    ${({inputInvalid}) => {
      let style: string = ''
      if(inputInvalid === true) {
        style += `border: ${borderPixels} solid ${theme.colors.error};`
        style += 'outline: none;'
        style += `box-shadow: 0px 0px 2px 1px ${theme.colors.error};`
      }
      return style
    }};
  }
`;

export const LabelStyles = styled.label<{ htmlFor: string }>`
  ${LabelCommonStyles};
  & p {
    display: flex;
    flex-direction: row;
    align-items: center;
    & samp {
      margin-left: 3px;
    }
    @media screen and (max-width: 300px) {
      justify-items: flex-start;
      padding: 3px;
      & samp {
        margin-top: 10px;
      }
    }
  }
  .invalid-input-style {
    border: ${borderPixels} solid ${theme.colors.error};
    outline: none;
    box-shadow: 0px 0px 2px 1px ${theme.colors.error};
  }
`;

export const AcceptanceCriteriaStyles = styled.samp`
  ${commonAcceptanceCriteriaStyles}
`

export const RequiredMark = styled.span`
  color: ${theme.colors.error};
  font-size: 20px;
  margin-left: 4px;
  align-self: center;
`

export default InputWeb

