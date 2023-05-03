import React, { FC } from 'react';
import { ButtonNativeProps, ButtonStylesProps } from './Props'
import styled from 'styled-components/native'
import { Text, TouchableOpacity, View } from 'react-native'
import { ButtonCommonStyles, textColorStyles } from './ButtonStyles'

const ButtonNative: FC<ButtonNativeProps> = (props)=> {
  return <ButtonNativeStyles 
    {...props}
  >
    <View>    
      <ButtonTextStyles 
          colorMessage={props.colorMessage}
          size ={props.size}
          text={props.text}
      >{props.text}</ButtonTextStyles>
    </View>
  </ButtonNativeStyles>
}


const ButtonNativeStyles = styled(TouchableOpacity)<ButtonNativeProps>`
  ${ButtonCommonStyles};
`

const ButtonTextStyles = styled(Text)<ButtonStylesProps>`
${textColorStyles};
width: 100%;
text-align: center;
`


export default ButtonNative