import React, { forwardRef } from "react";
import styled from "styled-components";
import { ComponentProps } from '../../lib'

export default forwardRef<HTMLElement, HeaderProps>(function Header(props, ref) {
  return <HeaderStyles {...props} ref={ref}>{props.children}</HeaderStyles>;
})

const HeaderStyles = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.light3};
  padding: 30px;
  box-shadow: 0px 7px 8px 0px ${({ theme }) => theme.colors.shadow};
`;

interface HeaderProps  extends ComponentProps<'header'> {
};
