import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";

export interface LoadingSpinnerProps  extends ComponentProps<'div'> {
  /** Spinner size
   * 
   *  Small: width: 40px - height: 40px
   * 
   *  Large: width: 104px - height: 104px
   */
  size: "small" | "large";
};

export default forwardRef<HTMLDivElement, LoadingSpinnerProps>(function LoadingSpinner(props, ref) {
  return <Spinner {...props} size={props.size} ref={ref} />;
})

const spinKeyframe = keyframes`
  to{
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div<LoadingSpinnerProps>`
  width: ${({ size, theme }) => (size === "small" ? `${theme.spacing * 5}px` : `${theme.spacing * 13}px`)};
  height: ${({ size, theme }) => (size === "small" ? `${theme.spacing * 5}px` : `${theme.spacing * 13}px`)};
  border: 4px solid ${({ theme }) => theme.colors.dark1};
  border-radius: 100%;
  border-left-color: ${({ theme }) => theme.colors.light1};
  animation: 0.5s ${spinKeyframe} linear infinite;
`;
