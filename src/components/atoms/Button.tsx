import React, { KeyboardEvent, useState, forwardRef } from "react";
import styled from "styled-components";

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
  cursor: ${({isDisabled}) => {
    if(isDisabled) return 'initial'
    return 'pointer'
  }};
  font-weight: bold;
  padding: 8px;
  height: auto;
  font-size: ${({ size }) => {
    if (size === "small") return "15px";
    return "20px";
  }};

  width: ${({ size }) => {
    if (size === "small") return "160px";
    if (size === "large") return "200px";
    if (size === "100%") return "100%";
  }};

  color: ${({ colorMessage, theme, isDisabled }) => {
    if(isDisabled) return 'white'
    if (colorMessage === "info") return "black";
    if (colorMessage === "continue") return "white";
    return theme.colors.dark1;
  }};

  background-color: ${({ theme, colorMessage, isDisabled }) => {
    if(isDisabled) return theme.colors.dark3
    if (colorMessage === "cancel") return theme.colors.error;
    if (colorMessage === "info") return theme.colors.warning;
    return theme.colors.dark2;
  }};

  ${({enterPressed, isDisabled}) => (enterPressed && !isDisabled) ? 'transform: scale(0.9);' : ''}
  :active {
    ${({isDisabled}) => !isDisabled && 'transform: scale(0.9)'}
  }
  :focus,
  :hover {
    box-shadow: 0px 1px 5px 4px ${({ theme, isDisabled }) => {
      if(isDisabled) return
      return theme.colors.dark3
    }};
    outline: 3px solid ${({theme, colorMessage, isDisabled}) => {
      if(isDisabled) return
      if(colorMessage === 'info') return theme.colors.dark2
      return theme.colors.dark1
    }};
  }
`;