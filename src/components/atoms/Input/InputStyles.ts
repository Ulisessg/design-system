import styled from "styled-components";

const borderPixels = "1.8px";

const InputStyles = styled.input<{ border: boolean, inputInvalid: boolean }>`
  height: 30px;
  padding-left: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: ${borderPixels} solid ${({theme}) => theme.colors.dark2};
  :focus, :hover {
    box-shadow: 0px 0px 5px 3px ${({ theme }) => theme.colors.dark3};
  }
  &:valid {
    border: ${({ border, theme }) =>
      border && `${borderPixels} solid ${theme.colors.dark2}`};
  }

  &:invalid {
    ${({theme, inputInvalid}) => {
      let style: string = ''
      if(inputInvalid === true) {
        style += `border: ${borderPixels} solid ${theme.colors.error};`
        style += 'outline: none;'
        style += `box-shadow: 0px 0px 2px 1px ${theme.colors.error};`
      }
      return style
    }};
  }
`;

export const LabelStyles = styled.label<{ htmlFor: string }>`
  display: grid;
  width: 100%;
  margin-top: 10px;
  & p {
    display: flex;
    align-items: center;
    & samp {
      margin-left: 3px;
    }
    @media screen and (max-width: 300px) {
      display: grid;
      justify-items: flex-start;
      padding: 3px;
      & samp {
        margin-top: 10px;
      }
    }
  }
`;

export const SampStyles = styled.samp`
  display: inline;
  background-color: ${({theme}) =>theme.colors.light1};
  border: 2px solid ${({theme}) =>theme.colors.light1};
  padding: 3px;
  border-radius: 5px;
  font-weight: bold;
  word-break: break-word;
`

export const RequiredMark = styled.span`
  color: ${({theme}) => theme.colors.error};
  font-size: 20px;
  margin-left: 4px;
  align-self: center;
`

export default InputStyles;
