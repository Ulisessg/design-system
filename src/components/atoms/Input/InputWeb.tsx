import React, { FC, FocusEvent, MouseEvent, useEffect, useId, useRef, useState } from "react";
import  { borderPixels, InputCommonStyles, LabelCommonStyles } from "./InputStyles";
import { InputWebProps } from "./InputProps";
import styled from 'styled-components'
import theme from '../../theme'
import AcceptanceCriteria from '../AcceptanceCriteria/AcceptanceCriteriaWeb'


 const InputWeb: FC<InputWebProps> = React.forwardRef<HTMLInputElement, InputWebProps>(function InputWeb({inputInvalid = false,...props}, ref) {
  const [showAcceptanceCriteria, setShowAcceptanceCriteria] = useState<boolean>(props.showAcceptanceCriteria || false)
  const inputIsFocusedRef = useRef<boolean>(false)
  const defaultId = useId()
  const inputId = props.id || defaultId
  
  /**
   * If props.acceptanceCriteria is defined thats 'show' value
   * @param {boolean} show
   * @returns {void}
   */
  const handleSetShowAcceptanceCriteria = (show: boolean, mouseEvent?: boolean): void => {
    if (typeof props.showAcceptanceCriteria === 'boolean') {
      setShowAcceptanceCriteria(props.showAcceptanceCriteria)
    } else {
      if(mouseEvent === true && inputIsFocusedRef.current) {
        setShowAcceptanceCriteria(true)
        return
      }
       
      setShowAcceptanceCriteria(show)
    }
  }

  const handleOnFocus = (ev: FocusEvent<HTMLInputElement>) => {
    props.onFocus?.(ev);
    handleSetShowAcceptanceCriteria(true)
    inputIsFocusedRef.current = true
  }

  const handleOnBlur = (ev: FocusEvent<HTMLInputElement>) => {
    props.onBlur?.(ev);
    handleSetShowAcceptanceCriteria(false)
    inputIsFocusedRef.current = false
  }

  const handleOnMouseOver = (ev: MouseEvent<HTMLInputElement>) => {
    props.onMouseOver?.(ev)
    handleSetShowAcceptanceCriteria(true, true)
  }

  const handleOnMouseOut = (ev: MouseEvent<HTMLInputElement>) => {
    props.onMouseOver?.(ev)
    handleSetShowAcceptanceCriteria(false, true)
  }

  useEffect(() => {
    if(typeof props.showAcceptanceCriteria === 'boolean') {
      setShowAcceptanceCriteria(props.showAcceptanceCriteria)
    }
  }, [props.showAcceptanceCriteria])

  useEffect(() => {
    if(process.env.NODE_ENV !== 'production' && typeof props.placeholder === 'string') console.warn(`Placeholder attribute is
not recommendable for accessibility purposes.
      
More info: https://www.smashingmagazine.com/2018/06/placeholder-attribute/
      `);
  }, [props.placeholder])

  return (
    <LabelStyles {...props.labelProps} htmlFor={inputId}>
      <p>
      {props.label}
      
      {props.required === true &&
        <RequiredMark aria-hidden={true}>*</RequiredMark>}
      </p>
      <InputStyles  
        {...props}
        id={inputId}
        border={true}
        type={props.type}
        inputInvalid={inputInvalid}
        aria-required={props.required || false}
        ref={ref}
        className={`${props.className ?? ''} ${inputInvalid && 'invalid-input-style'}`}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
        title={props.acceptanceCriteria || ''}
      />
      <AcceptanceCriteria
        show={props.showAcceptanceCriteria || showAcceptanceCriteria}
        text={props.acceptanceCriteria || ''}
        error={inputInvalid}
      />
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
    @media screen and (max-width: 300px) {
      justify-items: flex-start;
      padding: 3px;
    }
  }
  .invalid-input-style {
    border: ${borderPixels} solid ${theme.colors.error};
    outline: none;
    box-shadow: 0px 0px 2px 1px ${theme.colors.error};
  }
`;



export const RequiredMark = styled.span`
  color: ${theme.colors.error};
  font-size: 20px;
  margin-left: 4px;
  align-self: center;
`

export default InputWeb

