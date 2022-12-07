import styled from "styled-components";

const borderPixels = "1.8px";

const InputStyles = styled.input<{ border: boolean, checkInvalid?: boolean }>`
  height: 30px;
  padding-left: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: ${borderPixels} solid ${({theme}) => theme.colors.dark2};
  &:valid {
    border: ${({ border, theme }) =>
      border && `${borderPixels} solid ${theme.colors.dark2}`};
  }

  &:invalid {
    border: ${borderPixels} solid ${({ theme, checkInvalid }) => {
      if(checkInvalid === true) {
        return theme.colors.error
      }
      return theme.colors.dark2
    }};
    outline: none;
  }
`;

export const LabelStyles = styled.label<{ htmlFor: string }>`
  display: grid;
  width: 100%;
`;

export default InputStyles;
