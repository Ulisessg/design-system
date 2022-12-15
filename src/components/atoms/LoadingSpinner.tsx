import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import { ComponentProps } from '../../lib'

interface LoadingSpinnerProps  extends ComponentProps<'div'> {
  /** Spinner size
   * 
   *  Small: width: 40px - height: 40px
   * 
   *  Large: width: 100px - height: 100px
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
  width: ${({ size }) => (size === "small" ? "40px" : "100px")};
  height: ${({ size }) => (size === "small" ? "40px" : "100px")};
  border: 4px solid ${({ theme }) => theme.colors.dark1};
  border-radius: 100%;
  border-left-color: ${({ theme }) => theme.colors.light1};
  animation: 0.5s ${spinKeyframe} linear infinite;
`;
