import React from "react";
import LinkNext, { LinkProps } from "next/link";
import styled from "styled-components";

export default function Link(props: LinkComponentProps) {
  return (
    <LinkNext {...props}>
      <LinkNextStyles {...props}>{props.text}</LinkNextStyles>
    </LinkNext>
  );
}

interface LinkComponentProps extends LinkProps {
  text: string;
  as?: any;
}

const LinkNextStyles = styled.a`
  :active {
    color: ${({ theme }) => theme.colors.dark1};
  }
`;
