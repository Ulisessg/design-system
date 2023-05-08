import { css } from "styled-components";
import theme from '../../theme';

export const borderPixels = "1.8px";

export const InputCommonStyles = css`
  height: ${theme.spacing * 4}px;
  padding-left: ${theme.spacing}px;
  border-radius: 5px;
  margin: ${theme.spacing}px 0px;
  border: ${borderPixels} solid ${theme.colors.light2};
`

export const LabelCommonStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${theme.spacing}px;
`

export const commonAcceptanceCriteriaStyles = css`
  color: ${theme.colors.dark2};
  font-size: 16px;
`
