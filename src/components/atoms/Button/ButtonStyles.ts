import  {css} from 'styled-components'
import { ButtonStylesProps } from './Props'
import theme from '../../theme'

export const ButtonCommonStyles = css<ButtonStylesProps>`
  margin-top: ${({theme}) => theme.spacing*2}px;
  height: ${theme.spacing * 7}px;
  border-radius: 8px;
  font-weight: bold;
  padding: ${theme.spacing}px;
  height: auto;
  font-size: ${({ size }) => {
    if (size === "small") return "15px";
    return "20px";
  }};
  width: ${({ size }) => {
    if (size === "small") return `${theme.spacing * 20}px`;
    if (size === "large") return `${theme.spacing * 25}`;
    if (size === "100%") return "100%";
  }};
  background-color: ${({  colorMessage, isDisabled }) => {
    if(isDisabled) return theme.colors.dark3
    if (colorMessage === "cancel") return theme.colors.error;
    if (colorMessage === "info") return theme.colors.warning;
    return theme.colors.dark2;
  }};
`

export const textColorStyles = css<ButtonTextColorProps>`
color: ${({ colorMessage,  isDisabled }) => {
    if(isDisabled) return 'white'
    if (colorMessage === "info") return "black";
    if (colorMessage === "continue") return "white";
    return theme.colors.dark1;
  }};
`

interface ButtonTextColorProps extends Pick<ButtonStylesProps, 'colorMessage' | 'isDisabled'> {

}