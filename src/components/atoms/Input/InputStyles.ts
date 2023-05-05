import { css } from "styled-components";
import theme from '../../theme';

export const borderPixels = "1.8px";

export const InputCommonStyles = css`
  height: 30px;
  padding-left: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: ${borderPixels} solid ${theme.colors.light2};
`

export const LabelCommonStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`

export const commonAcceptanceCriteriaStyles = css`
  color: ${theme.colors.dark2};
  font-size: 16px;
`
