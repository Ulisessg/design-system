import React, { AnchorHTMLAttributes } from "react"
import LinkNext, { LinkProps } from "next/link"
import styled from "styled-components"

export default function Link ({text, target,href,...rest}: LinkComponentProps) {
  if(typeof target === 'undefined') {
    return<LinkNext href={href} legacyBehavior>
      <LinkNextStyles href={href} text={text} {...rest} >{text}</LinkNextStyles>
    </LinkNext>
  }
  return (
    <LinkNext
          href={href}
          legacyBehavior
        >
          <LinkNextStyles 
            {...rest}
            href={href}
            text={text}
            target={target}
            rel="noreferrer noopener"
          >{text}</LinkNextStyles>
        </LinkNext>
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

const LinkNextStyles = styled.a <LinkComponentProps>`
  color: ${({ version, theme }) => {
    if (version === "lighter") return
    return theme.colors.dark1
  }};
  :active,
  :focus, :hover {
    color: ${({ theme, version }) => {
    if (version === "lighter") return theme.colors.dark1
    return theme.colors.dark2
  }};
  }
`
