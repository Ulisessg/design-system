import React, { forwardRef } from "react";
import styled from "styled-components";


export default forwardRef<HTMLElement, HeaderProps>(function Header(props, ref) {
  return <HeaderStyles {...props} ref={ref}>{props.children}</HeaderStyles>;
})

const HeaderStyles = styled.header<HeaderProps>`
  display: grid;
  align-items: center;
  padding-left: ${({theme}) => theme.spacing * 3}px;
  width: 100%;
  height: ${({theme}) => theme.spacing * 12}px;
  background-color: ${({ theme }) => theme.colors.light3};
  box-shadow: 0px 7px 8px 0px ${({ theme }) => theme.colors.shadow};
`;

export interface HeaderProps  extends ComponentProps<'header'> {
};
