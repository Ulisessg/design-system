import React from "react";
import styled from "styled-components";
import Link from "../atoms/Link";

export default function Header({ children }: HeaderProps) {
  return <HeaderStyles>{children}</HeaderStyles>;
}

const HeaderStyles = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.light3};
  padding: 30px;
  box-shadow: 0px 7px 8px 0px ${({ theme }) => theme.colors.shadow};
`;

type HeaderProps = {
  children?: React.ReactNode;
};
