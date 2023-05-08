import React, { FC, useRef, useState } from 'react';
import styled, { css } from 'styled-components/native'
import { InputCommonStyles, LabelCommonStyles, commonAcceptanceCriteriaStyles } from './InputStyles'
import { InputNativeProps } from './InputProps'
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputFocusEventData } from 'react-native'
import theme from '../../theme'

const InputNative: FC<InputNativeProps> = (props) => {
  const ref = useRef<TextInput>()
  
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const handleFocus = (ev: NativeSyntheticEvent<TextInputFocusEventData>) => {
    props.onFocus?.(ev)
    setIsFocused(true)
  }
  const handleOnBlur = (ev: NativeSyntheticEvent<TextInputFocusEventData>) => {
    props.onBlur?.(ev)
    setIsFocused(false)
  }

  return <LabelNativeStyles>
    <LabelContainer>
      <LabelTextStyles 
        nativeID={props.id}
      >
        {props.label}
      </LabelTextStyles>
      {props.required &&  <RequiredMarkStyles>*</RequiredMarkStyles>} 
    </LabelContainer>
    <InputNativeStyles
      {...props as any}
      ref={ref}
      isFocused={isFocused}
      onFocus={handleFocus}
      onBlur={handleOnBlur}
      accessibilityLabelledBy={props.id}
      onChangeText={props.onChangeText}
      style={[
        InputNativeStylesRN.input,
        props.style ?? {}]
      }
    />
     {(isFocused && props.acceptanceCriteria) &&
      <AcceptanceCriteria 
      >
        {props.acceptanceCriteria}
      </AcceptanceCriteria>}
  </LabelNativeStyles>
}

export default InputNative


const focusStyles = css`
  border-width: 2.5px;
`

const InputNativeStyles = styled.TextInput<{isFocused: boolean} & InputNativeProps>`
  ${InputCommonStyles};
  ${({isFocused}) => isFocused && focusStyles};
  ${({inputInvalid}) => inputInvalid && 'border-color: red'};
`

const InputNativeStylesRN = StyleSheet.create({
  input: {
    paddingVertical: theme.spacing,
  }
})

const LabelContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const LabelTextStyles = styled.Text`
  font-size: 18px;
`

const RequiredMarkStyles = styled.Text`
  margin-left: ${theme.spacing}px;
  color: ${theme.colors.error};
  font-size: 18px;
`


const AcceptanceCriteria = styled.Text`
  ${commonAcceptanceCriteriaStyles};
  margin-bottom: ${theme.spacing * 2}px;
`

const LabelNativeStyles = styled.View`
  ${LabelCommonStyles}
`