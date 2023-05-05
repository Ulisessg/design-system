import React, { forwardRef } from "react";
import styled from "styled-components";
import { FormCommonStyles, FormTitleCommonStyles, InputsContainerCommonStyles } from './FormStyles'

export default forwardRef<HTMLFormElement, FormProps>(function Form(props, ref) {
  return (
    <FormContainerStyles {...props} ref={ref}>
      <FormTitleStyles>{props.formTitle}</FormTitleStyles>
      <InputsContainerStyles>{props.children}</InputsContainerStyles>
    </FormContainerStyles>
  );
})

const FormContainerStyles = styled.form`
  ${FormCommonStyles};
  
  box-shadow: 0px 1px 8px 0px ${({theme}) => theme.colors.shadow};
`;

const FormTitleStyles = styled.p`
  ${FormTitleCommonStyles};
`;

const InputsContainerStyles = styled.div`
  ${InputsContainerCommonStyles};
  justify-content: stretch;
`;

export interface FormProps extends ComponentProps<'form'> {
  /** Form tile */
  formTitle: string;
};
