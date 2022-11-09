import React, { AnchorHTMLAttributes } from "react"
import LinkNext, { LinkProps } from "next/link"
import styled from "styled-components"

export default function Link (props: LinkComponentProps) {
  return (
    <>
      {props.target ? (
        <LinkNextStyles {...props}>{props.text}</LinkNextStyles>
      ) : (
        <LinkNextStyles
          {...props}
          target={props.target}
          rel="noreferrer noopener"
        >
          {props.text}
        </LinkNextStyles>
      )}
    </>
  )
}

interface LinkExternalProps extends AnchorHTMLAttributes<HTMLAnchorElement> { }

interface LinkComponentProps
  extends LinkProps,
  Omit<
    LinkExternalProps,
    "href" | "onClick" | "onMouseEnter" | "onTouchStart"
  > {
  text: string
  as?: any
  version?: "lighter" | "darker"
  target?: "_blank" | "_self" | "_parent" | "_top"
}

const LinkNextStyles = styled(LinkNext) <LinkComponentProps>`
  color: ${({ version, theme }) => {
    if (version === "lighter") return
    return theme.colors.dark1
  }};
  :active,
  :focus {
    color: ${({ theme, version }) => {
    if (version === "lighter") return theme.colors.dark1
    return theme.colors.dark2
  }};
  }
`
