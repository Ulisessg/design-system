import React from "react";
import styled, { keyframes } from "styled-components";

type LoadingSpinnerProps = {
  size: "small" | "large";
};

export default function LoadingSpinner({ size }: LoadingSpinnerProps) {
  return <Spinner size={size} />;
}

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
