import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps {
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

export interface ButtonStylesProps extends ButtonProps {
  isDisabled?: boolean,
}

export interface ButtonWebStylesProps extends ButtonStylesProps {
  enterPressed: boolean
}

// Components props
export type ButtonWebProps  = ButtonProps & ComponentProps<'button'>


export type ButtonNativeProps =  ButtonStylesProps & TouchableOpacityProps 