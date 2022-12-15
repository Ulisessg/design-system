import React, { KeyboardEvent, useState, useRef, useEffect, forwardRef } from "react";
import styled from "styled-components";
import { ComponentProps } from '../../lib'

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(props: ButtonProps, ref) {
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

  return <ButtonStyles 
    {...props}
    onKeyDown={handleKeyDown}
    enterPressed={isEnterPressed}
    onKeyUp={handleOnKeyUp}
    ref={ref}
    isDisabled={props.disabled}
  >
    {props.text}
  </ButtonStyles>;
})

export interface ButtonProps extends ComponentProps<'button'> {
  /** Button text content */
  text: string;
  /** Button width size
   *  
   *  Small - 160px
   *  
   *  Large - 200px
   *  
   *  100% - 100%
   */
  size: "small" | "large" | "100%";
  /** Button color
   * 
   * Continue - dark2: #0C4B8E
   * 
   * Info - warning: #ecd50d
   * 
   * Error - error: white
   */
  colorMessage: "continue" | "info" | "cancel";
}

const ButtonStyles = styled.button<{enterPressed: boolean, isDisabled?: boolean, size: ButtonProps['size'], colorMessage: ButtonProps['colorMessage']}>`
  height: 50px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  padding: 8px;
  height: auto;
  font-size: 28px;

  width: ${({ size }) => {
    if (size === "small") return "180px";
    if (size === "large") return "200px";
    if (size === "100%") return "100%";
  }};

  border: 2px solid ${({ theme,colorMessage }) => {
    if(colorMessage === 'info') return theme.colors.warning
    return theme.colors.dark1
  }};

  color: ${({ colorMessage, isDisabled }) => {
    if(isDisabled) return 'white'
    if (colorMessage === "info") return '#000000';
    if (colorMessage === "continue") return "white";
    return 'black';
  }};

  background-color: ${({ theme, colorMessage, isDisabled }) => {
    if(isDisabled) return theme.colors.dark3
    if (colorMessage === "cancel") return 'white';
    if (colorMessage === "info") return theme.colors.warning;
    return theme.colors.dark1;
  }};

  ${({enterPressed, isDisabled}) => (enterPressed && !isDisabled) ? 'transform: scale(0.9);' : ''}
  :active {
    ${({isDisabled}) => !isDisabled && 'transform: scale(0.9)'}
  }
  :focus,
  :hover {
    box-shadow: 0px 1px 6px 4px ${({ theme, isDisabled, colorMessage }) => {
      if(isDisabled) return
      return theme.colors.dark3
    }};
  }
`;