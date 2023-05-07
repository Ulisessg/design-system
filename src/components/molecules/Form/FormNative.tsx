import React, { FC, ReactNode } from 'react';
import styled from 'styled-components/native'
import { FormCommonStyles, FormTitleCommonStyles, InputsContainerCommonStyles } from './FormStyles'

const FormNative: FC<FormNativeProps> = ({children, formTitle}) => {
  return <FormStyles>
    <FormTitle>{formTitle}</FormTitle>
    <InputsContainer style={{justifyContent: 'space-around'}}>
      {children}
    </InputsContainer>
  </FormStyles>
}

const FormStyles = styled.View`
  ${FormCommonStyles}
`
const FormTitle = styled.Text`
  ${FormTitleCommonStyles};
`

const InputsContainer = styled.View`
  ${InputsContainerCommonStyles}
`

export interface FormNativeProps {
  children: ReactNode
  formTitle: string
}

export default FormNative