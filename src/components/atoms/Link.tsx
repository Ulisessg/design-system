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
  version?: "lighter" | "darker";
}

const LinkNextStyles = styled.a<LinkComponentProps>`
  color: ${({ version, theme }) => {
    if (version === "lighter") return;
    return theme.colors.dark1;
  }};
  :active,
  :focus {
    color: ${({ theme, version }) => {
      if (version === "lighter") return theme.colors.dark1;
      return theme.colors.dark2;
    }};
  }
`;
