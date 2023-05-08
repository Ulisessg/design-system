import { css } from 'styled-components';
import theme from '../../theme'

export const FormCommonStyles = css`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: ${theme.spacing * 5}px;
  border-radius: 10px;
`
export const FormTitleCommonStyles = css`
  font-size: 30px;
  font-weight: bold;
  margin-top: ${theme.spacing * 4}px;
`

export const InputsContainerCommonStyles = css`
  width: 100%;
  margin: ${theme.spacing * 3}px;
  display: flex;
  flex-direction: column;
`
