import React, { KeyboardEvent, useState, forwardRef } from "react";
import { ButtonWebProps, ButtonWebStylesProps } from './Props'
import styled from 'styled-components'
import { ButtonCommonStyles, textColorStyles } from './ButtonStyles'
import theme from '../../theme'

export default forwardRef<HTMLButtonElement,ButtonWebProps>(function Button(props:ButtonWebProps, ref) {
  const [isEnterPressed, setIsEnterPressed] = useState<boolean>(false)

  const handleKeyDown = (ev: KeyboardEvent<HTMLButtonElement>): void => {
    if(props.onKeyDown) props.onKeyDown(ev)
    if(ev.key === 'Enter' || ev.key === ' ') {
      setIsEnterPressed(true)
    }
  }

  const handleOnKeyUp = (ev: KeyboardEvent<HTMLButtonElement>): void => {
    if(props.onKeyUp) props.onKeyUp(ev)
    if(ev.key === 'Enter' || ev.key === ' ') {
      setIsEnterPressed(false)
      ev.target?.dispatchEvent(new globalThis.KeyboardEvent('click', {
        repeat: false
      }))
    }
  }

  return <ButtonWebStyles
    {...props}
    onKeyDown={handleKeyDown}
    enterPressed={isEnterPressed}
    onKeyUp={handleOnKeyUp}
    ref={ref}
    isDisabled={props.disabled}    
  >
    {props.text}
  </ButtonWebStyles>;
})

const ButtonWebStyles = styled.button<ButtonWebStylesProps>` 
  ${ButtonCommonStyles}
  ${textColorStyles};
  cursor: ${({isDisabled}) => {
    if(isDisabled) return 'initial'
    return 'pointer'
  }};

  ${({enterPressed, isDisabled}) => (enterPressed && !isDisabled) ? 'transform: scale(0.9);' : ''}
  :active {
    ${({isDisabled}) => !isDisabled && 'transform: scale(0.9)'}
  }
  :focus,
  :hover {
    box-shadow: 0px 1px 5px 4px ${({  isDisabled }) => {
      if(isDisabled) return
      return theme.colors.dark3
    }};
    outline: 3px solid ${({ colorMessage, isDisabled}) => {
      if(isDisabled) return
      if(colorMessage === 'info') return theme.colors.dark2
      return theme.colors.dark1
    }};
}`