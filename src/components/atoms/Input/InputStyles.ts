import styled from "styled-components";

const InputStyles = styled.input<{ border: boolean }>`
  height: 30px;
  padding-left: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: ${({ border, theme }) =>
    border && `1.5px solid ${theme.colors.dark2}`};
`;

export const LabelStyles = styled.label<{ htmlFor: string }>`
  display: grid;
  width: 100%;
`;

export default InputStyles;
