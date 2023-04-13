import React, { forwardRef } from "react";
import styled from "styled-components";

export default forwardRef<HTMLFormElement, FormProps>(function Form(props, ref) {
  return (
    <FormContainerStyles {...props} ref={ref}>
      <FormTitleStyles>{props.formTitle}</FormTitleStyles>
      <InputsContainerStyles>{props.children}</InputsContainerStyles>
    </FormContainerStyles>
  );
})

const FormContainerStyles = styled.form`
  display: grid;
  justify-items: center;
  width: 100%;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 1px 8px 0px ${({ theme }) => theme.colors.shadow};
`;

const FormTitleStyles = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
`;

const InputsContainerStyles = styled.div`
  width: 100%;
  margin: 20px;
  display: grid;
  justify-content: stretch;
`;

export interface FormProps extends ComponentProps<'form'> {
  /** Form tile */
  formTitle: string;
};
