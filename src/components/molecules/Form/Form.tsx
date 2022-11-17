import React, { FormHTMLAttributes } from "react";
import styled from "styled-components";

export default function Form({ title, children, formAttributes }: LoginFormProps) {
  return (
    <FormContainerStyles {...formAttributes}>
      <FormTitleStyles>{title}</FormTitleStyles>
      <InputsContainerStyles>{children}</InputsContainerStyles>
    </FormContainerStyles>
  );
}

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

type LoginFormProps = {
  /** Form tile */
  title: string;
  children: React.ReactNode;
  /** Html form element attributes */
  formAttributes?: FormHTMLAttributes<HTMLFormElement>;
};
