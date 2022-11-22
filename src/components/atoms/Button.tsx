import React, { ButtonHTMLAttributes, KeyboardEvent, useState, useRef, useEffect } from "react";
import styled from "styled-components";

export default function Button(props: ButtonProps) {
  const [isEnterPressed, setIsEnterPressed] = useState<boolean>(false)

  const buttonRef = useRef<HTMLButtonElement>(null)
  const handleKeyDown = (ev: KeyboardEvent<HTMLButtonElement>): void => {
    if(ev.key === 'Enter') {
      setIsEnterPressed(true)
    }
  }
  const handleOnKeyUp = (ev: globalThis.KeyboardEvent): void => {
    if(ev.key === 'Enter') {
      setIsEnterPressed(false)
      buttonRef.current?.dispatchEvent(new globalThis.KeyboardEvent('click', {
        repeat: false
      }))
    }
  }

  useEffect(() => {
    buttonRef.current?.addEventListener('keyup', handleOnKeyUp)
    const ref = buttonRef.current as HTMLButtonElement
    return () => {
      ref.removeEventListener('keyup', handleOnKeyUp)
    } 
  }, [])
  return <ButtonStyles {...props} onKeyDown={handleKeyDown} enterPressed={isEnterPressed} ref={buttonRef}>{props.text}</ButtonStyles>;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button text content */
  text: string;
  /** Button type */
  type: "button" | "submit" | "reset";
  /** Button width size
   *  Small - 160px
   *  Large - 200px
   *  100% - 100%
   */
  size: "small" | "large" | "100%";
  /** Button color
   * Continue - dark2: #0C4B8E
   * Info - warning: #EAE509
   * Error - error: #ff0e1a
   */
  colorMessage: "continue" | "info" | "cancel";
}

const ButtonStyles = styled.button<ButtonProps & {enterPressed: boolean}>`
  height: 50px;
  border-radius: 8px;
  cursor: pointer;
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

  color: ${({ colorMessage, theme }) => {
    if (colorMessage === "info") return "black";
    if (colorMessage === "continue") return "white";
    return theme.colors.dark1;
  }};

  background-color: ${({ theme, colorMessage }) => {
    if (colorMessage === "cancel") return theme.colors.error;
    if (colorMessage === "info") return theme.colors.warning;
    return theme.colors.dark2;
  }};

  ${({enterPressed}) => enterPressed ? 'transform: scale(0.9)' : ''};
  :active {
    transform: scale(0.9);
  }
  :focus,
  :hover {
    box-shadow: 0px 1px 5px 0.2px ${({ theme }) => theme.colors.dark3};
  }
`;