import styled from "styled-components";

const InputStyles = styled.input<{ border: boolean }>`
  width: 200px;
  height: 30px;
  padding-left: 10px;
  border: ${({ border, theme }) =>
    border && `1.5px solid ${theme.colors.dark2}`};
  border-radius: 5px;
`;

export const LabelStyles = styled.label<{ htmlFor: string }>`
  display: grid;
`;

export default InputStyles;
